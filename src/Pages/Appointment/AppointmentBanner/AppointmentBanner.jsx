// import React, { useState } from 'react';
import picture from '../../../assets/images/picture.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';



const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    return (
        <header className='my-6'>
            <div className="hero"
            style={
                {
                    background: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                }
            }
           
            
            
            >
                <div className="hero-content pt-20  flex-col lg:flex-row-reverse">
                    <img style={{width:'600px',  height:'340px', paddingLeft:'30px'}} src= {picture} className="rounded-lg shadow-2xl" alt='' />
                    <div className='mr-8'>
                    <DayPicker
                      mode='single'
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                    
            
                    />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;