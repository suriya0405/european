import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './popup.css';
import './css/capstyle.css'; 
import axios from 'axios';

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                initializeCaptcha(ctx);
            }
        }
    }, [show]); // Depend on 'show' to ensure modal is fully rendered

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
      console.log('handleSubmit called');
        e.preventDefault();
        if (userInput !== captchaText) {
          alert('Incorrect captcha. Please try again.'); // Alert message for incorrect captcha
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          initializeCaptcha(ctx); // Reset captcha on incorrect input
          return; // Exit the function early if captcha is incorrect
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
        if (e.target.value === captchaText) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
            
        }
    };

    return (
        <div>
            <Modal className='popup' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <p>Got questions or doubts? Our expert counselors are here to clear them up! Honest advice, guaranteed admissions, and no need for donations—Just good vibes and solid answers.</p>
                    <p><a href='/'><i className="fa fa-phone" id="i_fd84_0"></i>+91 9962705000</a></p>
                    <Form className='form-container' onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                               
                            />
                        </Form.Group>
                        <Form.Group controlId="formmobile">
                            <Form.Control
                                type="text"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder='Mobile No'
                              
                            />
                        </Form.Group>
                        <Form.Group controlId="formaddress">
                            <Form.Control
                                type="text"
                                name="district"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='District'
                               
                            />
                        </Form.Group>
                        <Form.Group controlId="formneet">
                            <Form.Control
                                type="text"
                                name="neet"
                                value={neet}
                                onChange={(e) => setNeet(e.target.value)}
                                placeholder='NEET Score'
                             
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Message'
                                rows={3}
                              
                            />
                        </Form.Group>
                        
                        {/* Captcha Section */}
                        <div className="container">
                            <div className="wrapper">
                                <canvas ref={canvasRef} width="200" height="40"></canvas>
                                <button id="reload-button" type="button" onClick={() => initializeCaptcha(canvasRef.current.getContext('2d'))}>
                                    Reload
                                </button>
                            </div>
                            <input
                                type="text"
                                id="user-input"
                                placeholder="Enter the text in the image"
                                value={userInput}
                                onChange={handleUserInputChange}
                              
                            />
                        </div>
                        
                        {/* Single Submit Button */}
                        <Button variant="primary" type="submit" className="mt-3 mb-10" >
                            Submit
                        </Button>
                        <p>{status}</p>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};
