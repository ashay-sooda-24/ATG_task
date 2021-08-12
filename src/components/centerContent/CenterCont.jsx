import React from 'react'
import Post from '../post/Post'
import './center.css'
import postImage1 from '../../images/postImage1.png'
import postImage2 from '../../images/postImage2.png'
import postType1 from '../../images/postType1.png'
import postType2 from '../../images/postType2.png'
import profilePic1 from '../../images/profilePic1.png'
import profilePic2 from '../../images/profilePic2.png'

export default function CenterCont() {
    return (
        <div className="center">
            <Post postImage={postImage1}
                postType={postType1}
                postTitle="What if famous brands had regular fonts? Meet RegulaBrands!"
                postDesc="I've worked in UX for the better part of a decade. From now on, I plan to rei..." 
                profilePic={profilePic1}
                username="Sarthak Karma"/>
            <Post postImage={postImage2}
                postType={postType2}
                postTitle="Tax Benefits for Investment under National Pension Scheme launched by Government"
                postDesc="I've worked in UX for the better part of a decade. From now on, I plan to rei..." 
                profilePic={profilePic2}
                username="Sarah West"/>
        </div>
    )
}
