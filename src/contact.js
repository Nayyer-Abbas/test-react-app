import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {useState} from 'react';

function Contact() {
    const [page, setPageCheck] = useState('Contact');
    function pages(){
        setPageCheck('About');
    }
    return(
        <>
            <section>
               <Container>
                   <Row>
                       <Col md={12} className="my-5 text-center">
                            <h1 onMouseEnter={pages}>This is {page} Page.</h1>
                       </Col>
                   </Row>
               </Container>
           </section>
            
        </>
        
    );
}

export default Contact;