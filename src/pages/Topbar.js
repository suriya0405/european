<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { Whatsapp } from './Whatsapp';
import logo from '../img/Royal Glo Next logo for website 512 x 512.png';
import Dropdownap from './Dropdownap';

export const Topbar = () => {


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subDropdownOpen, setSubDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };
    const toggleSubDropdown = (e) => {
        e.stopPropagation();
        setSubDropdownOpen(!subDropdownOpen);
    };
    const toggleMenu = () => setIsOpen(!isOpen);
    
    const textRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const textPosition = textRef.current.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                if (textPosition < screenPosition) {
                    textRef.current.classList.add('animate');
                } else {
                    textRef.current.classList.remove('animate');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
 
 

  return (
    <div>
        
        <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
                <div className="container">
                    <div className="row gx-0 align-items-center  container-inside" >
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <div className="border-end border-primary pe-3">
                                    <a href="https://maps.app.goo.gl/kpdtdW8P19SFCZRP6" className="text-muted small">
                                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                        Find A Location
                                    </a>
                                </div>
                                <div className="ps-3">
                                    <a href="info@royalnextacademy.com" className="text-muted small">
                                        <i className="fas fa-envelope text-primary me-2"></i>
                                        info@royalnextacademy.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 text-center text-lg-end">
                        <button class="button-color">Get Free Counseling</button>
                            <div className="d-flex justify-content-center make-center">
                            
                                <div className="d-flex border-end border-primary pe-3">
                                <div className='btn p-0 me-3 need-assi'><p>Need Assistance..</p><p>Don't Hesitate Make a call</p></div>
                              
                                    <a className="btn p-0 text-primary me-3" rel="noreferrer" href="https://www.facebook.com/royalnextacademy13" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn p-0 text-primary me-3" rel="noreferrer" href="https://twitter.com/Royalnextoff" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn p-0 text-primary me-3" rel="noreferrer" href="https://www.instagram.com/royalnextacademy/" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="btn p-0 text-primary me-0" rel="noreferrer" href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>

                            </div>
=======
// src/components/Topbar.js
import React from 'react';
//import Whatsapp from './Whatsapp';

export const Topbar = () => (
    <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <div className="border-end border-primary pe-3">
                            <a href="https://maps.app.goo.gl/kpdtdW8P19SFCZRP6" className="text-muted small">
                                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                Find A Location
                            </a>
                        </div>
                        <div className="ps-3">
                            <a href="info@royalnextacademy.com" className="text-muted small">
                                <i className="fas fa-envelope text-primary me-2"></i>
                                info@royalnextacademy.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-flex justify-content-end">
                        <div className="d-flex border-end border-primary pe-3">
                            <div className='btn p-0 me-3'><a> Need Assistance, Don't Hesitate, Make a Msg</a></div>
                            {/* <div className='btn p-0 me-3'> <Whatsapp /> </div> */}
                            <a className="btn p-0 text-primary me-3" rel="noreferrer" href="https://www.facebook.com/royalnextacademy13" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn p-0 text-primary me-3" rel="noreferrer" href="https://twitter.com/Royalnextoff" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn p-0 text-primary me-3" rel="noreferrer" href="https://www.instagram.com/royalnextacademy/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn p-0 text-primary me-0" rel="noreferrer" href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank">
                                <i className="fab fa-youtube"></i>
                            </a>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD


            <div id='navbar'>
    <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="Logo" loading='lazy'/>
                </a>
           <nav className="navbar1">
            <div className="navbar-container">
            
                <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className='nav-li'><a className='nav-a' href="/">Home</a></li>
                    <li className='nav-li'><a className='nav-a' href="/mbbs-in-abroad">MBBS in Abroad</a></li>
                    <li className='nav-li'><a className='nav-a' href="#home">Hostel</a></li>
                    <li className='nav-li'><a className='nav-a' href="#home">Gallery</a></li>
                    <li className='nav-li'><a className='nav-a' href="/Aboutus">About</a></li>
                    <li className='nav-li'><a className='nav-a' href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                            <a
                                href="/"
                                className="btn  btn-lg-square rounded-circle position-relative"
                              
                            >
                               
                                <div
                                    className="position-absolute"
                                    style={{ top: '9px', right: '12px' }}
                                >
                                     <Whatsapp />
                                </div>
                            </a>
                            <div className="d-flex flex-column ms-3">
                           
                                <span className="text-dark">Call to Our Experts</span>
                                <a href="tel:+01234567890">
                                    <span className="text-dark">Free: +91 9962705000</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    </div>

    </div>
  )
}
=======
        </div>
    </div>
);
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
