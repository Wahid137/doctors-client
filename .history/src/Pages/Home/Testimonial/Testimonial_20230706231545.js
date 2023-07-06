import React from 'react';

const Testimonial = ({ reviewData }) => {
    const { name, img, review, location } = reviewData;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='text-base'>{review}</p>
                <div >
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="/" />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;