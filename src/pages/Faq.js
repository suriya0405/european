import React,{useState} from 'react'
import faqImage from '../img/faq-img.webp';
import '../css/faq.css';

export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };


    const faqs = [
        {
          question: "Why Choose Georgia?",
          answer: "Georgia is primarily an English-speaking country, making communication with professors and patients easier during clinical rotations. Students get extensive clinical exposure and hands-on practice in hospitals from the 4th year.",
        },
        {
          question: "What is the total duration of the course?",
          answer: "Armenia, Georgia, Bosnia, and other European countries offer a 5-year medicine program plus a 1-year internship.",
        },
        {
          question: "Is NEET score required for doing MBBS Abroad?",
          answer: "Yes, NEET eligibility is mandatory for all Indian students to pursue medical courses abroad.",
        },
        {
          question: "Are hostel facilities available in abroad medical universities?",
          answer: "Yes, we provide separate hostels for boys and girls with Indian food.",
        },
      ];

  return (
    <div>

<div className="container-fluid faq-section py-5" style={{ backgroundColor: '#2b7daf' }}>
      <div className="container py-1">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="h-100">
              <div className="mb-5">
                <h4 className="text-white">Some Important FAQ's</h4>
                <h1 className="display-4 mb-0 text-white text-header">Common Frequently Asked Questions</h1>
              </div>
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body rounded">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <img src={faqImage} className="img-fluid w-100" alt="FAQ"  loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
