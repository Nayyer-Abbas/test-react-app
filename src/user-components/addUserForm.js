import React, {useState} from "react";
import { Row, Col } from 'react-bootstrap';

function AddUserForm(props){

    const initFormState = {id: "null", name:"", email:"", gender:"", phone:"" }
    const [user, setUser] = useState(initFormState);
    
    const handleInputChange = (event) => {
        const { name, value} = event.target 
        setUser({...user, [name]: value });
        
    }
    
    return(
        
        <form
            onSubmit={(event) =>{
                event.preventDefault();
                if(!user.name || !user.gender || !user.email || !user.email ) return 
                props.addUser(user)
                setUser(initFormState);
                props.onHide();
            }}
        >
            {/* <h2>Enter New User</h2> */}
            <Row className="justify-content-center">
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
                    <input  type="submit" value="Save" />
                </Col>
            </Row>
        </form>
    );
}

export default AddUserForm;