import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { typography } from '@mui/system';
import { Grid, Rating } from '@mui/material';
import { Container } from 'react-bootstrap';

const ReviewView = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        const url = 'https://enigmatic-citadel-16277.herokuapp.com/reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReview(data)

            })
    }, [])
    console.log(reviews)
    return (
        <div>
            <h2 style={{ color: '#c97101', fontWeight: '700', fontFamily: 'cursive', fontSize: '45px', padding: '35px' }}>Customer Review</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        reviews.slice(0,6).map((review) => (
                            <Grid key={review._id} item xs={12} sm={6} md={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <img style={{ borderRadius: '50%' }} width="100px" src={review.img} alt="" srcset="" />
                                        <Typography variant="h5" component="div">
                                            {review.clientName}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {review.commetn}
                                        </Typography>
                                        <Typography variant="body2">
                                            <Rating name="read-only" value={review.ratting} readOnly />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ReviewView;