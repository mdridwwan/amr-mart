import { Alert, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory, useLocation } from 'react-router';
import { ResetTv } from '@mui/icons-material';


const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [addProductSuccess, setAddPRoductSuccess] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const [ product, setProduct] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        setProduct(newInfo);
    }
    console.log(product)

    
    setTimeout(function () { setAddPRoductSuccess('') }, 3000);




    const handleProductSubmit = e => {
        setAddPRoductSuccess(false)
        setIsLoading(true)
        // send to the server
        // console.log(product)
        fetch('https://enigmatic-citadel-16277.herokuapp.com/productadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId){
                    setAddPRoductSuccess(true)
                    setIsLoading(false)
                    // setProduct(' ')
                }
            });
            e.target.reset()
         e.preventDefault();
        }

    return (
        <div>
            <h2>Add an product</h2>
            {addProductSuccess && <Alert severity="success">Successfully Add Product Database!</Alert>}
            <form onSubmit={handleProductSubmit}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-size-small"
                    name="name"
                    onBlur={handleOnBlur}
                    label="Prpduct Name"
                    size="small"
                    variant="outlined"
                />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-size-small"
                    name="Price"
                    onBlur={handleOnBlur}
                    label="Price"
                    size="small"
                    variant="outlined"
                />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-size-small"
                    name="cc"
                    onBlur={handleOnBlur}
                    label="CC"
                    size="small"
                    variant="outlined"
                />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-size-small"
                    name="image"
                    onBlur={handleOnBlur}
                    label="Image URL"
                    size="small"
                    variant="outlined"
                />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="filled-textarea"
                    label="Discription"
                    placeholder="Product Deatils"
                    name="discription"
                    onBlur={handleOnBlur}
                    multiline
                    variant="filled"
                />
              <br />
                <Button sx={{ float: 'center',  }} type="submit" variant="contained">Submit</Button>
            </form>
            {
                isLoading && <CircularProgress color="secondary" />
            }
        </div>
    );
};

export default AddProduct;