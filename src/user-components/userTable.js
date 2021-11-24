import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import { Button , Modal } from 'react-bootstrap';
import EditUserForm from "./editUserForm";
import data from "./tableData.json";



const Tabledata = (props) => {
    const [users, setUsers] = useState(data);

    const [userToEdit,setUserToEdit] = useState(null);

    const [editForm, setEditForm] = useState(false);



    const initFormState = {id: "null", name:"", email:"", gender:"", phone:"" }
    const [currentUser, setCurrentUser] = useState(initFormState);

    const editRow = (user) => {
        setEditForm(true)

        setCurrentUser({ id: user.id, name: user.name, gender: user.gender, email: user.email, phone: user.phone })
    }

    

    const updateUser = (id, updatedUser) => {
        setEditForm(true)

        setUsers(users.map((user)=> (user.id === id ? updatedUser : user )))
    }


    const editHandler = ( e ,user) => {
        // props.editRow(user);
        setUserToEdit(user)
        setModalShow(true);
    }

    const [modalShow, setModalShow] = useState(false);
    const EditUserModal = (props) => {
        return(
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <h2>Edit User</h2>
                </Modal.Header>
                <Modal.Body>
                    <EditUserForm setEditForm={setEditForm} currentUser={currentUser} userToEdit={userToEdit} updateUser={updateUser} />
                    
                </Modal.Body>
            </Modal>
        );
    }



    return(

        <>
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
                    {props.users.map((user, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button onClick={(e) => editHandler(e , user)}  variant="primary">Edit</Button>
                            <Button onClick={() => props.deleteUser(user.id)} variant="danger">Delete</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            <EditUserModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
    
}

export default Tabledata;



