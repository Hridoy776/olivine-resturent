import React from 'react';
import Navbar from '../components/Navbar';
import withAuth from '../Hoc/withAuth';

const product = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='pt-24'>this is product page</h1>
        </div>
    );
};

export default withAuth(product);