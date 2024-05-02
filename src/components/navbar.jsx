import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'

import secondpage from '../Pages/secondpage.js'
import about from '../Pages/about.js'

const NavbarComponent = () => {
  return (
    <BrowserRouter>
            
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/secondpage">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Router */}
        <Routes>
          <Route path="/secondpage" element={<secondpage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default NavbarComponent;




