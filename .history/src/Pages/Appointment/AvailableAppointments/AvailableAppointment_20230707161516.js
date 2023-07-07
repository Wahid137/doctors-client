import { format } from 'date-fns';
import React, { useState } from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const { data: appointmentOptions = [], refetch, isLoading } = us

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