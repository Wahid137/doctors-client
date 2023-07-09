import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { AuthContext } from '../../../Context/AuthProvider';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)


    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointments?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section>
            <p className='text-xl text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 ms-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option.name}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    treatment={treatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>

    );
};

export default AvailableAppointment;