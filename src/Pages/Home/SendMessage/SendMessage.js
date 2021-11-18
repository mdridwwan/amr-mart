import { TextField, Button, Typography } from '@mui/material';
import React from 'react';

const SendMessage = () => {
    return (
        <div class="mt-5">
            
            <Typography variant="h3">Send us a Message</Typography>

            <form >
                <TextField sx={{ width: '50%', m: 1 }} id="outlined-basic" label="Name" variant="outlined" />
                <TextField sx={{ width: '50%', m: 1 }} id="outlined-basic" label="Email Address" variant="outlined" />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-multiline-static"
                    label="Massage"
                    multiline
                    rows={4}
                    defaultValue="Enter Your Massage"
                />
                <Button sx={{ float: 'center', width: '50%', background: 'rgb(8, 25, 82)' }} type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default SendMessage;