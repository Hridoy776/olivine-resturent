import React from 'react';
import Dines from '../components/Dines';
import Experience from '../components/Experience';
import Food from '../components/Food';
import Footer from '../components/Footer';
import History from '../components/History';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
           <section>
            <Slider/>
           </section>
           <main className='bg-black'>
            <section>
                <History/>
            </section>
            <section className='bg-black'>
            <h3 className='text-primary text-center text-4xl uppercase tracking-widest mb-24'>Foods</h3>
                <Food/>
            </section>
            <section>
                
                <Experience/>
            </section>
            <section>
                <Dines/>
            </section>
           </main>
           <Footer/>
        </>
    );
};

export default Home;