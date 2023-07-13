import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
      <footer className='pt-16 mt-20  bg-slate-200'>
          <div style={{background: `url(${footer})`, backgroundPosition: 'center', backgroundSize: 'cover',}} >
            <div className='footer grid justify-around pt-12 font-semibold'>
            <div className='text-black'>
                <span className="footer-title text-lg text-black">Services</span>
                <Link to="/" className="link link-hover">Emergency Checkup</Link>
                <Link to="/" className="link link-hover">Monthly Checkup</Link>
                <Link to="/" className="link link-hover">Weekly Checkup</Link>
                <Link to="/" className="link link-hover">Deep Checkup</Link>
            </div>
            <div className='text-black'>
                <span className="footer-title text-lg text-black">ORAL HEALTH</span>
                <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                <Link to="/" className="link link-hover">Cavity Filling</Link>
                <Link to="/" className="link link-hover">Teeth Whitening</Link>
                <Link to="/" className="link link-hover">Teeth cleaning</Link>
            </div>
            <div className='text-black'>
                <span className="footer-title text-lg text-black">OUR ADDRESS</span>
                <Link to="/" className="link link-hover">Dhanmondi-32,Dhaka</Link>
                <Link to="/" className="link link-hover">dentalhouse20@gmail.com</Link>
                
            </div>
            </div>
            <div className='text-center text-white p-16'>
                <p className='font-bold text-lime-500'>Copyright © 2023 <span className='text-orange-600'>-All right reserved by Dental House</span></p>
            </div>
        </div>
      </footer>
    );
};

export default Footer;