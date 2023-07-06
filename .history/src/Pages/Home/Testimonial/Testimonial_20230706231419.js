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
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;