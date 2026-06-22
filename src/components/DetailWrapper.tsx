import { useParams } from "react-router"
import type { Categorys } from "../services/swapiApi"
import useGetDataById from "../hooks/useGetDataById"

interface DetailWrapperProps<T> {
    children: (data: T) => React.ReactNode
    category: Categorys
}


export default function DetailWrapper<T>({ children, category }: DetailWrapperProps<T>) {

    const param = useParams()

    const { data, isLoading, error } = useGetDataById<T>(category, Number(param.id))

    if (error) {
        return <>{error.message}</>
    }

    return <>
        {
            isLoading
                ? <></>
                : <>{children(data)}</>
        }
    </>
}
