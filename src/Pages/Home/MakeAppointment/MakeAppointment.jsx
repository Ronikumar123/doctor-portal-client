import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`,
                borderRadius: '4px'

            }
            }
        >
            <div className="hero">
                <div className="hero-content pt-12 gap-40 flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg" alt='' />
                    <div>
                        <h4 className='text-4xl text-primary font-bold'>Appointment</h4>
                        <h1 className="text-2xl text-white font-bold">Make an appointment Today</h1>
                        <p className="pb-6 text-white">Confirm yor appointment When using email, you should immediately confirm the appointment once it is scheduled.Thank you for your response.
                                                          </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;