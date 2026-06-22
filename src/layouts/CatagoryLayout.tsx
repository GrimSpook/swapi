import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import "../assets/scss/style.scss"


export default function CatagoryLayout() {

    return (
        <Container className="mt-4 mb-4">
            <Outlet />
        </Container>
    )

}
