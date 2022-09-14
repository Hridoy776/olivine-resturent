import React from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cartbanner from '../../components/Cartbanner';
import useSWR from 'swr';
import Image from 'next/image';
const fetcher = url => axios.get(url).then(res => res.data);
const ProductDetail = () => {
    const route = useRouter()
    const id = route.query.foodId;

    const { data: product, error } = useSWR(`https://olivine-resturent.onrender.com/order/${id}`, fetcher);
    console.log(product)
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!product) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <section classNameName=''>
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
                            <div className='my-5'>
                                <input type="button" className='border-2 p-2' value="-" />
                                <input className='w-[150px] p-2 rounded-none border-y-2 bg-black' type="number" step="1" min="1" max={product.quantity} placeholder="1" inputMode='numeric' />
                                <input type="button" className='border-2 p-2' value="+" />
                                <input type="button" className='text-secondary bg-white py-[10px] duration-500 hover:text-white hover:bg-primary mx-0 lg:mx-2 my-5 lg:my-0 px-16 capitalize' value="add to cart" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductDetail;