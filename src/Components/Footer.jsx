import React from 'react';
import { FaFacebook,FaGoogleDrive,FaGooglePay,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
          <div className="container">
            <div className="row">
              <hr />
              <div className="col-lg-6 col-sm-12 text-center">
                <p>&copy; Copyright Nerob Ahamed</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, sunt.</p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="AllfooterIcons">
                <span className='Ficons'><FaFacebook /></span>
                <span className='Ficons'><FaGoogleDrive /></span>
                <span className='Ficons'><FaGooglePay /></span>
                <span className='Ficons'><FaTwitter /></span>
              </div>

                </div>
            </div>
          </div>
        </footer>
    </div>
  )
};

export default Footer;
