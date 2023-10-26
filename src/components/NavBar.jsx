import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return( 
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TT Argentina</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gomas</Nav.Link>
            <Nav.Link href="#features">Maderas</Nav.Link>
            <Nav.Link href="#pricing">Mesas</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
    );
};