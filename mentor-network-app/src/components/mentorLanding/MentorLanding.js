import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Constants from '../../constants/Constants'

export default function MentorLanding(){

    const navigate = useNavigate()

    return (
        <>
        <Typography variant="h2">Mentor Landing.</Typography>
        <Typography variant="h2">Wanna make $$$ ?</Typography>
        <Button onClick={() => navigate(Constants.SIGNUP_LOGIN_URL)} variant="contained">Register</Button> 
        </>
    )
}