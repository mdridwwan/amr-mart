import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ReviewCount from '../ReviewCoutn/ReviewCount';
import ReviewView from "../ReviewView/ReviewView";
import Footer from "../../Shared/Footer/Footer";

const Review = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ReviewCount></ReviewCount>
            <ReviewView></ReviewView>
            <Footer></Footer>
        </div>
    );
};

export default Review;