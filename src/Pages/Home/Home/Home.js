import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import SupplierList from '../SupplierList/SupplierList';
import Subscriber from '../Subscriber/Subscriber';
import ProductGalary from '../ProductGalary/ProductGalary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ProductGalary></ProductGalary>
            <SupplierList></SupplierList>
            <Subscriber></Subscriber>
        </div>
    );
};

export default Home;