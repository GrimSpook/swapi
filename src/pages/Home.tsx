import { useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";


export default function HomePage() {

    const navigate = useNavigate()

    const [input, setInput] = useState("")
    const [select, setSelect] = useState("films")

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/${select}?page=1&query=${input}`)
    }

    const arr = [
        {
            name: "films",
            src: "films.webp",
        },
        {
            name: "people",
            src: "people.webp",
        },
        {
            name: "planets",
            src: "planets.webp",
        },
        {
            name: "species",
            src: "species.png",
        },
        {
            name: "starships",
            src: "starships.png",
        },
        {
            name: "vehicles",
            src: "vehicles.png",
        },
    ]


    return <div className="">
        <div className="d-flex justify-content-center bg-secondary-subtle py-4 flex-column gap-4 px-4 text-center">
            <h1>Swapi Wiki</h1>
            <Form onSubmit={handleSubmit} className="">
                <InputGroup className="">
                    <Form.Select value={select} onChange={(e) => setSelect(e.target.value)} className="" size="lg">
                        <option value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">StarShips</option>
                        <option value="vehicles">Vehicles</option>
                    </Form.Select>
                    <Form.Control
                        size="lg"
                        placeholder={`search ${select}`}
                        name="input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-50"
                    />
                    <Button type="submit" variant="outline-secondary" id="button-addon2" size="lg">
                        Search
                    </Button>
                </InputGroup>
            </Form>
        </div>

        <Container className="my-5">
            <div className="grid justify-content-center align-items-center">
                {arr.map((item) => (
                    <NavLink key={item.name} className="g-col-4" to={`/${item.name}?page=1`} >
                        <Card className="overflow-hidden" >
                            <Card.Img src={`/${item.src}`} height={"300px"} className="object-fit-cover image-blur" />
                            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                <Card.Title className="text-capitalize bg-secondary-subtle p-4 rounded">
                                    {item.name}
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </NavLink>
                ))}
            </div>
        </Container>
    </div>
}


