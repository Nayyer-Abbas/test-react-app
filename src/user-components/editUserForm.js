import React, {useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';

function EditUserForm(props){
    // console.log("userToEdit",props.userToEdit);
    

    const [user, setUser] = useState(props.currentUser);   
    
    const handleInputChange = (event) => {
        const { name, value} = event.target 
        setUser({...user, [name]: value });
    }

    useEffect(() => { setUser(props.currentUser)}, [props])

    return(
        <form
            onSubmit={(event) =>{
                event.preventDefault()
                props.updateUser(user.id, user)
            }}
        >
            {/* <h2>Edit User</h2> */}
            <Row className="justify-content-center edit-form">
                <Col md={6}>
                    <input type="text" required name="name" value={user.name} placeholder="Enter Your Name" onChange={handleInputChange} />
                </Col>
                <Col md={6}>
                    <input type="text" required name="gender" value={user.gender} placeholder="Enter Your Gender" onChange={handleInputChange} />
                </Col>
                <Col md={6}>
                    <input type="email" required name="email" value={user.email} placeholder="Enter Your Email" onChange={handleInputChange} />
                </Col>
                <Col md={6}>
                    <input type="text" required name="phone" value={user.phone} placeholder="Enter Your Phone Number" onChange={handleInputChange} />
                </Col>
                <Col md={6}>
                    <input type="submit" value="Update" />
                    <button onClick={() => props.setEditForm(false)} className="btn btn-warning">Cancel</button>
                </Col>
            </Row>
        </form>
    );
}

export default EditUserForm;