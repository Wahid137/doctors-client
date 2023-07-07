import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('appointmentOptions.json')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section>
            <p className='text-xl text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 text-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption

                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
        </section>

    );
};

export default AvailableAppointment;