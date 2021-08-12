import React from 'react'
import logo from '../../images/logo.png'
import searchIcon from '../../images/searchIcon.png'
import dropDownIcon from '../../images/dropDownIcon.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './topbar.css'

export default function Topbar() {
    return (
            <div className="container-fluid topbar d-flex align-items-center bg-light">
                <div className="container topbarLogo">
                    <Link className="link" to="/">
                        <img  src={logo} alt=""  className=""/>
                    </Link>
                </div>
                <div className="container topbarSearch d-flex align-items-center">
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder="Search for your favourite groups in ATG" />
                </div>
                <div className="container topbarCreate d-flex align-items-center">
                    Create account. It's free!
                    <img src={dropDownIcon} alt="" />
                </div>
            </div>
    )
}
