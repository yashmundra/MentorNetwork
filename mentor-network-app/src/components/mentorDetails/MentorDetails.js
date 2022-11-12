import { Button, Chip, Paper, Typography } from "@mui/material";
import './MentorDetails.css'
import * as Constants from '../../constants/Constants'
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function MentorDetails(props){

    const navigate = useNavigate();

    function handleClick(){
        navigate(Constants.CHAT_URL)
    }

    return (
        <Paper className="mentorDetailsContainer" elevation={3}>
            <div style={{justifySelf: 'center'}}>
            <img alt="profile-selfie" src={Constants.PHOTO_URL} width='100%' height='100%'></img>
            </div>
        
            <div>
            <Typography variant="h5">Yash Mundra</Typography><br></br>
            <Typography variant="h6">SDE, Amazon</Typography><br></br>
            <Typography variant="h7">Let's make you money</Typography>
    
            
            </div>

            <Button className="chatButton" onClick={handleClick} variant="contained">Chat</Button>
            <div>
            <Stack direction="row" spacing={1}>
            <Chip label="Earns 100k+" />
            <Chip label="Remote Work" />
            </Stack>
            </div>
        </Paper>
    )
}