import React from "react";
import { ReactDOM, useState } from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Services () {
    const thead = [{id:"ID", name:"Name", gender:"Gender", phone:"Phone", email:"Email", update:"Actions"}];
    const tdata = [{id:1, name:"First", gender:"Male", phone:"123456", email:"first@gmail.com"},
    {id:2, name:"Second", gender:"Female", phone:"123456789", email:"second@gmail.com"},
    {id:3, name:"Third", gender:"Male", phone:"123456789", email:"third@gmail.com"},
    {id:4, name:"Forth", gender:"Female", phone:"123456789", email:"forth@gmail.com"},
    {id:5, name:"Fifth", gender:"Male", phone:"123456789", email:"fifth@gmail.com"}];
    const [heading, setHeading] = useState(thead);
    const [user, setUser] = useState(tdata);

    const [newUser, setNewUser] = useState({
        name:"", gender:"", phone:"", email:""
    });
    const handleNewUser = (event) =>{
        event.preventDefault();

        const getAttr = event.target.getAttribute('name');
        const saveAttr = event.target.value;

        const saveNewUser = {...newUser};
        saveNewUser[getAttr] = saveAttr;
        
        setNewUser(saveNewUser);
    };

    const handleNewUserSave = (event) => {
        event.preventDefault();
        const saveNewUser = {
            name: newUser.name, gender: newUser.gender, phone: newUser.phone, email: newUser.email
        };

        const addNewUser = [...user, saveNewUser];
        setUser(addNewUser);
    };



    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <h2>Enter New User</h2>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleNewUserSave}>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <input type="text" required name="name" placeholder="Enter Your Name" onChange={handleNewUser} />
                        </Col>
                        <Col md={6}>
                            <input type="text" required name="gender" placeholder="Enter Your Gender" onChange={handleNewUser} />
                        </Col>
                        <Col md={6}>
                            <input type="email" required name="email" placeholder="Enter Your Email" onChange={handleNewUser} />
                        </Col>
                        <Col md={6}>
                            <input type="text" required name="phone" placeholder="Enter Your Phone Number" onChange={handleNewUser} />
                        </Col>
                        <Col md={6}>
                            <input type="submit" value="Save" />
                        </Col>
                    </Row>
                </form>
            
            </Modal.Body>
        </Modal>
    );}

    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={9} className="my-5">
                            <h1>User Table</h1>
                        </Col>
                        <Col md={3} className="my-5">
                            <Button className="mt-3 float-end" variant="success" onClick={() => setModalShow(true)}>Add New</Button>
                        </Col>
                        <Col md={12} className="text-center">
                            <Table responsive bordered striped hover>
                                <thead>
                                    
                                    {heading.map((thead, index) => (
                                    <tr>
                                        <th>{thead.id}</th>
                                        <th>{thead.name}</th>
                                        <th>{thead.gender}</th>
                                        <th>{thead.phone}</th>
                                        <th>{thead.email}</th>
                                        <th>{thead.update}</th>
                                    </tr>
                                    ))}
                                    
                                </thead>
                                <tbody>
                                    {user.map((user, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td><Button variant="primary">Edit</Button><Button variant="danger">Delete</Button></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>

                            
                            
                            
                        </Col>
                    </Row>
                </Container>
            </section>



            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
        
    );
}

export default Services;