import React from 'react';

const AvailableAppointment = () => {
    return (
        <div>
            <p>You selected: {format(selectedDate, 'PP')} </p>

        </div>
    );
};

export default AvailableAppointment;