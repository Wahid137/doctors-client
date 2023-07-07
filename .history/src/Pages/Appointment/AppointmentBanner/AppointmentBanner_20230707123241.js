import React, { useState } from 'react';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
        />
    );
};

export default AppointmentBanner;