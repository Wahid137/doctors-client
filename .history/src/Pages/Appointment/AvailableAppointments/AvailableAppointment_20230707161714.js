import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('appointmentOption.json')
            .then(res => res.json())
    })

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