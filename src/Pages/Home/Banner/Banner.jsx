import React from 'react';
// import chair from '../../../assets/images/chair.png'
// import pic from '../../../assets/images/pic.png'
import Typewriter from 'typewriter-effect';
import picture from '../../../assets/images/picture.png'
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
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
            <div className="hero-content pt-20 gap-20 flex-col lg:flex-row-reverse">
                <img  style={{width:'650px',  height:'380px', paddingLeft:'30px'}}  src={picture} className=" rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{ fontFamily: " 'Pompiere', cursive",fontSize:'40px', fontStyle:'italic', fontWeight:'bold',color:'#22c55e' }}
        >
          <Typewriter
            options={{
              strings: [
                "Welcomes to our Dental House !!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
                    <p className="font-semibold pb-6">We are glad that you have entrusted your dental health concerns to our skilled hands. We will make sure to provide the best possible healthcare to all our patients! Of course, we always complement our core services with a customer service oriented approach.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary border-none rounded-md text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;