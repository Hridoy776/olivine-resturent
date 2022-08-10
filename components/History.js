import React from 'react';
import Image from 'next/image';
import img1 from '../public/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg'
import img2 from '../public/images/ivan-stern-LOLSb7m6XkU-unsplash.jpg'
const History = () => {
    return (
        <div className='flex bg-secondary justify-around  p-24 min-h-[100vh] '>
            <div className='w-[620px] p-6'>
                <div className='flex   items-center'>
                    <p className='text-primary uppercase mr-4 font-bold text-xl'>founded in 2022</p>
                    <div className='h-[2px] w-40 bg-primary'></div>
                </div>
                <h1 className='text-[4rem] font-Cormorant text-white'>
                    A sophisticated interpretation of traditional Japanese cuisine</h1>
                <div>
                    <div className='mt-12'>
                        <Image src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-[765px] w-[510px]'>
                <Image src={img1} alt="" />
            </div>

        </div>
    );
};

export default History;