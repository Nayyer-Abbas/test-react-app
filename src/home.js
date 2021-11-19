import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {Dropdown } from 'react-bootstrap';

function Home(props) {
    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={12} className="my-5 text-center">
                            <h1 className="my-5">This is {props.name} Page</h1>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dar" variant="secondary">
                                Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item active>Something else</Dropdown.Item>
                                    <Dropdown.Item>Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
        
    );
}

export default Home;