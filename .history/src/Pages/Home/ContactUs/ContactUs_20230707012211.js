import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appointment})`,
        }}
            className='mt-16'>
            <div className='text-center py-10'>
                <h3 className='text-xl font-bold text-secondary uppercase'>Contact Us</h3>
                <h2 className='text-3xl text-base-100'>Stay connected with us</h2>
            </div>

            <form className='flex justify-center'>
                <div>
                    <div className="form-control mb-3">
                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-96" required />
                    </div>
                    <div className="form-control mb-3">
                        <input name="subject" type="text" placeholder="Subject" className="input input-bordered w-96" />
                    </div>
                    <div className="form-control mb-3">
                        <textarea className="textarea textarea-accent" placeholder="Your message"></textarea>
                    </div>
                    <div className='text-center mb-3'>
                        <PrimaryButton buttonStyle={{ 'width: 155px'}}>Submit</PrimaryButton>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default ContactUs;