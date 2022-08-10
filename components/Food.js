import Image from 'next/image';
import React, { useState } from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
const Food = () => {

    const [onHover, setOnHover] = useState(-1)


    const hideButton = (index) => {
        return `mb-4 ${onHover === index ? " " : 'hidden'}   `
    }



    const { data, error } = useSWR('/api/staticdata', fetcher);


    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    const foods = JSON.parse(data)
    return (
        <div className=' w-fit  my-5 mx-auto grid grid-cols-4 gap-6'>
            {
                foods.map((food, index) => <div
                    key={index}
                    
                >
                    {/* <Image width="300px" height="300px" src={food.img} alt={food.name} /> */}
                    <div
                        onMouseEnter={() => setOnHover(index)}
                        onMouseLeave={() => setOnHover(-1)}
                        className='flex justify-center items-end' style={{ backgroundImage: `url(${food.img})`, width: "300px", height: '300px' }}>
                        {
                            <p className={hideButton(index)}>
                                <button className='btn btn-primary   btn-outline rounded-none'>add to cart</button>
                            </p>
                        }
                    </div>
                    <p className='text-2xl text-white text-center'>{food.name}</p>
                    <p className='text-center text-2xl text-primary font-bold'>${food.price}</p>

                </div>)
            }
        </div>
    );
};

export default Food;