import { Button } from "react-bootstrap"
import { useSearchParams } from "react-router"

interface PaginationProps {
    current_page: number
    last_page: number
}

export default function Pagination({ current_page, last_page }: PaginationProps) {

    const [search, setSearch] = useSearchParams()

    const onClick = (page: number) => {
        if (page === 0) return
        if (page - 1 === last_page) return
        const newParams = new URLSearchParams(search)
        newParams.set("page", String(page))
        setSearch(newParams)
    }

    const isPrevDisabled = current_page === 1
    const isNextDisabled = current_page === last_page

    return <div className="d-flex align-items-center justify-content-between py-4">

        <Button
            disabled={isPrevDisabled}
            variant={isPrevDisabled ? "outline-secondary" : "primary"}
            onClick={() => { onClick(current_page - 1) }}
        >
            Prev
        </Button>

        <span>{current_page}/{last_page}</span>

        <Button
            disabled={isNextDisabled}
            variant={isNextDisabled ? "outline-secondary" : "primary"}
            onClick={() => { onClick(current_page + 1) }}
        >
            Next
        </Button>

    </div>
}

