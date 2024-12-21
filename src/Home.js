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
import './css/navbar.css'
import Testimonials from './pages/Testimonials';
import { European } from './pages/European';
import FlipBoxContainer from './pages/FlipBoxContainer'
import Flyout from './pages/Flyout';
import { Homeyoutube } from './pages/Homeyoutube';
import { Button } from './pages/Button';



export const Home = () => {


    return (

        <div className='background-color'>
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
           
            <div>
                <Background />
            </div>
            <div>
               <European />
            </div>

            <div>
                <FlipBoxContainer />
            </div>
            <div>
                <Testimonials />
            </div>
          

        </div>

    )
}
