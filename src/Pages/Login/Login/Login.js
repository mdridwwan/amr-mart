//import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Alert, AlertTitle, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../Image/Login.jpg';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const hanldeWithGoogle = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant="body1">Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange}
                        />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                        />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Login</Button>

                        <NavLink
                            to="/registration"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>}
                    <Button onClick={hanldeWithGoogle} sx={{ width: "75%", m: 1 }} variant="outlined" >Sign In With Google</Button>
                    {
                        isLoading && <CircularProgress color="secondary" />
                    }
                    {
                        user?.email && <Alert severity="success">
                            <AlertTitle> WoW Success</AlertTitle>
                            User Login <strong>Successfully!</strong>
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

export default Login;