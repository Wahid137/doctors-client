import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <h2>This is appointment option: {name} </h2>
        </div>
    );
};

export default AppointmentOption;