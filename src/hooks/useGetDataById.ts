import { useState, useEffect } from "react";
import { getCategoryById, type Categorys } from "../services/swapiApi";

interface LoadingState {
    isLoading: true;
    data: undefined;
    error: null;
}

interface LoadedState<T> {
    isLoading: false;
    data: T;
    error: null;
}

interface ErrorState<T> {
    isLoading: false;
    data: T | undefined;
    error: Error;
}

type UseGetDataByIdResult<T> = LoadingState | LoadedState<T> | ErrorState<T>;

export default function useGetDataById<T>(
    category: Categorys,
    id: number
): UseGetDataByIdResult<T> {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getCategoryById<T>(category, id);
                setData(data);

                setIsLoading(false);
            } catch (err: unknown) {
                setError(
                    err instanceof Error
                        ? err
                        : new Error("Unknown Error when fetching")
                );
                setIsLoading(false);
            }
        };
        getData();
    }, [category, id]);

    if (error) return { isLoading: false, data, error: error };

    if (isLoading) return { isLoading: true, data: undefined, error: null };

    if (!data) return { isLoading: true, data: undefined, error: null };

    return { data, isLoading: false, error: null };
}
