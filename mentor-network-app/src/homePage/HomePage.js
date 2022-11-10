import React from "react";
import './HomePage.css'

export default function HomePage(){
    return (
        <div className='homePageContainer'>
            <p className="logo">Mentor Network</p>
            <button className="loginButton">SignUp/Login</button>
            <p className="title">1-1 Mentoring</p>
            <p className="titleDescription row3">Master your craft with leading mentors at your side.<br></br> </p>
            <p className="titleDescription row4">Grow with every online mentoring session and take the next step in your career.<br></br> </p>
            <p className="titleDescription row5">All on your terms, for a flat monthly price </p>
            <button className="mentorButton row6">Search for Mentors</button>
            <button className="mentorButton row7">Become a mentor</button>           
    </div>
    )
}