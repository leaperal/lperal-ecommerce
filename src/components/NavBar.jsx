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
          <Navbar.Brand>
          <NavLink to="/">TT Argentina</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink className="navLink" to="category/Rubber">Gomas</NavLink>
            <NavLink className="navLink" to="category/Blades">Maderas</NavLink>
            <NavLink className="navLink" to="category/Balls">Pelotas</NavLink>
            <NavLink className="navLink" to="category/Others">Otros</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
    );
};