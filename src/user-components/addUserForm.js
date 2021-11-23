import React from "react";
import { useState } from "react";

function addUserForm(){
    return(
        <form className="about-form">
            <h2>Enter New User</h2>
            <Row className="justify-content-center">
                <Col md={6}>
                    <input type="text" required name="name" placeholder="Enter Your Name" />
                </Col>
                <Col md={6}>
                    <input type="text" required name="gender" placeholder="Enter Your Gender" />
                </Col>
                <Col md={6}>
                    <input type="email" required name="email" placeholder="Enter Your Email" />
                </Col>
                <Col md={6}>
                    <input type="text" required name="phone" placeholder="Enter Your Phone Number" />
                </Col>
                <Col md={6}>
                    <input type="submit" value="Save" />
                </Col>
            </Row>
        </form>
    );
}

export default addUserForm;