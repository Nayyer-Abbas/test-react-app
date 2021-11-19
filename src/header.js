import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './logo.svg';
import $ from 'jquery';

function Header() {
    $(function() {
        $('nav li a').click(function(){
            $('nav li a').removeClass('active');
            $(this).addClass('active');
        });
    });
    return(
        <header>
            <Container>
                <Row>
                    <Col md="4" className="main-logo">
                    <Link to="/"><img src={Logo} /></Link>
                    </Col>
                    <Col md={8} className="menu">
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto my-auto">
                                    <ul>
                                        <li><Link className="active" to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/doctors">Our Doctors</Link></li>
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