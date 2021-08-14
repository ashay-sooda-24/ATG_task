import React from 'react'
import ButtonsLarge from '../../Buttons/ButtonsLarge'
import './createAccount.css'
import facebookIcon from '../../../images/facebookIcon.png'
import googleIcon from '../../../images/googleIcon.png'

export default function CreateAccount() {
    return (
        <div className="container p-0 modalContainerLeft d-flex flex-column">

            <div className="container-fluid p-0 d-flex">
                <input type="text" className="form-control" placeholder="First name" />
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <input type="email" className="form-control" placeholder="Email" />
            <input type="password" className="form-control" placeholder="Password" />
            <input type="password" className="form-control" placeholder="Confirm Password" />


            <ButtonsLarge text="Create Account" Color={"blue"} br2={"br2"} />

            <ButtonsLarge image={facebookIcon} text="Sign up with Facebook" Color={"sign"} />
            <ButtonsLarge className="mt-0" image={googleIcon} text="Sign up with Google" Color={"sign"} />
        </div>
    )
}
