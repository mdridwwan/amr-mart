
import { Grid, Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import bike1 from '../../../Image/bike1.png';
import bike2 from '../../../Image/bike2.png';
import bike3 from '../../../Image/bike3.png';


const Slider = () => {

   
    
    return (
     <>
            <Carousel style={{position: 'relative'}}>
            <Carousel.Item>
               
                <img
                    height="500px"
                    className="d-block w-100"
                    src={`https://www.teahub.io/photos/full/235-2357264_lamborghini-huracan-front-blue-fire-abstract-car-2014.jpg`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Super Bike</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="500px"
                    className="d-block w-100"
                    src={`https://images7.alphacoders.com/103/1038512.jpg`}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Super Bike</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="500px"
                    className="d-block w-100"
                    src={`https://wallpaperaccess.com/full/5569625.jpg`}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Super Shops</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


            <div style={{ marginTop: '-58px', backgroundBlendMode: 'luminosity', position: 'relative'}} class="d-flex flex-row justify-content-center bd-highlight mb-3">
                <div style={{ background: '#770a0a', color: '#fff', width: '300px' }} class="p-4 rounded m-1 bd-highlight shadow sm-12">
                    <img width="150px" src={bike1} alt="" srcset="" />
                    <Typography variant="h4" sx={{fontWeight: '700'}}>
                        High Power Bike
                    </Typography>
                    <Typography variant="p">We buy and sale barand new car and also used car of any brand</Typography>
                </div>
                <div style={{ background: '#0d168f', color: '#fff', width: '300px' }} class="p-2 rounded m-1 bd-highlight shadow">
                    <img width="150px" src={bike2} alt="" srcset="" />
                    <Typography variant="h4" sx={{ fontWeight: '700' }}>
                        Medium Power Bike
                    </Typography>
                    <Typography variant="p">We buy and sale barand new car and also used car of any brand</Typography>
                </div>
                <div style={{ background: '#8880ff', color: 'rgb(14 14 14)', width: '300px' }} class="p-2 rounded m-1 bd-highlight shadow">
                    <img width="150px" src={bike3} alt="" srcset="" />
                    <Typography variant="h4" sx={{ fontWeight: '700' }}>
                        Lower Power Bike
                    </Typography>
                    <Typography variant="p">We buy and sale barand new car and also used car of any brand</Typography>
                </div>
            </div>
    </> 
    );
 };
export default Slider;