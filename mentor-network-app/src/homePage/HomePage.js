import React from "react";
import './HomePage.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <div className='homePageContainer'>
            <Typography className="logo" variant="h2">Mentor Network</Typography>
            <Button className="loginButton" variant="contained">SignUp/Login</Button>
            <Typography className="title" variant="h2">1-1 Mentoring</Typography>
            <Typography className="titleDescription row3" variant="h4">Master your craft with leading mentors at your side.<br></br>Grow with every online mentoring session and take the next step in your career.<br></br>All on your terms, for a flat monthly price.</Typography>
            
            
            <Button component={Link} to="/mentorLanding" className="mentorButton row7" variant="contained">Become a mentor</Button>  
            <Button component={Link} to="/questionaire" className="mentorButton row6" variant="contained">Search for Mentors</Button>
               
        </div>
    )
}