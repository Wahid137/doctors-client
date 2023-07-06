import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from '../Services/Services';
import Treatment from '../Services/Treatment';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonial/Testimonials';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;