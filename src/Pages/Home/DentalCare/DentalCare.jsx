import React from 'react'
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero">
            <div className="hero-content pt-20 gap-20 flex-col-reverse lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="font-semibold py-6">We take great pride in providing superior dental network to you and your family. We tailor-fit our discussions to meet your needs.We will make sure to provide the best possible healthcare to all our patients. We don't want to see you gain confidence in your smile!</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <img src={treatment} className=" rounded-lg lg:w-1/2 shadow-4xl" alt='' />

            </div>
        </div>
    );
};

export default DentalCare;