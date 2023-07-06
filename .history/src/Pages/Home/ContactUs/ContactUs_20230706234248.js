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

            <form>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default ContactUs;