import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSIdeNav from '../LeftSideNav/LeftSIdeNav';


const Header = () => {
    return (
        <Navbar collapseOnSelect className="mb-4 py-2" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to="/">News Protal</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Category</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSIdeNav/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;