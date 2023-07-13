import React from 'react';
import TeethCare from '../../assets/images/TeethCare.jpg'

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content pt-20 gap-20 flex-col-reverse lg:flex-row-reverse">
                <div>
                    <h1 className="text-4xl font-bold">About Dental House</h1>
                    <p className="font-semibold py-6">We are glad that you have entrusted your dental health concerns to our skilled hands. We will make sure to provide the best possible healthcare to all our patients! Of course, we always complement our core services with a customer service oriented approach.We take great pride in providing superior dental network to you and your family. We tailor-fit our discussions to meet your needs.We will make sure to provide the best possible healthcare to all our patients. We don't want to see you gain confidence in your smile!</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <img src={TeethCare} style={{width:'750px',  height:'550px', paddingLeft:'30px'}} className=" rounded-xl  lg:w-1/2 shadow-5xl" alt='' />

            </div>

         </div>
        

        
    );
};

export default About;