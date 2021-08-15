import React from 'react'
import './ButtonsLarge.css'
import { useState } from 'react';
import MyModal from '../myModal/MyModal'
import { Link } from 'react-router-dom';

const STYLES = ['btn--orange', 'btn--green'];

export default function ButtonsLarge({text, btnColor,br2, Color,image,onclicks,modalPath}) {

    const checkButtonStyle = STYLES.includes(btnColor) ? btnColor : STYLES[0];

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container-fluid btncontainer">
            
            {/* <Link to={modalPath}> */}
            <button onClick={() => setModalShow(onclicks)} className={`btn ${checkButtonStyle} ${Color} ${br2}`}> <img src={image} alt="" /> {text}</button>
            {/* </Link> */}
            <MyModal show={modalShow} 
            onHide={() => setModalShow(false)}/>
        </div>
    )
}
