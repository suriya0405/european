import React, { useEffect, useRef, useCallback } from 'react';
import image from '../img/european-university-1024x576.jpg';
import image1 from '../img/Kutaisi.jpg';
import logo from '../img/EUROPEAN-UNIVERSITY,GEORGIA-LOGO.png';
import logo1 from '../img/KUTAISI UNIVERSITY,LOGO.png';

import '../css/European.css';
import { UniversitiesFeat } from './UniversitiesFeat';

export const European = () => {
    const featureRefsEuropean = useRef([]);
    const featureRefsKutaisi = useRef([]);

    const setFeatureRef = useCallback((el, index) => {
        featureRefsEuropean.current[index] = el;
    }, []);

    useEffect(() => {
        const observerEuropean = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideInFromLeft 1s ease forwards';
                    }
                });
            },
            { threshold: 0.1 }
        );

        const observerKutaisi = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideInFromRight 1s ease forwards';
                    }
                });
            },
            { threshold: 0.1 }
        );

        featureRefsEuropean.current.forEach((ref) => {
            if (ref) observerEuropean.observe(ref);
        });

        featureRefsKutaisi.current.forEach((ref) => {
            if (ref) observerKutaisi.observe(ref);
        });

        return () => {
            featureRefsEuropean.current.forEach((ref) => {
                if (ref) observerEuropean.unobserve(ref);
            });

            featureRefsKutaisi.current.forEach((ref) => {
                if (ref) observerKutaisi.unobserve(ref);
            });
        };
    }, []);

    return (
        <div>
            <div className='european-container'>
                <div className='european'>
                    <img alt='European University' src={image} />
                    <div className='european-text'>
                        <img alt='University Logo' src={logo} />
                        <h1>European University</h1>
                        <h2>Your MBBS Future Starts Here</h2>

                        <div className='text-para'>
                            <div className='line'></div>
                            <p className='para'>European University Admissions</p>
                            <p className='para1'>
                                Join <a href='https://europeanuniversity.in/'>European University</a> and take the first step towards a successful career. Our admissions team is here to guide you through a simple and personalized process. With a focus on quality education and hands-on learning, we offer world-class programs in medicine, engineering, business, and more. Apply today and become part of a diverse, international community committed to academic excellence.
                            </p>
                            <button className='european-btn'> learnmore..</button>
                        </div>
                    </div>

                    <div className='features'>
                       <UniversitiesFeat />
               
                    </div>
                </div>
            </div>

            <div className='european-container1'>
                <div className='european'>
                    <img className="ku" alt='European University' src={image1} />
                    <div className='european-text'>
                        <img alt='University Logo' src={logo1} />
                        <h1>Kutaisi University</h1>
                        <h2>Your MBBS Future Starts Here</h2>

                        <div className='text-para'>
                            <div className='line'></div>
                            <p className='para'>Kutaisi University Admissions</p>
                            <p className='para1'>
                                The MBBS program at <a href='https://kutaisiuniversity.com/'>Kutaisi University</a> in Georgia highlights the university's commitment to high-quality medical education, modern facilities, experienced faculty, and a student-centered approach. Prospective students can explore program details, admission requirements, campus life, and opportunities for clinical training, preparing them for a successful medical career in an international environment.
                            </p>
                            <button className='european-btn'> learnmore..</button>
                        </div>
                    </div>

                    <div className='features'>
                        <div ref={(el) => (featureRefsKutaisi.current[0] = el)} className='kcontainer1'>
                            <h2 className='khead2'>Internationally Recognized Curriculum</h2>
                            <p className='para'>
                                The MBBS program is designed to meet global standards, preparing students for international careers.
                            </p>
                        </div>
                        <div ref={(el) => (featureRefsKutaisi.current[1] = el)} className='kcontainer2'>
                            <h2 className='khead2'>Experienced Faculty</h2>
                            <p className='para'>
                                Skilled professors provide valuable insights and mentorship in medical science.
                            </p>
                        </div>

                        <div ref={(el) => (featureRefsKutaisi.current[2] = el)} className='kcontainer3'>
                            <h3 className='khead2'>Affordable Tuition</h3>
                            <p className='para'>
                                Accessible fee structures make medical education more attainable for international students.
                            </p>
                        </div>
                        <div ref={(el) => (featureRefsKutaisi.current[3] = el)} className='kcontainer4'>
                            <h2 className='khead2'>Hands-on Clinical Training</h2>
                            <p className='para'>
                                Practical experience is emphasized through training partnerships with leading hospitals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


