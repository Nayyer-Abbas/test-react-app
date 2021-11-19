import React from "react";
import { ReactDOM } from "react";
import Button from "@restart/ui/esm/Button";
import { Container, Row, Col, Modal } from 'react-bootstrap';

function Doctors () {
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
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                This is my first modal
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
    return(
        <>
            <section>
               <Container>
                   <Row>
                       <Col md={12} className="my-5 text-center">
                            <h1 className="my-5">Doctors</h1>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Modal Button
                            </Button>
                        
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                       </Col>
                   </Row>
               </Container>
           </section>

            
            
        </>
        
    );
}

export default Doctors;