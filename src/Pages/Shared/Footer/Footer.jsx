import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
      <footer className='pt-24'>
          <div style={{background: `url(${footer})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor:'black'}}>
            <div className='footer '>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Emergency Checkup</Link>
                <Link to="/" className="link link-hover">Monthly Checkup</Link>
                <Link to="/" className="link link-hover">Weekly Checkup</Link>
                <Link to="/" className="link link-hover">Deep Checkup</Link>
            </div>
            <div>
                <span className="footer-title">ORAL HEALTH</span>
                <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                <Link to="/" className="link link-hover">Cavity Filling</Link>
                <Link to="/" className="link link-hover">Teeth Whitening</Link>
            </div>
            <div>
                <span className="footer-title">OUR ADDRESS</span>
                <Link to="/" className="link link-hover">Dhanmondi-32,Dhaka</Link>
                
            </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2023 -All right reserved by Dental House</p>
            </div>
        </div>
      </footer>
    );
};

export default Footer;