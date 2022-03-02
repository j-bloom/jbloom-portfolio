import React from "react";
import "../css/header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="nav-barS">
            <Nav.Link className="nav-bar__item" href="/">Home</Nav.Link>
            <Nav.Link className="nav-bar__item" href="/AboutMe">About Me</Nav.Link>
            <Nav.Link className="nav-bar__item" href="/Technologies">Technologies</Nav.Link>
            <Nav.Link className="nav-bar__item" href="/MyWork">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
