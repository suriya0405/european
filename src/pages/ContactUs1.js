import React from 'react';
import '../css/ContactUs1.css';
import twitter from '../img/X logo PNG for web (1).png'
import fb from '../img/Facebook logo PNG for web.png'
import insta from '../img/Instagram logo PNG for web.png'
import youtube from '../img/Youtube logo PNG for web.png'

import Flyout from './Flyout';

function ContactUs() {
    return (
        <div className="contact-us-container">
            {/* Left Section: Contact Form */}
           
            <div className="contact-form-section">
                <h2 className="form-title">Get in Touch</h2>
                <form className="contact-form">
                    <label>First Name </label>
                    <input type="text" required />

                    <label>Email</label>
                    <input type="email" required />

                    <label>Contact Number</label>
                    <input type="number" required />

                    <label>WhatsApp Number</label>
                    <input type="number" required />


                    <label>What do you have in mind?</label>
                    <textarea placeholder="Please enter your thoughts..."></textarea>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>

            {/* Right Section: Contact Info and Map */}
            <div className="contact-info-section">
                <div className='address' >
                    <h3>Reach us at</h3>
                    <p>32/67, East Jones Road, Saidapet.
                        Chennai-600015, Tamil Nadu.</p>

                    <p> info@royalnextacademy.com</p>

                    <p> +91 9962705000
                        +91 9940830780</p>

                    <p>International office:
                        No 810, B Block, Hili tower, Al nadha, Sharjah, UAE.</p>
                </div>
                <div className="social-icons">
                    <a href="#" className="social-icon"><img alt='' src={twitter} /></a> {/* Twitter Icon */}
                    <a href="#" className="social-icon"><img alt='' src={fb} /></a> {/* Facebook Icon */}
                    <a href="#" className="social-icon"><img alt='' src={youtube} /></a> {/* Google Icon */}
                    <a href="#" className="social-icon"><img alt='' src={insta} /></a> {/* Instagram Icon */}
                </div>

                <div className="map-container">
                    {/* Embed a map iframe */}
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.7907812812235!2d80.227753!3d13.025282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267822bd9ec71%3A0xfc28cc4851cc0ca1!2sRoyal%20Glo%20Next%20Academy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1730192189891!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Location Map"
                    ></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.7907812812235!2d80.227753!3d13.025282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267822bd9ec71%3A0xfc28cc4851cc0ca1!2sRoyal%20Glo%20Next%20Academy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1730192189891!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    >
                    </iframe>
                </div>
            </div>
        </div >
    );
}

export default ContactUs;
