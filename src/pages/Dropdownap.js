import React, { useState, useEffect } from 'react';
import '../css/dropdown.css';

const Dropdownap = () => {
  const [submenuVisible, setSubmenuVisible] = useState(null);

  const handleMouseEnter = (index) => {
    setSubmenuVisible(index);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(null);
  };

  useEffect(() => {
    // For the thumbnail demo
    let count = 1;
    let mousein = false;

    const demo = () => {
      if (mousein) return;
      const element = document.getElementById('demo' + count++);
      if (element) {
        element.classList.toggle('hover');
      }
    };

    const demo2 = () => {
      if (mousein) return;
      const element = document.getElementById('demo2');
      if (element) {
        element.classList.toggle('hover');
      }
    };

    const reset = () => {
      count = 1;
      const hovers = document.querySelectorAll('.hover');
      for (let i = 0; i < hovers.length; i++) {
        hovers[i].classList.remove('hover');
      }
    };

    document.addEventListener('mouseover', () => {
      mousein = true;
      reset();
    });

    // Setting timeouts for demo
    setTimeout(demo, 500);
    setTimeout(demo, 700);
    setTimeout(demo, 900);
    setTimeout(reset, 2000);

    setTimeout(demo, 2500);
    setTimeout(demo, 2750);
    setTimeout(demo, 3050);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('mouseover', () => {
        mousein = true;
        reset();
      });
    };
  }, []);

  return (
    <nav className='navap'>
      <ul className='menuap'>
        <li id="demo1" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} className='menuitemap'>
          <a href="#">MBBS in Abroad</a>
          <ul className='menuap'>
            <li className='menuitemap'>
              <a href="#">MBBS in Georgia</a>
              <ul className='menuap'>
                <li id="demo2" className='menuitemap'>
                  <a href="#">European University</a>
                </li>
                <li id="demo3" className='menuitemap'>
                  <a href="#">Kutaisi University</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
    </nav>
  );
};

export default Dropdownap;
