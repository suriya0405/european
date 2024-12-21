import React from 'react'
import '../css/style.css';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import video from '../img/Orientation program promo 2024 (1).mp4'
import { Imagesuffel } from './Imagesuffel';
import image from '../img/SIR-IMAGE.png';
import '../css/background.css';

export const Aboutus = () => {

  
  const { ref: counterRef, inView: isCounterVisible } = useInView({
    triggerOnce: true, 
    threshold: 0.5,    
  });

  return (
    <div className='about-css page-container'>
      <div className='title-card'>

      </div>
       <div className='class-video'>
          {/*<video src={video}  autoPlay loop muted className="your-video-class">
          Your browser does not support the video tag.
          </video>*/}
          <h1>ROYAL GLO NEXT ACADEMY Pvt Ltd</h1>
          <p className='scroll-text1'>Academy Life    |    MBBS In Abroad   |    NEET-Coaching   |   Social
Overall in here</p>
          </div>
          <div className="home-container">
        <div className='rectangle'></div>
        <div className='rectangle1'></div>
        <img className='img-holder' src={image} alt='' />
        <div className='dr-img'>Dr.S.SANTHANAKIRSHNAN MD</div>
        <div className="homecontent-container" >
          <div className="text-overlay">
            <h1 className="display-5 mb-2 text-header">RoyalGlo Next Academy</h1>
            <div className='line-p'></div>
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
          
          </div>
        </div>
       
      </div>
        <div className='remaining-content'>
          <div className='images'>
          <div className='img-holder'>
          </div>
          <div className='img-holder'>

          </div>
          <div className='img-holder'>

          </div>
    
          </div>
          <div className='about-container'>
   

          


            
            <div className='first-para1'>
            <h1>About Us</h1>
            <p>
          It was 2009 we started our MBBS consultancy
           in a small manner and got admission for 20 students 
           for (Study MBBS / MD) Medical colleges in Philippines,
            Russia and china by sending them abroad for a better
             quality of medical education. 2010 we have been sending
              192 students to Abroad medical colleges admission like
               Philippines, Russia, China, Ukraine, Georgia, Armenia,
                Egypt & USA (Study MBBS / MD). More than 1500 doctor 
                studied their Medicine (MBBS / MD) completed their Medicine in 
                Abroad through our company. Currently 1200 students got admission
                 and studying Medicine (Study MBBS / MD) in Philippines, Russia,
               China, Ukraine, Georgia, Armenia, Egypt & USA.
               
               
                 
               </p></div>
               
               <div className='second-para'>
               <h1><b>I welcome the</b> <span className='orange'>Students</span> and <span className='blue'>Parents</span></h1>
               <p>
               Royal next international academy Pvt Ltd has 55 expert faculty
                members who are integral to the institute and their selfless
                 service and devotion to the students play a vital role in their success.
              
                We provide our services through Smart classrooms , digital and
                 distance learning programs. Our Classroom Learning Programs ensure
                  personalized attention and aim at developing the conceptual knowledge of 
                  our students.
               </p>
               <p>
               For more than 13 years, Royal Next has been helping 
               Indian students abroad medicine admission who dream 
               about Abroad Medical college (Study MBBS / MD) a career 
               in medicine. Every year, our students achieve top ranks 
               and display excellent results in various medical entrance 
               examinations such as MCI, FMGE Screening test, NEET, USMLE, 
               AIIMS and JIPMER. Get direct admission for (Study MBBS / MD)
                in Philippines, Russia, China, Ukraine, Georgia, Armenia, 
                Egypt & USA, at low cost in top medical colleges in these 
                countries and come back to practice in India.
               </p>
               </div>
          </div>
        </div>
        <Imagesuffel />
        <div className='aboutimages'>
          <div className='image1'> 1</div>
          <div className='image2'> 2</div>
        </div>
    
    </div>
  )
}
