import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Constants from '../../constants/Constants'
import './Questionaire.css'

export default function Questionaire(){

    const [age, setAge] = useState(20);

    const navigate = useNavigate();

    function handleClick(inputAge){
        setAge(inputAge)
        navigate(Constants.MENTOR_LISTING_URL)
    }

    return (
    <>
    <div className="questionContainer">
     <Typography className="question" variant="h2">How is your sex life? Age is {age}</Typography>
        </div>
        <div className="answerContainer">
        <Button className="answer" style={{gridColumn: 2}} onClick={() => handleClick(10)} variant="contained">10</Button>
        <Button className="answer" style={{gridColumn: 4}} onClick={() => handleClick(20)} variant="contained">20</Button>
        <Button className="answer" style={{gridColumn: 6}} onClick={() => handleClick(30)} variant="contained">30</Button>
        </div>

    </>
    
    )
}