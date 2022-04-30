import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;