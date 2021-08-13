import React from 'react'
import './ButtonsLarge.css'

const STYLES = ['btn--orange', 'btn--green'];

export default function ButtonsLarge({text, btnColor}) {

    const checkButtonStyle = STYLES.includes(btnColor) ? btnColor : STYLES[0];

    return (
        <div className="container-fluid btncontainer">
            <button className={`btn ${checkButtonStyle}`}>{text}</button>
        </div>
    )
}
