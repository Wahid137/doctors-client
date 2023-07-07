import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('appointmentOption.json')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <p className='text-xl text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate, 'PP')} </p>
            <div>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option.name}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
        </section>

    );
};

export default AvailableAppointment;