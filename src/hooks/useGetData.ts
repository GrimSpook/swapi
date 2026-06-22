import { useState, useEffect } from "react";
import { getCategory, type Categorys } from "../services/swapiApi";
import type { ApiResponse } from "../types/api/generic.types";

interface LoadingState {
    isLoading: true;
    data: undefined;
    error: null;
}

interface LoadedState<T> {
    isLoading: false;
    data: ApiResponse<T>;
    error: null;
}

interface ErrorState<T> {
    isLoading: false;
    data: ApiResponse<T> | undefined;
    error: Error;
}

type UseGetDataResult<T> = LoadingState | LoadedState<T> | ErrorState<T>;

export default function useGetData<T>(
    category: Categorys,
    page: number | null,
    searchQuery?: string | null
): UseGetDataResult<T> {
    const [data, setData] = useState<ApiResponse<T>>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getCategory<ApiResponse<T>>(
                    category,
                    page || 1,
                    searchQuery
                );

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
    }, [category, page, searchQuery]);

    if (error) return { isLoading: false, data, error: error };

    if (isLoading) return { isLoading: true, data: undefined, error: null };

    if (!data) return { isLoading: true, data: undefined, error: null };

    return { data, isLoading: false, error: null };
}
