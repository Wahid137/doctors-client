import React, { useState } from 'react';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <h2>This is appointmentBanner</h2>
        </div>
    );
};

export default AppointmentBanner;