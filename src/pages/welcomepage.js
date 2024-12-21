import React from 'react';
import image from '../img/SIR-IMAGE.png';
import '../css/background.css';
import img1 from '../img/Graduation Collage image for web.jpg'
import { useNavigate } from 'react-router-dom';



export const Background = () => {

  const navigate = useNavigate();
        const handleAbout = () =>
        {
           navigate('/AboutUs');
        }
        

  return (
    <div>
   
      {/* Apply For Admission Section */}
      <div className='apply'>
      <div className='apply-container'>
        <h1>Apply For Admission</h1>
        <div className='line-A'></div>
        <div className='apply-container-para'>
        <p>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career to discover a field they’re passionate about and dare to lead it.</p>
        </div>
       <button className='apply-btn' onClick={handleAbout}>Apply</button>
      </div>
        <div className='img-holder-apply'>
          <img alt='' src={img1} className='image' />
        </div>

      </div>
    </div>
  );
};
