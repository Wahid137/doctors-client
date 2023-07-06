import React from 'react';

const Testimonial = ({ reviewData }) => {
    const { name, img, review, location } = reviewData;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='text-base'>{review}</p>
                <div className='flex gap-3' >
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="/" />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p className='text-lg'>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;