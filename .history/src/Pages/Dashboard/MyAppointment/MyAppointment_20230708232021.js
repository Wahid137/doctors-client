import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h2>This</h2>
        </div>
    );
};

export default MyAppointment;