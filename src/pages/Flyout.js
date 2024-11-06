import React, { useState, useEffect } from 'react';
import home from '../css/gif/home.gif';
import contact from '../css/gif/contact.gif';
import about from '../css/gif/information.gif';
import hostal from '../css/gif/skyline.gif';
import gallery from '../css/gif/picture.gif';
import '../css/flyout.css';

function Flyout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the menu after scrolling 200px down
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flyout-container">
        {isVisible && (
        <div className="flyout-text">
          <div className="menus">
            <div className="menu-item home">
              <div className="home-tooltip tooltip"><a href='/'><img alt="home-gif" src={home} className="home-gif" /></a></div>
            </div>
            <div className="menu-item contact"> 
              <div className="contact-tooltip tooltip"><a href='/'><img alt="contact-gif" src={contact} className="contact-gif" /></a></div>
            </div>
            <div className="menu-item about">
              <div className="about-tooltip tooltip"><a href='/'><img alt="about-gif" src={about} className="about-gif" /></a></div>
            </div>
            <div className="menu-item hostal">
              <div className="hostel-tooltip tooltip"><a href='/'><img alt="hostal-gif" src={hostal} className="hostal-gif" /></a></div>
            </div>
            <div className="menu-item gallery">
              <div className="gallery-tooltip tooltip"><a href='/'><img alt="gallery-gif" src={gallery} className="gallery-gif" /></a></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Flyout;
