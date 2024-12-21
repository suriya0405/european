import React,{useState} from 'react'
import mbbsinabroad from '../img/mbbs-in-abroad.webp'
import '../css/mbbsinabroad.css'
import eu from '../img/european university.webp'
import ku from '../img/kutaisi university.webp'
import { Dropdown } from 'react-bootstrap'


export const Mbbsinabroad = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className='mbbs'>
            <div className='mb-imgholder'>
               
                <div className='mb-text'>
                    MBBS IN ABROAD
                </div>
                <p className='scroll-text'>Trusted Platform for Medical Studies Abroad    |  <span className='yellow'>  Best MBBS Abroad Consultancy </span>   |    Affordable Pathways to Become a Doctor Abroad   </p>
                <img alt='mbbs in abroad' src={mbbsinabroad} />
            </div>
            
            <div className='container-holder'>
                <div className='abroad'>
                   <p>Choose you country</p>
                <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        MBBS In Abroad
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">MBBS in Georgia</Dropdown.Item>
      </Dropdown.Menu>
                </Dropdown>
                </div>


                <div className='universities'>
                  
                      <div className='university'>
                      <img alt='kutaisi university' src={ku}/>
                      <p>Kutaisi University</p>
                      <span>Learn More..</span>
                    </div>

                    <div className='university'>
                      <img alt='Euroean university' src={eu} />
                      <p>European University</p>
                      <span>Learn More..</span>
                    </div> 

                    <div className='university'>
                      <img alt='Euroean university' src={eu} />
                      <p>European University</p>
                      <span>Learn More..</span>
                    </div> 
                </div>
                </div>

                <div className='mbbs-content'>
                  <div className='mbbs-container'>
                  <h1>MBBS in Abroad with Royal Glo Next Academy</h1>
                  <h3>Welcome to Your Pathway to a Global Medical Degree!</h3>
                  <p>
                  At Royal Glo Next Academy, we are dedicated to guiding aspiring doctors towards their dreams of earning a prestigious MBBS degree from top universities around the world. Our MBBS in Abroad program provides an affordable and quality education, global exposure, and an internationally recognized medical degree to kickstart a successful career in medicine.
                  </p>
                  </div>

                  <h2>Why Choose MBBS Abroad?</h2>
                  <h4>1.	World-Class Education at Affordable Costs</h4>
<p>Studying MBBS abroad is often more affordable compared to private medical colleges in many countries. Our partner universities in countries like Georgia, Russia, Ukraine, Philippines, and others offer top-notch medical programs recognized globally.</p>
<h4>2.	Global Recognition and High Standards</h4>
<p>Our partnered institutions are recognized by major global medical bodies such as WHO, UNESCO, and NMC. Earning an MBBS from these universities ensures a high-standard medical education that is accepted worldwide.</p>
<h4>3.	Modern Facilities and Learning Environment</h4>
<p>Experience advanced medical training with cutting-edge technology, modern facilities, and state-of-the-art labs. This prepares you not only for immediate practice but also for future advancements in medical science.</p>
<h4>4.	Multicultural Experience</h4>
<p>Studying abroad allows students to meet people from diverse cultures, improving communication and social skills, which are essential for a career in medicine. It’s a holistic experience that shapes a well-rounded personality.</p>
<h4>5.	High Success Rates in Licensing Exams</h4>
<p>Our students are well-prepared for licensing exams like FMGE, USMLE, PLAB, and others. We provide guidance and resources to help you excel in these exams and begin practicing as a certified doctor in your chosen country.</p>

                </div>

        </div>
    )
}
