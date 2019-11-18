import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from "../../axios";
import React from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';
import { useState } from 'react'

function ModalComponent() {

    
    const [show, setShow] = useState(false);

    const uploadAgain = () => {
        setShow(false);
        this.props.history.push("/dashboard");
    }
    
    const goToStore = () => {
        setShow(false);
        this.props.history.push("/store");
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>File Uploaded</Modal.Title>
                </Modal.Header>
                <Modal.Body>File succesfully uploaded to database.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={uploadAgain}>
                        Upload Again
          </Button>
                    <Button variant="primary" onClick={goToStore}>
                        Back to main
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;