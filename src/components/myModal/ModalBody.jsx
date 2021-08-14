import React from 'react'
import './modalBody.css'
import modalImage from '../../images/modalImage.png'
import ModalBodyLeft from './ModalBodyLeft'

export default function ModalBody() {
    return (
        <div className="container modalContainer d-flex">
            <ModalBodyLeft/>
            <div className="container-fluid p-0 modalContainerRight">
                <img src={modalImage} alt="" />
            </div>
        </div>
    )
}
