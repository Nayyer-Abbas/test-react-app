import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './logo.svg';

function Header() {
    return(
        <header>
            <Container>
                <Row>
                    <Col md="4" className="main-logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                    </Col>
                    <Col md={8} className="menu">
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto my-auto">
                                    <ul>
                                        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/services">Services</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/user-table">User Table</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/doctors">Our Doctors</NavLink></li>
                                    </ul>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;