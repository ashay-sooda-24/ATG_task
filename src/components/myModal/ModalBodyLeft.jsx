import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './modalbodyLeft.css'
import CreateAccount from './modalBodyLeftInputs/CreateAccount'
import SignIn from './modalBodyLeftInputs/SignIn'

export default function ModalBodyLeftt() {
    return (
        <>
            <CreateAccount />
            {/* <Router> */}
                {/* <Switch> */}
                    {/* <Route path='/signin' exact component={SignIn}> */}
                        {/* <SignIn/> */}
                    {/* </Route> */}
                    {/* <Route path='/' > */}
                    {/* <CreateAccount /> */}
                    {/* </Route> */}
                {/* </Switch> */}
            {/* </Router> */}
        </>
    )
}

