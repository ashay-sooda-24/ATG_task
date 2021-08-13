import React from 'react'
import './pageSelect.css'
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';
import dropdown from '../../images/dropDownIcon.png'
import joinGroupIcon from '../../images/joinGroupIcon.png'
import { Link } from 'react-router-dom';

export default function PageSelect() {

    

    return (
        <>
            <Container fluid className="cont">
                <Container>
                    <Navbar bg="white" expand="lg" className="pageSelect">
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                                activeKey="/"

                            >
                                {/* <Link to="/" className="pageChoice">All Posts(32)</Link>
                            <Link className="article" to="/article">Article</Link> */}
                                <Nav.Link href="/" >All Posts(32)</Nav.Link>
                                <Nav.Link href="/article">Article</Nav.Link>
                                <Nav.Link href="#action3">Even</Nav.Link>
                                <Nav.Link href="#action4">Education</Nav.Link>
                                <Nav.Link href="#action5">Job</Nav.Link>
                            </Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Buttons source={dropdown} text="Write a Post" btnStyle={true} color="black" />
                                <Buttons  source={joinGroupIcon} text="Join Group" btnStyle={false}/>
                                
                            </Navbar.Collapse>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        </>
    )
}
