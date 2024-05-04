import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavbarComponent = () => {
  return (

      <Navbar className="myNavbar" bg="danger" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/">CSTool</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/clone">Clone number</Nav.Link>
                
                  <Nav.Link as={Link} to="/migration">SDP Migration</Nav.Link>
                </Nav>
        </Container>
      </Navbar>


  );
}
export default NavbarComponent ;