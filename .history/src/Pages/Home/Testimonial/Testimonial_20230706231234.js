import React from 'react';

const Testimonial = ({ name, img, review, location }) => {
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='text-base'>{review}</p>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;