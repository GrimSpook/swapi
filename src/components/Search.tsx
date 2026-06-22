import { Button, Form, InputGroup } from "react-bootstrap"
import type { Categorys } from "../services/swapiApi"
import { useSearchParams } from "react-router"
import { useState } from "react"


interface SearchProps {
    categroy: Categorys
}


export default function Search({ categroy }: SearchProps) {

    const [search, setSearch] = useSearchParams()

    const [input, setInput] = useState(search.get("query") || "")

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (input === "") {
            setSearch(`?page=1`)
        } else {
            setSearch(`?page=1&query=${input}`)
        }

    }

    return <>

        <Form onSubmit={handleSubmit}>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder={`search ${categroy}`}
                    name="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

        </Form>

    </>
}
