import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking ={
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        console.log(booking);
        setTreatment(null);
    }
    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-8'>
                        <input type="text" disabled value={date} className="input input-bordered input-info " />
                        <select name="slot" className="select select-info w-full">
                            {
                                slots.map((slot, i) =><option 
                                value={slot}
                                key={i}
                                >{slot}</option> )
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered input-info " />
                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered input-info " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-info " />

                        <input className=" btn btn-accent " type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </section>
    );
};

export default BookingModal;