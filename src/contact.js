import React from "react";
import { ReactDOM, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import tableData from "./user-components/tableData.json";

function Contact () {
    const tableUsers = [{tableData}];
    const [users, setUsers] = useState(tableUsers);


    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={12} className="my-5 text-center">
                            <h1 className="my-5">User Table</h1>
                            <Table responsive bordered striped hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Phone Number</th>
                                        <th>Email Address</th>
                                        <th>Actions</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Button variant="primary">Edit</Button>
                                            <Button variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
        
    );
}

export default Contact;