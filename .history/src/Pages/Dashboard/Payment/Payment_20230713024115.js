import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div>
            <h3 className='text-3xl'>Payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>

            </div>
        </div>
    );
};

export default Payment;