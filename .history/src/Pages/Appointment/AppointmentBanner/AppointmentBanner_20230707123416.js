import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    let footer = <p>Please pick a date</p>
    return (
        <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
        />
    );
};

export default AppointmentBanner;