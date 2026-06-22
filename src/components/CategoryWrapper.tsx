import { Spinner } from "react-bootstrap";
import useGetData from "../hooks/useGetData";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router";
import Search from "./Search";
import ResultsText from "./ResultsText";
import type { Categorys } from "../services/swapiApi";

interface PageWrapperProps<T> {
    children: (data: T[]) => React.ReactNode
    category: Categorys
}

export default function CategoryWrapper<T>({ children, category }: PageWrapperProps<T>) {
    const [search] = useSearchParams()

    const { data, isLoading, error } = useGetData<T>(category, Number(search.get("page")), search.get("query"))

    const searchquery = search.get("query")

    if (error) {
        return <>{error.message}</>
    }

    return <>

        <Search categroy="films" />

        {searchquery && !isLoading && <ResultsText text={searchquery} count={data.data.length} />}

        {isLoading ?
            <div className="d-flex justify-content-center align-items-center">
                <Spinner />
            </div>
            : (
                <div className="grid">
                    {children(data.data)}
                </div>
            )
        }

        {data && data.data.length > 0 && <Pagination current_page={data.current_page} last_page={data.last_page} />}

    </>
}
