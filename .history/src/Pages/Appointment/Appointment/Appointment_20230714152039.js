import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointments/AvailableAppointment';
import useTitle from '../../../hooks/useTitle';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    useTitle("Appointment")
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>

        </div>

    );
};

export default Appointment;