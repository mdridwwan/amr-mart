import { TextField, Button, Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { shadows } from '@material-ui/system';

const ReviewCount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [reviwSuccess, setReviewSuccess] = useState(false);
    const { user } = useAuth();
     
   
    const [rattingInfo, setRattingInfo] = useState({clientName: user.displayName, email: user.email, img: user.photoURL});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...rattingInfo };
        newInfo[field] = value;
        setRattingInfo(newInfo);

    };
    
    console.log(rattingInfo);
    const handleBookingSubmit = e => {
        setIsLoading(true);
        console.log(rattingInfo)
        fetch('https://enigmatic-citadel-16277.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rattingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setReviewSuccess(true);
                    setRattingInfo('');
                    setIsLoading(false);
                }
            });
            e.target.reset()
        e.preventDefault();
    }
        
    return (
        <div>
            <Box boxShadow={1} >
                <h2>Ratting</h2>
                {reviwSuccess && <Alert severity="success">Thank You, Your Comment successfully Post!</Alert>}
               
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-textarea"
                        name="commetn"
                        label="Comment"
                        placeholder="Your Comment"
                        onBlur={handleOnBlur}
                        multiline
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="filled-number"
                        label="Number"
                        type="number"
                        name="ratting"
                        onBlur={handleOnBlur}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                    <Button sx={{ float: 'center', width: '50%'  }} type="submit" variant="contained">Submit</Button>
                </form> 
                {
                    isLoading && <CircularProgress color="secondary" />
                }
           </Box>
        </div>
    );
};

export default ReviewCount;