import React from 'react'
import './postJob.css'
import { Card } from 'react-bootstrap';
import views from '../../images/views.png'
import PostOptions from '../../images/postOptions.png'
import share from '../../images/share.png'
import locationIcon from '../../images/locationIcon.png'
import ButtonsLarge from '../Buttons/ButtonsLarge';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function PostJob({ postImage, postType, postTitle, profilePic, username, jobDescLogo, jobDescTag, jobLocationName, btnTxt, btnColor }) {


    return (
        <div className="postJob mt-3">
            <Card>
                <Card.Img variant="top" src={postImage} />
                <Card.Body className="d-flex flex-column">
                    <div className="container">
                        <img src={postType} alt="" />
                    </div>
                    <div className="title d-flex align-items-center justify-content-between">
                        <div className="container JpostTitle">
                            {postTitle}
                        </div>
                        <div className="postOptions">
                            <img src={PostOptions} />
                            
                        </div>

                    </div>

                    <div className="container postDesc">
                        <div className="container-fluid detailContainer">
                            <div className="container jobDetail d-flex align-items-center justify-content-between">
                                <div className="jobDesc d-flex align-items-center">
                                    <img src={jobDescLogo} alt="" />
                                    <div className="jobDescTag">
                                        {jobDescTag}
                                    </div>
                                </div>
                                <div className="jobLocation d-flex align-items-center">
                                    <img src={locationIcon} alt="" />
                                    <div className="jobLocationName">
                                        {jobLocationName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ButtonsLarge
                        text={btnTxt}
                        btnColor={btnColor} />

                    <div className="container-fluid detail d-flex align-items-center">
                        <div className="left d-flex align-items-center">
                            <img src={profilePic} alt="" />
                            <div className="username">
                                {username}
                            </div>
                        </div>
                        <div className="postDetails container-fluid d-flex align-items-center justify-content-end">
                            <div className="right d-flex align-items-center">
                                <div className="postViews">
                                    <img src={views} alt="" />
                                    1.4k views
                                </div>
                                <div className="share bg-gray d-flex justify-content-center align-items-center">
                                    <img src={share} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>



                </Card.Body>
            </Card>
        </div>
    )
}