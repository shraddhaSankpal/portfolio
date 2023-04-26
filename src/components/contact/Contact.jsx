import React, {useRef} from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wbdxqis', 'template_bd5r3ca', form.current, 'p8i3vIeaF0PXWGtTn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_ways">
          <article className="contact_details">
            <AiOutlineMail className='contact_icon' />
            <h5>Email</h5>
            <p className='text-light'>sankpalshraddha3@gmail.com</p>
            <a href='mailto:sankpalshraddha3@gmail.com' className='contact_text' target="_blank">Send a message</a>
          </article>
          <article className="contact_details">
            <RiMessengerLine className='contact_icon' />
            <h5>Messanger</h5>
            <p className='text-light'>sankpalshraddha3</p>
            <a href='#' className='contact_text'>Send a message</a>
          </article>
          <article className="contact_details">
            <BsWhatsapp className='contact_icon' />
            <h5>WhatsApp</h5>
            <p className='text-light'>+447553855829</p>
            <a href='https://wa.me/+919503352895' className='contact_text' target="_blank">Send a message</a>
          </article>
        </div>
        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="">
            <input type="text" name="name" placeholder="Your Full Name"/>
            </div>
            <div className="">
            <input type="text" name="email" placeholder="Your Email" />
            </div>
            <div className="">
            <textarea name="message" placeholder="Your Message" rows="4"/>
            </div>
            <div className="">
              <button type="submit" className='btn btn-primary'>Send Message</button>
              </div>
          </form>
        </div>
      </div>
    </section >
  )
}

export default Contact
