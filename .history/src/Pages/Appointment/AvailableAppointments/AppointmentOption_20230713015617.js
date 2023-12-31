import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary ">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <p>{slots.length}/p>
                    <div className="card-actions justify-center">
                        {/* The button to open modal */}
                        <label
                            disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn text-white btn-primary"
                            onClick={() => setTreatment(appointmentOption)}>
                            Book Appointment
                        </label>
                    </div>
            </div>
        </div>
    );
};

export default AppointmentOption;