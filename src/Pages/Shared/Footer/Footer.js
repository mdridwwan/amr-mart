import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5">
            <div style={{ backgroundColor: '#081952', color: 'white', padding: '30px'}} class="app">
                    <div className="container">
                    <div class="row">
                        <div class="col-4 sm-12">
                            <div style={{ textAlign: 'left' }}>
                                <h2>Contact info</h2>
                                <p>Email: mdridwan583011@gmail.com</p>
                                <p>Phone: 01648035776</p>
                                <small>Tel: 00321442</small>
                            </div>
                        </div>
                        <div class="col-4 sm-12">
                            <div>
                                <h2>Address</h2>
                                <p>Amr Mart Shop</p>
                                <p>Narayanganj</p>
                                <p>Dhaka.Bangladesh</p>
                            </div>
                        </div>
                        <div class="col-4 sm-12">
                            <h2>Service Time</h2>
                            <p>Everyday</p>
                            <p>Online Service 24 hours</p>
                        </div>
                    </div>
                    </div>
                    <div>
                        <h2>Social Media Link</h2>
                        <div class="mb-5">
                        <span class="socialIcon"><FacebookIcon/></span>
                        <span class="socialIcon"><YouTubeIcon/></span>
                        <span class="socialIcon"><InstagramIcon/></span>
                        <span class="socialIcon"><LinkedInIcon/></span>
                        </div>
                    </div>
                <div class="fs-5 text-uppercase pt-3 border-top">
                    <p>@CopyRights  AMR_MART LTD.</p>
                    </div>
                </div>
        </div>
    );
};

export default Footer;