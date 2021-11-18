import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductBuy from '../../Poduct/ProductBuy/ProductBuy';


const Product = () => {
    const [buySuccess, setBuySuccess] = useState(false);
    const [insertId, setInsertId] = useState({})
    const [products, setPtoducts] = useState([])




    useEffect(() => {
        const url = 'https://enigmatic-citadel-16277.herokuapp.com/prodcutAll'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPtoducts(data)

            })
    }, [])
    return (
        <Container>
            <Typography class="shadow p-3 mb-5 fs-2 mt-5 bg-body rounded fw-bolder text-success" >
                Available Product on
            </Typography>
            {buySuccess && <Alert severity="success">Buy successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    products.slice(0,6).map(product => <ProductBuy
                        key={product._id}
                        product={product}
                        setInsertId={setInsertId}
                        setBuySuccess={setBuySuccess}
                    ></ProductBuy>)
                }
            </Grid>
        </Container>
    );
};

export default Product;