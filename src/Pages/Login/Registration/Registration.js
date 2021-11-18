import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../Image/Login.jpg';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, register, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        register(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant="body1">Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="name"
                            type="name"
                            onBlur={handleOnBlur}
                        />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-password-input"
                            label="Retype Password"
                            type="password"
                            variant="standard"
                            name="password2"
                            onBlur={handleOnBlur}
                        />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Register</Button>

                        <NavLink
                            to="/login"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button variant="text">ALready Resistered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress color="secondary" />
                    }
                    {
                        user?.email && <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            User Created <strong>Successfully!</strong>
                        </Alert>

                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registration;