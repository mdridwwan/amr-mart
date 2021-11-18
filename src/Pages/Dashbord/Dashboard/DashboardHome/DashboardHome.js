import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import ProductD from '../../ProductD/ProductD';

const DashboardHome = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
           
                
                <Grid item xs={12} md={12}>
                <ProductD></ProductD>
                </Grid>
                
        </Box>
    );
};

export default DashboardHome;