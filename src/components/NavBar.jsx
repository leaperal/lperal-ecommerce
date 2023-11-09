import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return( 
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <NavLink to="/">TT Argentina</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/Rubber">Gomas</NavLink>
            <NavLink to="category/Blades">Maderas</NavLink>
            <NavLink to="category/Balls">Pelotas</NavLink>
            <NavLink to="category/Others">Otros</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
    );
};