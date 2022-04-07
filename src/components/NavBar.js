import react from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NavBarStyle.css"
const NavBar = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>SuperHeroes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to='/home' className="linkNavBar" style={{ textDecoration: "none" }}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/heroes' className="linkNavBar" style={{ textDecoration: "none" }}>Heroes</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/agregarHeroe' className="linkNavBar" style={{ textDecoration: "none" }}>Agregar Heroe</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
};

export default NavBar;
