import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './popup.css';
import './css/capstyle.css';
import axios from 'axios';
import logo from './img/Royal Glo Next logo for website 512 x 512.png';

export const Popup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [neet, setNeet] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const canvasRef = useRef(null);
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                initializeCaptcha(ctx);
            }
        }
    }, [show]);

    const handleClose = () => setShow(false);

    const sendEmail = async () => {
        try {
            await axios.post('http://localhost:5000/send-email', { name, mobile, neet, message });
            setStatus('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Error sending email');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput !== captchaText) {
            alert('Incorrect captcha. Please try again.');
            const ctx = canvasRef.current.getContext('2d');
            initializeCaptcha(ctx);
            return;
        }
        sendEmail();
        handleClose();
    };

    const generateRandomChar = (min, max) =>
        String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

    const generateCaptchaText = () => {
        let captcha = '';
        for (let i = 0; i < 3; i++) {
            captcha += generateRandomChar(65, 90);
            captcha += generateRandomChar(97, 122);
            captcha += generateRandomChar(48, 57);
        }
        return captcha.split('').sort(() => Math.random() - 0.5).join('');
    };

    const drawCaptchaOnCanvas = (ctx, captcha) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)'];
        const letterSpace = 150 / captcha.length;
        for (let i = 0; i < captcha.length; i++) {
            const xInitialSpace = 25;
            ctx.font = '20px Roboto Mono';
            ctx.fillStyle = textColors[Math.floor(Math.random() * 2)];
            ctx.fillText(captcha[i], xInitialSpace + i * letterSpace, Math.floor(Math.random() * 16 + 25), 100);
        }
    };

    const initializeCaptcha = (ctx) => {
        setUserInput('');
        const newCaptcha = generateCaptchaText();
        setCaptchaText(newCaptcha);
        drawCaptchaOnCanvas(ctx, newCaptcha);
    };

    const handleUserInputChange = (e) => {
        setUserInput(e.target.value);
        setIsVerified(e.target.value === captchaText);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <Modal className='popup' show={show} onHide={handleClose} centered>
                <Modal.Header className='header' closeButton>
                    <img src={logo} alt="Logo" />
                    <p className='para'>Register For Free Counseling</p>
                </Modal.Header>
                <Modal.Body>
                    <p>Let Our Expert Counsellor''s help you and answer you all questions/doubts.As always, We give Honest Advice, Guaranteed Admission, No Donation.<i className="fa fa-phone" id="i_fd84_0"></i></p>
                    <p><a href='/'><i className="fa fa-phone" id="i_fd84_0"></i>+91 9962705000</a></p>
                    <Form className='form-container-popup' onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter Name *'
                            />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Control
                                type="text"
                                name="district"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='District '
                            />
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Control
                                type="text"
                                name="neet"
                                value={neet}
                                onChange={(e) => setNeet(e.target.value)}
                                placeholder='NEET Score'
                            />
                        </Form.Group>
                        <div style={{ display: 'flex' }}>
                            <Form.Control as="select" style={{ width: '20%' }}>
                                <option>+91</option>
                            </Form.Control>
                            <Form.Control
                                type="text"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Enter Mobile Number *"
                                style={{ width: '80%' }}
                                maxLength={10} // Restrict to 10 digits
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
                                }}
                            />
                        </div>
                        <Form.Group controlId="formEmail">
                            <Form.Control
                                type="email"
                                placeholder="Enter Email Address *"
                            />

                        </Form.Group>
                        {/* <Form.Group controlId="formStateCity">
                            <Form.Control as="select" className="mb-2">
                                <option>Select State</option>
                                                      Add state options
                            </Form.Control>
                            <Form.Control as="select">
                                <option>Select City</option>
                                              Add city options
                            </Form.Control>
                        </Form.Group> */}
                        <div className="captcha-container">
                            <canvas ref={canvasRef} width="200" height="40"></canvas>
                            <button type="button" className='capcha-btn' onClick={() => initializeCaptcha(canvasRef.current.getContext('2d'))}>
                                Reload
                            </button>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Enter the text in the image"
                            value={userInput}
                            onChange={handleUserInputChange}
                        />
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                label={
                                    <>
                                        Do you want us to send you Brochure’s, Fees Structure’s, YouTube - Video Links & Complete Information on your WhatsApp
                                        <br /><br /><strong>Note: We do not share your contact details; we respect your privacy.</strong>
                                    </>
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Send
                        </Button>
                        <p>{status}</p>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};
