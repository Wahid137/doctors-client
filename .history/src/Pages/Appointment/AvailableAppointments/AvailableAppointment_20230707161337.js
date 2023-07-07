import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    const { data: appointmentOptions = [], refetch, isloading }

    return (
        <section>
            <p className='text-xl text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate, 'PP')} </p>
            <div>
                {

                }
            </div>
        </section>

    );
};

export default AvailableAppointment;