import React from 'react'
import { Modal } from 'react-bootstrap';
import ModalBody from './ModalBody';
import ModalTitle from './ModalTitle';
import './myModal.css'

export default function MyModal(props) {
    return (
        <div>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
        >
            <Modal.Header className="modal1" closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="modal2">
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalTitle title="Create Account" util="Already have a account?" linker="Sign In" linkerPath={'/signin'}/>    
                <ModalBody/>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
        </div>
    )
}
