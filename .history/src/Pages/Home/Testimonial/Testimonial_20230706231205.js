import React from 'react';

const Testimonial = ({ name, img, review, location }) => {
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='text-base'>{review}</p>
            </div>
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        </div>
    );
};

export default Testimonial;