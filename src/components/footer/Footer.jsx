import React from 'react';
import './footer.css';
import {TfiFacebook} from 'react-icons/tfi';
import {SiInstagram} from 'react-icons/si';
import {CiLinkedin} from 'react-icons/ci';

function Footer() {
  return (
    <footer>
      <h1>Shraddha</h1>
      <div className='footer-menu'>
        <span><a href="#">Home</a></span>
        <span><a href="#about">About</a></span>
        <span><a href="#experience">Experience</a></span>
        <span><a href="#contact">Contact</a></span>
      </div>
      <div className='footer-contact'>
        <div><a href="https://facebook.com"><TfiFacebook className="footer-contact-icon" /></a></div>
        <div><a href="https://instagram.com"><SiInstagram className="footer-contact-icon"/></a></div>
        <div><a href="https://linkedin.com"><CiLinkedin className="footer-contact-icon" /></a></div>
      </div>
      <p>Thank You!</p>
    </footer>
  )
}

export default Footer
