import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        ></AppointmentBanner>
    );
};

export default Appointment;