import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";

export default function HeaderNav() {

    return <Navbar expand="lg" className="sticky-top bg-secondary-subtle">

        <Container>
            <Navbar.Brand>Swapi Starwars Wiki</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="">
                    <Nav.Item accessKey="/">
                        <NavLink className="nav-link" to="/" >Home</NavLink>
                    </Nav.Item>

                    <Nav.Item accessKey="/films">
                        <NavLink className="nav-link" to="/films?page=1" >Films</NavLink>
                    </Nav.Item>

                    <Nav.Item accessKey="/people">
                        <NavLink className="nav-link" to="/people?page=1" >People</NavLink>
                    </Nav.Item>

                    <Nav.Item accessKey="/planets">
                        <NavLink className="nav-link" to="/planets?page=1" >Planets</NavLink>
                    </Nav.Item>

                    <Nav.Item accessKey="/species">
                        <NavLink className="nav-link" to="/species?page=1" >Species</NavLink>
                    </Nav.Item>

                    <Nav.Item accessKey="/starships">
                        <NavLink className="nav-link" to="/starships?page=1" >Starships</NavLink>
                    </Nav.Item>

                    <Nav.Item accessKey="/vehicles">
                        <NavLink className="nav-link" to="/vehicles?page=1" >Vehicles</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>

}
