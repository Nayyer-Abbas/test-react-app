import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function About () {
        return(
            <>
                <section>
                    <Container>
                        <Row>
                            <Col md={12} className="my-5 text-center">
                                <h1>About</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
            </>
            
        );
}

export default About;