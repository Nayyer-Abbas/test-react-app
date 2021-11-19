import React from "react";
import { ReactDOM } from "react";
import {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Services() {
    const [click, setCheckClick] = useState(100);
    function clickCount(){
        setCheckClick(click-1);
    }
    return(
        <>
           <section>
               <Container>
                   <Row>
                       <Col md={12} className="my-5 text-center">
                            <h1>Services</h1>
                            <button onClick={clickCount}>Click Me</button>
                            <p>you have {click} click</p>
                       </Col>
                   </Row>
               </Container>
           </section>
            
        </>
        
    );
}

export default Services;