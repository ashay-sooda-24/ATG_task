import React from 'react'
import './modalBody.css'
import modalImage from '../../images/modalImage.png'
import ModalBodyLeft from './ModalBodyLeft'
import CreateAccount from './modalBodyLeftInputs/CreateAccount'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './modalBodyLeftInputs/SignIn'
import CreateAccountMobile from './modalBodyLeftInputs/CreateAccountMobile'

export default function ModalBody() {



    return (
        <div className="container modalContainer d-flex">
            {/* <ModalBodyLeft/> */}
            {/* <div className="lgAcc">
                // <CreateAccount />
            </div>
            <div className="smAcc">
                <CreateAccountMobile className="smAcc" />
            </div> */}


             <Switch> 

                <Route path='/signin' exact  component={SignIn}/> 
                <Route path='/' component={CreateAccount}/>
                

            </Switch> 

            <div className="container-fluid p-0 modalContainerRight">
                <img src={modalImage} alt="" />
            </div>
        </div>
    )
}
