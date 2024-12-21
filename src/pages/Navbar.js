<<<<<<< HEAD
import React,{useState} from 'react'
import logo from '../img/EU logo.png';
=======
import React, { useState } from 'react'
import logo from '../img/Royal Glo Next logo for website 512 x 512.png';
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
<<<<<<< HEAD
    const navigate = useNavigate();
    const handleClick = () => {
    alert('kgjk');
    navigate('/popup');
    };
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
                    <li className='nav-li'><a className='nav-a' href="#home">Home</a></li>
                    <li className='nav-li'><a className='nav-a' href="#about">About</a></li>
                    <li className="nav-li dropdown">
                    <a
                      className="nav-a dropdown-toggle"
                      href="#mbbs-abroad"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      MBBS in Abroad
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#mbbs-georgia" role="button">
                          MBBS in Georgia
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#european-university">
                              European University
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#kutaisi-international">
                              Kutaisi International University
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                    <li className='nav-li'><a className='nav-a' href="#home">Hostel</a></li>
                    <li className='nav-li'><a className='nav-a' href="#home">Gallery</a></li>
                    <li className='nav-li'><a className='nav-a' href="#contact" onClick={handleClick}>Contact</a></li>
                </ul>
            </div>
        </nav>
        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
=======


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
                                    <li className='nav-li'><a className='nav-a' href="Hostel" >Hostel</a></li>
                                    <li className='nav-li'><a className='nav-a' href="/Gallary" >Gallary</a></li>
                                    <li className='nav-li'><a className='nav-a' href="/contact" >Contact</a></li>
                                    <li className='nav-li'><a className='nav-a' href="/enquire" >Enquire</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
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
<<<<<<< HEAD
    </div>
  )
=======
        </div>
    )
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
}
