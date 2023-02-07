import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='grid justify-center'
            style={
                {
                    background: `url(${appointment})`,
                    borderRadius: "10px",
                


                }
            }

        >
            <div className='text-center pt-10 pb-32'>
                <h1 className='text-primary text-3xl font-bold'>Contact Us</h1>
                <h3 className='text-3xl text-white'>Stay connected with us</h3>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-4'>
                <input type="text" placeholder="Email Address" className="input input-bordered mt-6 input-info w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs" />
                <textarea className="textarea w-full max-w-xs p-6 textarea-info" placeholder="Your message"></textarea>
                <div className='text-center pb-10'>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary w-32 text-white">Submit</button>
                </div>

            </div>
        </div>
    );
};

export default Contact;