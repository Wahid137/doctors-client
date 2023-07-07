import React from 'react';

const BookingModal = ({ treatment, setTreatment, refetch, selectedDate }) => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input disabled type="text" value={date} className="input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>
                                )
                            }

                        </select>
                        <input disabled name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input disabled name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;