import React from 'react';
import axios from 'axios'
import useSWR from 'swr';
import Image from 'next/image';
const fetcher = url => axios.get(url).then(res => res.data);
const Order = () => {

    const { data: orders, error } = useSWR('http://localhost:5000/order', fetcher);
    console.log(orders)
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!orders) return <div>Loading...</div>;

    return (
        <table className='text-white  mx-auto'>
            <thead className='text-sm h-[80px]  uppercase text-white order_table '>
                <tr>
                    <th>cancel</th>
                    <th>Image</th>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>subtotal</th>
                </tr>
                
            </thead>
            <tbody className='text-center'>
                {
                    orders.map(order=>{
                        return(
                            <tr key={order._id}>
                                <td></td>
                                <Image width="100px" height="100px"  src={order.img} alt={order.name}/>
                                
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tbody>

            </tbody>
            
        </table>
    );
};

export default Order;