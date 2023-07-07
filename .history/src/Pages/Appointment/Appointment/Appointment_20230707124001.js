import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <AppointmentBanner></AppointmentBanner>
    );
};

export default Appointment;