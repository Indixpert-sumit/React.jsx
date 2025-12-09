import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Subscribe() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Subscribe
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Don't miss out</Modal.Title>
        </Modal.Header>
        <Modal.Body>singnup for our newsletter to stay upto date </Modal.Body>
        <Modal.Footer >
          <input type="email" value="email" placeholder='enter your email here' /> 
          <span><button>Subscribe</button></span>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Subscribe;