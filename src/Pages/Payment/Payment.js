import { CircularProgress } from '@mui/material';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const Payment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>Cooming Soon.....</h2>
            <CircularProgress color="success" />
            <div >

            </div>
        </div>
    );
};

export default Payment;