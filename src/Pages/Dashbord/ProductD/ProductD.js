import { Alert, Button, CircularProgress, TableCell, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ProductD = () => {
    const { user, token } = useAuth();
    const [products, setProducts] = useState([]);
    const [deleteProductSuccess, setDeleteProductSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const url = `https://enigmatic-citadel-16277.herokuapp.com/products?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            })
    }, [])
    const handleWithOrderCencel = (Id) =>{
        const url = `https://enigmatic-citadel-16277.herokuapp.com/products/${Id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount === 1) {
                setDeleteProductSuccess(true)
            }
        })
    }
    console.log(products)
    return (
        <div>
            <h2>Product Orders: {products.length}</h2>
            {deleteProductSuccess && <Alert severity="success">Successfully Delete Order!</Alert>}
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell>Poduct Name</TableCell>
                            <TableCell >Phone</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.clientName}
                                </TableCell>
                                <TableCell style={{ color: '#b36d00', fontWeight: '700'}} align="right">${product.price}</TableCell>
                                <TableCell>{product.productName}</TableCell>
                                <TableCell>{product.phone}</TableCell>
                                <TableCell >{product.address}</TableCell>
                                <TableCell >{product.email}</TableCell>             
                                <TableCell><Button onClick={() =>handleWithOrderCencel(product._id)}>Order Cencel</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                isLoading && <CircularProgress color="secondary" />
            }
        </div>
    );
};

export default ProductD;