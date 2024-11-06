import React, { useState } from 'react';
// import './Navbar1.css';
import '../css/Navbar1.css'; // Correct this path as needed
import Royal from '../img/Royal Glo Next logo for website 192 x 192.png';
import MenuIcon from '../img/hamburger.png';
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleclick = () => {
        navigate('/Contact');

    }
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img src={Royal} alt="Next Glo Academy" className='logo-img' />
                </a>

            </div>
            <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#mbbs in abrod" className="navbar-link">MBBS in Abrod</a>
                <a href="#Gallary" className="navbar-link">Gallary</a>
                <a href="#hostel" className="navbar-link">Hostel</a>
                <a href="#blog" onClick={handleclick} className="navbar-link">Blog</a>
                <a href="#contact us" onClick={handleclick} className="navbar-link">Contact US</a>

            </nav>
            <button className="navbar-toggle" onClick={toggleMobileMenu}>
                <img src={MenuIcon} alt="Toggle Menu" className='toggle-icon' />
            </button>
        </header>
    );
};

export default Navbar1;
