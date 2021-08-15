import React from 'react'
import ButtonsLarge from '../../Buttons/ButtonsLarge'
import './createAccountMobile.css'
import facebookIcon from '../../../images/facebookIcon.png'
import googleIcon from '../../../images/googleIcon.png'

export default function CreateAccountMobile() {
    return (
        <div>
            <div className="container p-0 modalContainerLeft d-flex flex-column">

                <div className="container-fluid p-0 d-flex">
                    <input type="text" className="form-control" placeholder="First name" />
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <input type="email" className="form-control" placeholder="Email" />
                <input type="password" className="form-control" placeholder="Password" />
                <input type="password" className="form-control" placeholder="Confirm Password" />

                <div className="container-fluid p-0 d-flex align-items-center justify-content-between">
                    <div >
                    <ButtonsLarge text="Create Account" Color={"blue"} br2={"br2"} />

                    </div>
                    <span className="mycreateAccount mt-3">or,Sign In</span>
                </div>

                <ButtonsLarge image={facebookIcon} text="Sign up with Facebook" Color={"sign"} />
                <ButtonsLarge className="mt-0" image={googleIcon} text="Sign up with Google" Color={"sign"} />
                
                <div className="container noteEnd text-center mt-2">
                    By signing up, you agree to our Terms & conditions, Privacy policy
                </div>
            </div>
        </div>
    )
}



