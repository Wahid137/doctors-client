import React from 'react';
import Chair from '../../../assets/images/chair.png';
import Background from "../../../assets/images/bg.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})` }} className="hero" >

            <div className="hero-content flex-col lg:flex-row-reverse min-h-screen">
                <img src={Chair} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;