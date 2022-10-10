import React from 'react';

const OrderProceedTable = () => {
    return (
        <table className='shop_table'>
            <thead >
                <tr className="border-b-orange-500">
                    <th>product</th>
                    <th>SubTotal</th>
                </tr>
            </thead>
            <tbody className=''>
                <tr>
                    <td>name</td>
                    <td>price</td>
                </tr>
            </tbody>
        </table>
    );
};

export default OrderProceedTable;