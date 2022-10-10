import React, { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cartbanner from '../../components/Cartbanner';
import useSWR from 'swr';
import Image from 'next/image';
const fetcher = url => axios.get(url).then(res => res.data);
const ProductDetail = () => {
    const [counter, setCounter] = useState(0)
    const route = useRouter()
    const id = route.query.foodId;

    const { data: product, error } = useSWR(`https://olivine-resturent.onrender.com/order/${id}`, fetcher);

    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!product) return <div>Loading...</div>;

    const handleCount = (e) => {
        setCounter(e.target.value)
    }
    const increament = () => {
        setCounter(parseInt(counter) + 1)
    }
    const decreament = () => {
        setCounter(counter - 1)
    }
    const handleOrder = (e) => {
        e.preventDefault()
        console.log(e.target.quantity.value)
    }

    return (
        <>
            <Navbar />
            <section className=''>
                <Cartbanner />
            </section>
            <section className='bg-black pt-12'>
                <div className="lg:w-[90%] mx-auto">
                    <div className="lg:flex  mx-auto  items-start">
                        <div className='lg:w-[40%] m-6'>
                            <Image src={product.img} height="300px" width="500px" alt={product.name} />
                        </div>
                        <div className='m-6 lg:w-[50%] text-white '>
                            <p className='text-4xl capitalize mb-[13px]'>{product.name}</p>
                            <p className='text-2xl text-primary font-bold'>${product.price}.55</p>
                            <p className='mt-6 text-lg'>{product.details}</p>
                            <form onSubmit={handleOrder} className='my-5'>

                                <input onClick={decreament} type="button" className='border-2 p-2' value="-" />
                                <input className='w-[150px] appearance-none text-center text-white p-2 rounded-none font-bold outline-none border-y-2 bg-black' type="number" step="1" min="1" max={product.quantity} placeholder="1" inputMode='numeric' value={counter} onChange={(e)=>handleCount(e)} name='quantity' />

                                <input onClick={increament} type="button" className='border-2 p-2' value="+" />
                                <button className='text-secondary bg-white py-[10px] duration-500 hover:text-white hover:bg-primary mx-0 lg:mx-2 my-5 lg:my-0 px-16 capitalize' type="submit">add to cart</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductDetail;