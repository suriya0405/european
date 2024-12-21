import React, { useEffect, useRef, useState } from 'react';
import '../css/image.css';
import trust from '../img/icons8-trustworthy-64.png';
import exam from '../img/icons8-test-passed-60.png';
import office from '../img/icons8-office-60.png';
import career from '../img/icons8-graduate-64.png';
import consultant from '../img/icons8-consultancy-64.png';
import training from '../img/icons8-books-64.png';

export const Imagesuffel = () => {
    const [animate, setAnimate] = useState(false);
    const shuffleRef = useRef(null);


    useEffect(() => {
      const handleScroll = () => {
          const rect = shuffleRef.current?.getBoundingClientRect();
          const isDesktop = window.innerWidth > 768;

          if (isDesktop && rect?.top <= window.innerHeight) { // Check if the element is in view
              setAnimate(true);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className='imgsuffel-bg'>
            <div ref={shuffleRef} className="image-shuffle">
                <div className="image-container">
                    <div className={`shuffle-img ${animate ? 'shuffle' : ''}`}>
                        <div className='service-container'>
                            <img alt='' src={trust} />
                            <span>Honesty And </span>
                            <span>Transparency</span>
                            <div className="hover-content">
                                <p>Ethics is never sacrificed at Royal Next. Honesty and transparency are the hallmark of our service makes Royal Next Standout.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className={`shuffle-img ${animate ? 'shuffle' : ''}`}>
                        <div className='service-container'>
                            <img alt='' src={consultant} />
                            <span>Top Education </span>
                            <span>Consultants</span>
                            <div className="hover-content">
                                <p>Dedicated to raising the quality of education, intellect, and human capital, Royal Next Education is among the top education consultants in India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className={`shuffle-img ${animate ? 'shuffle' : ''}`}>
                        <div className='service-container'>
                            <img alt='' src={career} />
                            <span>Career Guidance </span>
                            <div className="hover-content">
                                <p>We assist you with the admission process and provide guidance on career choices in top universities worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className={`shuffle-img ${animate ? 'shuffle' : ''}`}>
                        <div className='service-container'>
                            <img alt='' src={exam} />
                            <span>MCI Examination </span>
                            <div className="hover-content">
                                <p>Since 2017, Royal Next has been arranging special coaching classes for the MCI AFMG qualifying examination.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className={`shuffle-img ${animate ? 'shuffle' : ''}`}>
                        <div className='service-container'>
                            <img alt='' src={training} />
                            <span>Training Programs </span>
                            <div className="hover-content">
                                <p>We offer short-term training programs like IELTS, teacher training, and leadership management.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className={`shuffle-img ${animate ? 'shuffle' : ''}`}>
                        <div className='service-container'>
                            <img alt='' src={office} />
                            <span>Administrative Office</span>
                            <span>at DAVAO</span>
                            <div className="hover-content">
                                <p>To review students and classes, Royal Next opened an administrative center at DAVAO itself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
