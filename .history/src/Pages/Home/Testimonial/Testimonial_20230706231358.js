import React from 'react';

const Testimonial = ({ reviewData }) => {
    const { name, img, review, location } = reviewData;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='text-base'>{review}</p>
                <div >

                </div>
            </div>
        </div>
    );
};

export default Testimonial;