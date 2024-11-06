import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../css/contact.css';




delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const Contact = () => {

 

  return (
    <div>
    
    <Container fluid className="py-5 contact-us bg-dark">
    <Row className="justify-content-center align-items-stretch">
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-container">
            <h2 className='text-white text-center form-container-h2 mt-1'>Contact Us</h2>
            <div className='line'></div>
          <Form className=' p-3 rounded  '>
            <div className="contact-details-container">
              <div className="contact-info">
                <p className='text-white'><strong>Direct addmission office:</strong>32/67, East Jones Road, Saidapet. Chennai-600015, Tamil Nadu.</p>
                <p className='text-white'><strong>Phone:</strong> +91 9962705000 <br />+91 9940830780</p>
                <p className='text-white'><strong>Email:</strong>  admin@europeanuniersity.in</p>
                <p className='text-white'><strong>International office:</strong> 
                  No 810, B Block, Hili tower, Al nadha, Sharjah, UAE.
                  <br />
                  +971 545255909</p>
              </div>
            </div>
          </Form>
          </div>
        </Col>

        <Col xs={10} md={6}>
        <div className="map-container">
        <div  className='map-align'>
    <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px 10px', borderRadius: '5px', zIndex: 10 }}>
       Addmission Office
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56930.74414352306!2d80.1865528!3d13.0252782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267822bd9ec71%3A0xfc28cc4851cc0ca1!2sRoyal%20Next%20International%20Academy%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1725261240678!5m2!1sen!2sin"
        width="100%" height="100%" style={{ border: '0' }} allowFullScreen loading="lazy"  title="Google Maps location of European University Georgia"  referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '24px', zIndex: 20 }}>
        📍
    </div>
</div>

</div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
