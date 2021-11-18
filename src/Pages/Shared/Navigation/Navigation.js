import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { typography } from '@mui/system';



const Navigation = () => {
    const { user, logOut } = useAuth();
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar  position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                        <Typography variant="h6" color="inherit" component="div">
                            Amr-Mart
                        </Typography>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Link to="/home"> <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Home</Button></Link>
                    <Link to="/review"> <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Review</Button></Link>
                    <Link to="/product"> <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Product</Button></Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/myorders"><Button color="inherit">My Orders</Button></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/pyment"><Button color="inherit">My Pyment</Button></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                <typography>{user.displayName}</typography>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;