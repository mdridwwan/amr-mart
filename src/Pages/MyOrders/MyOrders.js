import { Container } from '@mui/material';
import React from 'react';
import ProductD from '../Dashbord/ProductD/ProductD';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const MyOrders = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <ProductD></ProductD>
            </Container>
            
        </div>
    );
};

export default MyOrders;