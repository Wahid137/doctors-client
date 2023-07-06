import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appointment})`,
        }}
            className='mt-16'>
            <div className='text-center mb-10'>
                <h3 className='text-xl font-bold text-primary uppercase'>Contact Us</h3>
                <h2 className='text-3xl text-base-100'>Stay connected with us</h2>
            </div>

            <form className='flex justify-center'>
                <div className=''>
                    <div className="form-control w-full">
                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ContactUs;