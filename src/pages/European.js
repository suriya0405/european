<<<<<<< HEAD
import React, { useEffect, useRef, useCallback } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
import image from '../img/european-university-1024x576.jpg';
import image1 from '../img/Kutaisi.jpg';
import logo from '../img/EUROPEAN-UNIVERSITY,GEORGIA-LOGO.png';
import logo1 from '../img/KUTAISI UNIVERSITY,LOGO.png';

import '../css/European.css';
<<<<<<< HEAD
import { UniversitiesFeat } from './UniversitiesFeat';
=======
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02

export const European = () => {
    const featureRefsEuropean = useRef([]);
    const featureRefsKutaisi = useRef([]);

<<<<<<< HEAD
    const setFeatureRef = useCallback((el, index) => {
        featureRefsEuropean.current[index] = el;
    }, []);

=======
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
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
<<<<<<< HEAD
                        entry.target.style.animation = 'slideInFromRight 1s ease forwards';
=======
                        entry.target.style.animation = 'slideInFromLeft 1s ease forwards';
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
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
<<<<<<< HEAD
                       <UniversitiesFeat />
               
=======
                        <div ref={(el) => (featureRefsEuropean.current[0] = el)} className='container1'>
                            <h2 className='head2'>Internationally Recognized Programs</h2>
                            <p className='para'>
                                European University offers globally accredited degrees in fields like medicine, engineering, and business, ensuring graduates are well-prepared for careers worldwide.
                            </p>
                        </div>
                        <div ref={(el) => (featureRefsEuropean.current[1] = el)} className='container2'>
                            <h2 className='head2'>Experienced Faculty</h2>
                            <p className='para'>
                                The university boasts a diverse and highly qualified faculty, combining academic expertise with real-world experience to provide top-quality education.
                            </p>
                        </div>

                        <div ref={(el) => (featureRefsEuropean.current[2] = el)} className='container3'>
                            <h3 className='head2'>Modern Campus Facilities</h3>
                            <p className='para'>
                                Equipped with state-of-the-art labs, libraries, and student resources, European University provides a cutting-edge environment for learning and research.
                            </p>
                        </div>
                        <div ref={(el) => (featureRefsEuropean.current[3] = el)} className='container4'>
                            <h2 className='head2'>Diverse Student Community</h2>
                            <p className='para'>
                                With students from all over the world, the university promotes cultural exchange and networking, enriching the educational experience and preparing students for global opportunities.
                            </p>
                        </div>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
                    </div>
                </div>
            </div>

            <div className='european-container1'>
                <div className='european'>
<<<<<<< HEAD
                    <img className="ku" alt='European University' src={image1} />
=======
                    <img alt='European University' src={image1} />
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
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
<<<<<<< HEAD
                            <h2 className='khead2'>Internationally Recognized Curriculum</h2>
=======
                            <h2 className='head2'>Internationally Recognized Curriculum</h2>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
                            <p className='para'>
                                The MBBS program is designed to meet global standards, preparing students for international careers.
                            </p>
                        </div>
                        <div ref={(el) => (featureRefsKutaisi.current[1] = el)} className='kcontainer2'>
<<<<<<< HEAD
                            <h2 className='khead2'>Experienced Faculty</h2>
=======
                            <h2 className='head2'>Experienced Faculty</h2>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
                            <p className='para'>
                                Skilled professors provide valuable insights and mentorship in medical science.
                            </p>
                        </div>

                        <div ref={(el) => (featureRefsKutaisi.current[2] = el)} className='kcontainer3'>
<<<<<<< HEAD
                            <h3 className='khead2'>Affordable Tuition</h3>
=======
                            <h3 className='head2'>Affordable Tuition</h3>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
                            <p className='para'>
                                Accessible fee structures make medical education more attainable for international students.
                            </p>
                        </div>
                        <div ref={(el) => (featureRefsKutaisi.current[3] = el)} className='kcontainer4'>
<<<<<<< HEAD
                            <h2 className='khead2'>Hands-on Clinical Training</h2>
=======
                            <h2 className='head2'>Hands-on Clinical Training</h2>
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
                            <p className='para'>
                                Practical experience is emphasized through training partnerships with leading hospitals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            
        </div>
    );
};


=======
        </div>
    );
};
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
