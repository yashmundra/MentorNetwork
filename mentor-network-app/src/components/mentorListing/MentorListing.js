import './MentorListing.css'
import MentorDetails from '../mentorDetails/MentorDetails'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {getMentorList} from '../../services/apiUtil'

export default function MentorListing() {

    const [mentorList, setMentorList] = useState([]);

    useEffect(()=>{
        setMentorList(getMentorList())
    },[])

    return (
        <>
        <Typography className="logo" variant="h2">Mentor Network</Typography>
        <div className='listingContainer'>
            {mentorList.map((mentor) => <MentorDetails key={mentor.userId} mentorInfo={mentor} />)}
        </div>
        </>
    )

}