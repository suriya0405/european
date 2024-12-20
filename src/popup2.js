import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './popup.css';
import './css/capstyle.css';
import axios from 'axios';
import logo from './img/Royal Glo Next logo for website 512 x 512.png';

export const Popup = () => {
    const statesAndCities = {
        "Tamil Nadu":
            ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Ranipet", "Nagercoil", "Thanjavur", "Vellore", "Kancheepuram", "Erode", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Sivakasi", "Pudukkottai", "Neyveli (TS)", "Nagapattinam", "Viluppuram", "Tiruchengode", "Vaniyambadi", "Theni Allinagaram", "Udhagamandalam", "Aruppukkottai", "Paramakudi", "Arakkonam", "Virudhachalam", "Srivilliputhur", "Tindivanam", "Virudhunagar", "Karur", "Valparai", "Sankarankovil", "Tenkasi", "Palani", "Pattukkottai", "Tirupathur", "Ramanathapuram", "Udumalaipettai", "Gobichettipalayam", "Thiruvarur", "Thiruvallur", "Panruti", "Namakkal", "Thirumangalam", "Vikramasingapuram", "Nellikuppam", "Rasipuram", "Tiruttani", "Nandivaram-Guduvancheri", "Periyakulam", "Pernampattu", "Vellakoil", "Sivaganga", "Vadalur", "Rameshwaram", "Tiruvethipuram", "Perambalur", "Usilampatti", "Vedaranyam", "Sathyamangalam", "Puliyankudi", "Nanjikottai", "Thuraiyur", "Sirkali", "Tiruchendur", "Periyasemur", "Sattur", "Vandavasi", "Tharamangalam", "Tirukkoyilur", "Oddanchatram", "Palladam", "Vadakkuvalliyur", "Tirukalukundram", "Uthamapalayam", "Surandai", "Sankari", "Shenkottai", "Vadipatti", "Sholingur", "Tirupathur", "Manachanallur", "Viswanatham", "Polur", "Panagudi", "Uthiramerur", "Thiruthuraipoondi", "Pallapatti", "Ponneri", "Lalgudi", "Natham", "Unnamalaikadai", "P.N.Patti", "Tharangambadi", "Tittakudi", "Pacode", "O' Valley", "Suriyampalayam", "Sholavandan", "Thammampatti", "Namagiripettai", "Peravurani", "Parangipettai", "Pudupattinam", "Pallikonda", "Sivagiri", "Punjaipugalur", "Padmanabhapuram", "Thirupuvanam"],


        "Goa":
            ["Marmagao", "Panaji", "Margao", "Mapusa"],
    }

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
    const [selectedState, setSelectedState] = useState(""); // State for selected state
    const [cities, setCities] = useState([]); // State for city list
    const [mobileError, setMobileError] = useState('');
    const [neetError, setNeetError] = useState('');


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

        if (neet.length !== 3) {
            setNeetError('Neet mark must be 3 digits');
            return;
        }

        if (mobile.length !== 10) {
            setMobileError('Mobile number must be 10 digits');
            return; // Stop form submission
        }

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

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setCities(statesAndCities[state] || []); // Set cities based on selected state

    };

    return (
        <div>
            <Modal className='popup' show={show} onHide={handleClose} centered>
                <Modal.Header className='header'>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleClose}
                        style={{ position: 'absolute', top: '50px', right: '218px', padding: '8.1px' }}
                    />
                    <img src={logo} alt="Logo" />

                    <p className='para'>Enquire Now</p>
                </Modal.Header>
                <Modal.Body>
                    {/* <p>
                        Let Our Expert Counsellor's help you and answer your questions. We provide Honest Advice, Guaranteed Admission, and No Donation.
                        <a href='/' className='phone-link'><i className="fa fa-phone"></i>&nbsp;+91 9962705000</a>
                    </p> */}
                    <Form className='form-container-popup' onSubmit={handleSubmit}>

                        <Form.Group controlId="formName">
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter Name '
                                style={{ width: "40%" }}
                                required
                            />

                            <Form.Control
                                type="number"
                                name="neet"
                                value={neet}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                                    if (newValue.length <= 3) { // Allow only up to three digits
                                        setNeet(newValue);
                                    }
                                    // setNeetError(''); // Clear any previous error
                                }}
                                placeholder='NEET Score'
                                required
                                style={{ width: '40%' }}
                                maxLength={3} // Limit to 3 digits
                            />
                        </Form.Group>
                        <Form.Group controlId="formMobile">
                            <div style={{ display: 'flex' }}>
                                <Form.Control as="select" style={{ width: '20%' }}>
                                    <option>+91</option>
                                </Form.Control>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => {
                                        setMobile(e.target.value);
                                        setMobileError(''); // Clear error when user starts typing
                                    }}
                                    placeholder="Enter Mobile Number"
                                    required
                                    style={{ width: '79%' }}
                                    maxLength={10}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    }}
                                />
                            </div>
                            {mobileError && <p style={{ color: 'red' }}>{mobileError}</p>}
                        </Form.Group>

                        <Form.Group controlId="formStateCity" style={{ display: 'flex', gap: '10px' }}>
                            <Form.Control
                                as="select"
                                style={{ width: '40%' }}
                                value={selectedState}
                                onChange={handleStateChange}
                            >
                                <option value="" disabled>Select State</option>
                                {Object.keys(statesAndCities).map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </Form.Control>
                            <Form.Control
                                as="select"
                                style={{ width: '40%' }}
                                disabled={!selectedState}
                                defaultValue=""
                            >
                                <option value="" disabled>Select City</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <div className="captcha-container">
                            <canvas ref={canvasRef} width="200" height="45"></canvas>
                            <button type="button" className='capcha-btn' onClick={() => initializeCaptcha(canvasRef.current.getContext('2d'))}>
                                Reload Captcha
                            </button>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Enter the Captcha"
                            style={{ width: "90%" }}
                            value={userInput}
                            onChange={handleUserInputChange}
                        />
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                label={
                                    <span className='checkbox-label'>
                                        Do you want us to send you Brochure’s, Fees Structure’s, YouTube - Video Links & Complete Information on your WhatsApp
                                        <br /><br /><strong>Note: We do not share your contact details; we respect your privacy.</strong>
                                    </span>
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Send
                        </Button>
                        <p>{status}</p>

                        {/* Rest of the form */}
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};
