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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
