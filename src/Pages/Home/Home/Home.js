import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;