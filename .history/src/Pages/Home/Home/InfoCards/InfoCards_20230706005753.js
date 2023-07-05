import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import clock from '../../../../assets/icons/location.svg';
import clock from '../../../../assets/icons/phone.svg';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Opening 9.00 am to 5.00 pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Opening 9.00 am to 5.00 pm',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Opening 9.00 am to 5.00 pm',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div>

        </div>
    );
};

export default InfoCards;