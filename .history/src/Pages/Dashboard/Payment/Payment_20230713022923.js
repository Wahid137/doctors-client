import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    return (
        <div>
            <h2>This is payment</h2>
        </div>
    );
};

export default Payment;