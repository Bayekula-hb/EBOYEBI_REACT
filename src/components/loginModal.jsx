import { useState } from "react";
import {Modal, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";

export default function LoginModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="btn--login" variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Identifiez-vous <br/>
            <Link className="link link--compte"> ou créer un compte simplemnt </Link></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <LoginForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }