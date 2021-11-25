import React from "react";
import { useState } from "react";
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import data from "./user-components/tableData.json";
import AddUserForm from "./user-components/addUserForm";
import Tabledata from "./user-components/userTable";

function Contact () {

    const [users, setUsers] = useState(data);

    const addUser = (user) => {
        user.id =  users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !==id))
    }

    const [editForm, setEditForm] = useState(false);


    const initFormState = {id: "null", name:"", email:"", gender:"", phone:"" }
    const [currentUser, setCurrentUser] = useState(initFormState);

    const editRow = (user) => {
        setEditForm(true)

        setCurrentUser({ id: user.id, name: user.name, gender: user.gender, email: user.email, phone: user.phone })
    }


    const [modalShow, setModalShow] = useState(false);
    const AddUserModal = (props) => {
        return(
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
                    <AddUserForm addUser={addUser} onHide={props.onHide} />
                </Modal.Body>
            </Modal>
        );
    }

    

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
                        <Col md={12} className="my-5 text-center">
                    
                            <Tabledata users={users} setUsers={setUsers} deleteUser={deleteUser} editRow={editRow} />

                        </Col>
                    </Row>
                </Container>
            </section>

            <AddUserModal show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
        
    );
}

export default Contact;