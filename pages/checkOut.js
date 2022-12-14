import React from 'react';
import BealingDetails from '../components/BealingDetails';
import Cartbanner from '../components/Cartbanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrderProceedTable from '../components/OrderProceedTable';

const checkOut = () => {
    return (
        <div className='bg-black text-white'>
          <Navbar/>
          <section className=' '>
            <Cartbanner/>
            <div className='w-[1200px] mx-auto grid grid-cols-2 gap-4 justify-center '>
            <BealingDetails/>
            <OrderProceedTable className="mx-auto"/>
            </div>
          </section>
            <Footer/>
        </div>
    );
};

export default checkOut;