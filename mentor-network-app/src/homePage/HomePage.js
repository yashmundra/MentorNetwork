import React from "react";
import './HomePage.css'

export default function HomePage(){
    return (
        <div className='homePageContainer'>
            <p className="logo">Mentor Network</p>
            <button className="loginButton">SignUp/Login</button>
            <p className="title">1-1 Mentoring</p>
            <p className="titleDescription1">Master your craft with leading mentors at your side.<br></br> </p>
            <p className="titleDescription2">Grow with every online mentoring session and take the next step in your career.<br></br> </p>
            <p className="titleDescription3">All on your terms, for a flat monthly price </p>
            <button className="searchMentorsButton">Search for Mentors</button>
            <button className="becomeMentorButton">Become a mentor</button>           
    </div>
    )
}