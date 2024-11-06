import React from 'react'
import '../css/footer.css'

export const Footer = () => {
  return (
    <div><footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a leading educational institution committed to excellence in medical education.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p><strong>Address:</strong> 32/67, East Jones Road, Saidapet. Chennai-600015, Tamil Nadu.</p>
          <p><strong>Phone:</strong>+91 9962705000</p>
          <p><strong>Email:</strong>  admin@europeanuniersity.in</p>
          <p><strong>openTime:</strong> 8:00 a.m - 8:00 p.m</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href='/'><i className="fa fa-phone" id="i_fd84_0"></i>+91 9962705000</a>
          <div className="social-links">

            <br />
            <a href="https://www.facebook.com/royalnextacademy13" rel="noreferrer" target="_blank"><i className="fab fa-facebook" id="i_fd84_0"></i></a>
            <a href="https://www.instagram.com/royalnextacademy/" rel="noreferrer" target="_blank"><i className="fab fa-instagram" id="i_fd84_0"></i></a>
            <a href="https://twitter.com/Royalnextoff" rel="noreferrer" target="_blank"><i className="fab fa-twitter" id="i_fd84_0"></i></a>
            <a href="https://www.youtube.com/channel/UCXEIdPJUowws2aQ58rFv72A" rel="noreferrer" target="_blank"><i className="fab fa-youtube" id="i_fd84_0"></i></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} European Medical University. All rights reserved.</p>
      </div>
    </footer></div>
  )
}
