import React from 'react';
import image from '../img/SIR-IMAGE.png';
import '../css/background.css';
import img1 from '../img/Graduation Collage image for web.jpg'
import { useNavigate } from 'react-router-dom';



export const Background = () => {

  const navigate = useNavigate();
        const handleAbout = () =>
        {
<<<<<<< HEAD
           navigate('/AboutUs');
=======
          console.log('sadfgdggfhfghf');
          navigate('/Aboutus')
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
        }
        

  return (
    <div>
<<<<<<< HEAD
   
=======
      <div className="home-container">
        <img className='img-holder' src={image} alt='' />
        <div className="homecontent-container">
          <div className="text-overlay">
            <h1 className="display-5 mb-2 text-header">RoyalGlo Next Academy</h1>
            <div className='line'></div>
            <div className='paragraph'>
              <div className='text-para'>
                <p className="mb-0 feature-bold first-para">
                  RoyalGlo Next Academy Pvt Ltd was founded in the year 2008 by Dr.S.Santhanakrishnan MD 
                  ( General Physician ) who has completed his Medicine in Russia and cleared MCI FMGE Screening test.
                  He started working as a Indian Medical Registered Practitioner and he started MBBS / MD educational consultancy with 
                  the motive of rendering high quality medical education to Indian students to study MBBS /MD in Abroad.
                </p>
              </div>
              <div className='text-para text-para1'>
                <p className="second-paragraph"> 
                Royal Next is a MBBS abroad consultancy provides services with high standard of Admission (Study MBBS / MD) Medical colleges in Russia, China, Ukraine, Georgia, Armenia, Egypt, Philippines & USA. At our academy, we also conduct USMLE, FMGE, NEET UG & PG exam coaching by professional doctors.
                </p>
              </div>
            </div>
            <button className='read-more' onClick={handleAbout}>Read More...</button>
          
          </div>
        </div>
      </div>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
      {/* Apply For Admission Section */}
      <div className='apply'>
      <div className='apply-container'>
        <h1>Apply For Admission</h1>
        <div className='line-A'></div>
        <div className='apply-container-para'>
<<<<<<< HEAD
        <p>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career to discover a field they’re passionate about and dare to lead it.</p>
        </div>
       <button className='apply-btn' onClick={handleAbout}>Apply</button>
=======
        <p>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
        </div>
        <button className='apply-btn' onClick={handleAbout}>Apply</button>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
      </div>
        <div className='img-holder-apply'>
          <img alt='' src={img1} className='image' />
        </div>

      </div>
    </div>
  );
};
