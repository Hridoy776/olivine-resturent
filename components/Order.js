import React from 'react';
import axios from 'axios'
import useSWR, { mutate, } from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';
const fetcher = url => axios.get(url).then(res => res.data);
const Order = () => {

    const route = useRouter()

    const handleDetails = (id) => {
        route.push(`/food/${id}`)
    }

    const { data: orders, error } = useSWR('https://olivine-resturent.onrender.com/order', fetcher);
    console.log(orders)
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!orders) return <div>Loading...</div>;

    const handleDelete = async (id) => {
        await axios.delete(`https://olivine-resturent.onrender.com/order/${id}`)
            .then(res => console.log(res))
        mutate('https://olivine-resturent.onrender.com/order')
    }

    return (
        <table

            className='text-white  mx-auto'>
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
            <tbody
                isValidating
                className='text-center'>
                {
                    orders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td><button
                                    onClick={() => handleDelete(order._id)}
                                    className=''>x</button></td>
                                <td className='p-4'>
                                <Image
                                
                                onClick={() => handleDetails(order._id)}
                                width="100px" height="100px" src={order.img} alt={order.name} />
                                </td>

                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
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