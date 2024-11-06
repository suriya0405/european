import React, { useState } from 'react'
import logo from '../img/Royal Glo Next logo for website 512 x 512.png';
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <div id='navbar'>
            <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a href="/" className="navbar-brand">
                            <img src={logo} alt="Logo" />
                        </a>
                        <nav className="navbar1">
                            <div className="navbar-container">

                                <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                                    <li className='nav-li'><a className='nav-a' href="/home">Home</a></li>
                                    <li className='nav-li'><a className='nav-a' href="about">About</a></li>
                                    <li className='nav-li'><a className='nav-a' href="/contact" >Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                            <a
                                href="/"
                                className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                                data-wow-delay=".9s"
                            >
                                <i className="fa fa-phone-alt fa-2x" style={{ top: '9px' }}></i>
                                <div
                                    className="position-absolute"
                                    style={{ top: '9px', right: '12px' }}
                                >
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
    )
}
