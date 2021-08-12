import React from 'react'
import './buttons.css'

export default function Buttons({source, text, btnStyle,color,bg}) {
    return (
        <div className ="buttons">
            {
                btnStyle ? <button>{text} <img src={source} alt="" /></button> : <button style={{color:"white",backgroundColor:"#2F6CE5"}}><img src={source} className="me-2" alt="" />{text}</button>
                
            }

        </div>
    )
}