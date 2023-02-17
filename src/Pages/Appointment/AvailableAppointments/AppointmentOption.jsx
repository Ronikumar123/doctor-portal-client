import React from 'react';

const AppointmentOption = ({ appointmentOptions,setTreatment }) => {
    const { name, slots } = appointmentOptions;
    return (
        <div className="card mx-5 shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-2xl text-center text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label 
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn   text-white btn-primary"
                    onClick={() => setTreatment(appointmentOptions)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;