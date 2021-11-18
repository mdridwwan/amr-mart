import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductBanner from '../ProductBanner/ProductBanner';
import AvailableProduct from '../AvailableProduct/AvailableProduct'
import Footer from '../../Shared/Footer/Footer';




const Product = () => {
    return (
      <div>
            <Navigation></Navigation>
            <ProductBanner></ProductBanner>
            <AvailableProduct></AvailableProduct>
            <Footer></Footer>
      </div>
       
        
    );
};

export default Product;