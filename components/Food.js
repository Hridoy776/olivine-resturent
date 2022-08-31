import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import useSWR from 'swr';
const fetcher = url => axios.get(url).then(res => res.data)

const Food = () => {

    const [onHover, setOnHover] = useState(-1)


    const hideButton = (index) => {
        return `mb-4 ${onHover === index ? " " : 'hidden'}   `
    }



    const { data: foods, error } = useSWR('http://localhost:5000/foods', fetcher);
    console.log(foods)
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!foods) return <div>Loading...</div>;

    const addToCart = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'POST',

        })
            .then(res => res.json())
            .then(data => console.log(data.status))

    }

    



    return (
        <div className=' w-fit  my-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6'>
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
                                <button
                                    onClick={() => addToCart(food._id)}
                                    className='btn btn-primary   hover:btn-outline rounded-none'>add to cart</button>
                            </p>
                        }
                    </div>
                    <p className='text-2xl mt-2 text-white capitalize text-center'>{food.name}</p>
                    <p className='text-center text-2xl text-primary font-bold'>${food.price}</p>

                </div>)
            }
        </div>
    );
};

export default Food;