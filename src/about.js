import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function About () {
        return(
            <>
                <section>
                    <Container>
                        <Row>
                            <Col md={12} className="my-5 text-center">
                                <h1 className="my-5">About</h1>
                                <Table responsive bordered striped variant="dark" hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        {Array.from({ length: 12 }).map((_, index) => (
                                            <th key={index}>Table heading</th>
                                        ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        {Array.from({ length: 12 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        {Array.from({ length: 12 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        {Array.from({ length: 12 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                    </tbody>
                                    </Table>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
            </>
            
        );
}

export default About;