import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    return (
        <div>
            <h2>This is appointment option: {appointmentOption.length} </h2>
        </div>
    );
};

export default AppointmentOption;