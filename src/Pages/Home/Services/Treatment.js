import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <section className='mt-20'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row justify-between">
                    <img style={{ height: 400, width: 350 }} src={treatment} className="lg:w-1/2 rounded-lg shadow-2xl ml-28" alt="" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Treatment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;