import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <section>
            <p>Available Appointments on: {format(selectedDate, 'pp')} </p>

        </section>

    );
};

export default AvailableAppointment;