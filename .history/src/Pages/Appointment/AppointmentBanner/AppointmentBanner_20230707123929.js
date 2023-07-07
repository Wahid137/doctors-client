import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    let footer = <p>Please pick a date</p>
    if (selectedDate) {
        footer = <p>You picked {format(selectedDate, 'pp')}.</p>
    }
    return (
        <header className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="dentist chair" />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;