import React, { useEffect, useRef, useState } from 'react';
import carousel from './img/campus.webp';
import { CCarousel, CCarouselItem } from '@coreui/react';
import 'animate.css';
import { Recongination } from './pages/Recongination';
import { Course } from './pages/Course';
import { Footer } from './pages/Footer';
import { Faq } from './pages/Faq';
import { Aboutus } from './pages/Aboutus';
import { Background } from './pages/welcomepage';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
<<<<<<< HEAD
import './css/navbar.css'
import Testimonials from './pages/Testimonials';
import { European } from './pages/European';
import FlipBoxContainer from './pages/FlipBoxContainer'
import Flyout from './pages/Flyout';
import { Homeyoutube } from './pages/Homeyoutube';
import { Button } from './pages/Button';



export const Home = () => {

=======
import logo from './img/Royal Glo Next logo for website 512 x 512.png';
import './css/navbar.css'
import Testimonials from './pages/Testimonials';
import { Whatsapp } from './pages/Whatsapp';
import { European } from './pages/European';
import FlipBoxContainer from './pages/FlipBoxContainer';
import { Popup } from 'react-leaflet';
// import Contact from './pages/ContactUs1';

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const textRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {  // Ensure the element is not null
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


>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02

    return (

        <div className='background-color'>
<<<<<<< HEAD
            <Flyout />
           
            <div>
            <CCarousel controls indicators>
                <CCarouselItem className='carousel-bg'>
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7 animated fadeInLeft">
                                <div className="text-sm-center text-md-start">
                                <h3 className="display-1 text-white mb-4" style={{ textAlign: 'left'}}>WELCOME TO ROYALGLO NEXT ACEDAMY</h3>
                                    <h4 className="  text-uppercase fw-bold mb-4" style={{ color: '#ffcb05'}}>Best MBBS Direct Admission Academy</h4>
                                    <p className="text-white" style={{ fontSize: '16px' , textAlign: 'justify' , width: '80%'}}> we dedicated to providing high-quality education for Indian students to study MBBS/MD abroad, We offer admission services to top medical universities in Georgia...</p>
                                    <div className="d-flex pt-3 justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                        <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" rel="noreferrer" href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank">
                                            <i className="fas fa-play-circle me-2"></i> Watch Video
                                        </a>
                                        <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="/Aboutus">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 animated fadeInRight">
                                <div className="calrousel-img" style={{ objectFit: 'cover' }}>
                                    <img src={carousel} className="img-fluid w-100" alt="png logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>

                <CCarouselItem className='carousel-bg' >
                    <div className="container">
                        <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
                            <div className="col-lg-5 animated fadeInLeft">
                                <div className="calrousel-img">
                                    <img src={carousel} className="img-fluid w-100" alt="png logo" />
                                </div>
                            </div>
                            <div className="col-lg-7 animated fadeInRight">
                                <div className="text-sm-center text-md-end">
                                    <h3 className="display-1 text-white mb-4" style={{ textAlign: 'left'}}>WELCOME TO ROYALGLO NEXT ACEDAMY</h3>
                                    <h4 className=" text-uppercase fw-bold mb-4" style={{ color: '#ffcb05'}}>Best MBBS Direct Admission Academy</h4>
                                    <p className="text-white"  style={{ fontSize: '16px', textAlign: 'justify' , width: '80%'}}> we dedicated to providing high-quality education for Indian students to study MBBS/MD abroad, We offer admission services to top medical universities in Georgia...</p>
                                    <div className="d-flex pt-3 justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                        <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" rel="noreferrer" href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank">
                                            <i className="fas fa-play-circle me-2"></i> Watch Video
                                        </a>
                                        <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="/Aboutus">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
            </CCarousel>
           
            </div>

            <Button />
           
=======
            {/* <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
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
                                    <div className='btn p-0 me-3'><a> Need Assitance , Don't Hesitate Make a Msg</a></div>
                                    <div className='btn p-0 me-3'>  <Whatsapp /> </div>
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
                        </div>
                    </div>
                </div>
            </div>


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
                                        <li className='nav-li'><a className='nav-a' href="#contact">Contact</a></li>
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
            </div> */}

            <div>
                <CCarousel controls indicators>
                    <CCarouselItem className='carousel-bg'>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-7 animated fadeInLeft">
                                    <div className="text-sm-center text-md-start">
                                        <h3 className="display-1 text-white mb-4">WELCOME TO ROYALGLO NEXT ACEDAMY</h3>
                                        <h4 className="text-white text-uppercase fw-bold mb-4">Best MBBS Direct Admission Academy</h4>

                                        <p className="mb-5 fs-5 text-white "> we dedicated to providing high-quality education for Indian students to study MBBS/MD abroad, We offer admission services to top medical universities in Georgia...</p>
                                        <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                            <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" rel="noreferrer" href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank">
                                                <i className="fas fa-play-circle me-2"></i> Watch Video
                                            </a>
                                            <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 animated fadeInRight">
                                    <div className="calrousel-img" style={{ objectFit: 'cover' }}>
                                        <img src={carousel} className="img-fluid w-100" alt="png logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CCarouselItem>

                    <CCarouselItem className='carousel-bg' >
                        <div className="container">
                            <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
                                <div className="col-lg-5 animated fadeInLeft">
                                    <div className="calrousel-img">
                                        <img src={carousel} className="img-fluid w-100" alt="png logo" />
                                    </div>
                                </div>
                                <div className="col-lg-7 animated fadeInRight">
                                    <div className="text-sm-center text-md-end">
                                        <h4 className="text-white text-uppercase fw-bold mb-4">Best MBBS Direct Admission Academy</h4>
                                        <h3 className="display-1 text-white mb-4">WELCOME TO ROYALGLO NEXT ACEDAMY</h3>
                                        <p className="mb-5 fs-5 text-white "> we dedicated to providing high-quality education for Indian students to study MBBS/MD abroad, We offer admission services to top medical universities in Georgia...</p>
                                        <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                            <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" rel="noreferrer" href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank">
                                                <i className="fas fa-play-circle me-2"></i> Watch Video
                                            </a>
                                            <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>

>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
            <div>
                <Background />
            </div>
            <div>
<<<<<<< HEAD
               <European />
=======
                <European />
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
            </div>

            <div>
                <FlipBoxContainer />
            </div>
            <div>
                <Testimonials />
            </div>
<<<<<<< HEAD
          
=======
            {/* <div id='contact'>
                <Contact />
            </div> */}
            {/* <div>
                <Footer />
            </div> */}
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02

        </div>

    )
}
