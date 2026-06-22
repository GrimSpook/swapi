import { Button, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";
import "../assets/scss/style.scss"


export default function CatagoryLayout() {

    const navigate = useNavigate()

    return (
        <Container className="mt-4 mb-4">
            <div className="my-2">
                <Button variant="outline-secondary" onClick={() => navigate(-1)}>Back</Button>
            </div>
            <Outlet />
        </Container>
    )

}
