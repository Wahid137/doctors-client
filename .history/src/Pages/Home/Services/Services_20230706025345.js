import React from 'react';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'whitening Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center mb-10'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;