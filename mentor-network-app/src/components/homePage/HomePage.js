import React from "react";
import './HomePage.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import * as Constants from '../../constants/Constants'

export default function HomePage(){

    const navigate = useNavigate();

    return (
        <div className='homePageContainer'>
            <Typography className="logo" variant="h2">Mentor Network</Typography>
            <Button className="loginButton" onClick={() => navigate(Constants.SIGNUP_LOGIN_URL)} variant="contained">SignUp/Login</Button>
            <Typography className="title" variant="h2">1-1 Mentoring</Typography>
            <div className="titleDescription">
            <Typography className="row3" variant="h4">Master your craft with leading mentors at your side.<br></br></Typography>
            <Typography className="row4" variant="h4">Grow with every online mentoring session and take the next step in your career.<br></br></Typography>
            <Typography className="row5" variant="h4">All on your terms, for a flat monthly price.</Typography>
            
            </div>
           <Button component={Link} to="/mentorLanding" className="mentorButton row7" variant="contained">Become a mentor</Button>  
        <Button component={Link} to="/questionaire" className="mentorButton row6" variant="contained">Search for Mentors</Button>
               
        </div>
    )
}