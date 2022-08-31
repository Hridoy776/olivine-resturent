import React from 'react';
import Cartbanner from '../components/Cartbanner';
import Navbar from '../components/Navbar';
import Order from '../components/Order';

const shop = () => {
    return (
        <>
            <Navbar/>
            <section>
                <Cartbanner/>
            </section>
            <section className='bg-black py-8'>
                <Order/>
            </section>
        </>
    );
};

export default shop;