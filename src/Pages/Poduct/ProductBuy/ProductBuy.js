import { Grid, Paper, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BuyModal from '../BuyModal/BuyModal';

const ProductBuy = ({ product, setBuySuccess, setInsertId}) => {
    const { name, Price,cc,  image} = product;
    const [openProduct, setOpenProduct] = React.useState(false);
    const handleProductOpen = () => setOpenProduct(true);
    const handleProductClose = () => setOpenProduct(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 4, }} >
                    <Typography variant="h4" sx={{ color: '#5b0408', fontWeight: 500, }} gutterBottom component="div">
                        {name}
                    </Typography>
                    <img width="100%" height="200px" src={image} alt="" srcset="" />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1, }}>
                        <Typography style={{ color: 'rgb(29 11 119', fontWeight:'700'}}>
                            $ {Price} Price
                        </Typography>
                        <Typography style={{ color: '#0f4f04'}}>
                           CC: {cc}
                        </Typography>
                    </Box>
                    <Button onClick={handleProductOpen} variant="contained" sx={{ backgroundColor: '#790b0b'}}>Buy Now</Button>
                </Paper>
            </Grid>

            <BuyModal
                setBuySuccess={setBuySuccess}
                product={product}
                openProduct={openProduct}
                setInsertId={setInsertId}
                handleProductClose={handleProductClose}
            ></BuyModal>
        </>
    );
};

export default ProductBuy;