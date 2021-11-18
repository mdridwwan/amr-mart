import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import photo from '../../../Image/Login.jpg'


const ProductBanner = () => {
    return (
        <div sx={{ pt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <img style={{ width: '100%', height: '300px' }} src={`https://www.teahub.io/photos/full/5-54544_hd-wallpapers-of-bikes.jpg`} alt="" srcset="" />
                </Grid>

            </Grid>
        </div>
    );
};

export default ProductBanner;