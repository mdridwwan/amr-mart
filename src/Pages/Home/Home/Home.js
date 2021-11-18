import React from 'react';
import Products from '../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import SendMessage from '../SendMessage/SendMessage';
import Slider from '../Slider/Slider'
import Login from '../../Login/Login/Login';
import Footer from '../../Shared/Footer/Footer';
import ReviewView from '../ReviewView/Review'
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <Products></Products>
            <ReviewView></ReviewView>
            <SendMessage></SendMessage>
            <Footer></Footer>
        </div>
    );
};

export default Home;