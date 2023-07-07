import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <p>You selected: {format(selectedDate, 'PP')} </p>

        </div>
    );
};

export default AvailableAppointment;