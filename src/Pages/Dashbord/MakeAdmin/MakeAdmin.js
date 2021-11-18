import { Alert, TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubit = e => {
        const user = { email };

        fetch('https://enigmatic-citadel-16277.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    //  setEmail('');
                    setSuccess(true)
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubit}>
                {
                    success && <Alert sx={{ width: '40%', my: 2, mx: 'auto' }} severity="success">
                        Made Admin Successfully!
                    </Alert>
                }
                <TextField sx={{ width: '34%', mb: 2 }} label="Email" type="email" onBlur={handleOnBlur} variant="standard" />
                <br />
                <Button sx={{ width: '25%' }} type="submit" variant="contained">Make Admin</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;