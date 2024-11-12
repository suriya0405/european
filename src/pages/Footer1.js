// src/components/Footer.js
import React from 'react';
import '../css/Footer1.css'; // Adjust path based on your file structure

const Footer1 = () => {
    return (
        <div className="footer pt-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xs-12 about-company">
                        <h2>About Us</h2>
                        <p className="pr-5 text-white-50">
                            We are a leading educational institution committed to excellence in medical education.
                            <div className="social-media">
                                <a href="https://www.facebook.com/royalglonextacademy" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/royalglonextacademy/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </p>
                    </div>
                    <div className="col-lg-4 col-xs-12 location">
                        <h2 className="mt-lg-0 mt-sm-4">Contact</h2>
                        <p className="pr-5 text-white-50">Royal Next International Academy Pvt Ltd
                            32/67, East Jones Road, Saidapet.
                            Chennai-600015, Tamil Nadu.</p>
                        <p className="mb-0 pr-5 text-white-50"><i className="fa fa-phone mr-3"></i>info@royalnextacademy.com</p>
                        <p className='pr-5 text-white-50'><i className="fa fa-envelope-o mr-3"></i>+91 9962705000</p>
                    </div>
                    <div className="col-lg-3 col-xs-12 links ">
                        <h4 className="mt-lg-0 mt-sm-4">Links</h4>
                        <ul className="m-0 p-0 ">
                            <li>- <a href="/home">Home</a></li>
                            <li>- <a href="/Aboutus">About Us</a></li>
                            <li>- <a href="#">Hostel</a></li>
                            <li>- <a href="#">Gallary</a></li>
                            <li>- <a href="/contact">Contact Us</a></li>

                        </ul>
                    </div>
                </div>

            </div>

            <div className=" copyright">
                <p><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
        </div>

    );
};

export default Footer1;
