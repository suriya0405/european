import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Testimonials.css';

const testimonialsData = [
    {
        name: 'Harini',
        University: 'Kutaisi University',
        text: 'When I approached the Royal Next International Academy seeing their website, I never thought studying abroad would be a simple process.',
        image: 'https://www.royalnextacademy.com/testimonial_images/Harini.jpg',
    },
    {
        name: 'Deena Dharshan',
        University: 'Kutaisi University',
        text: 'Opportunity knocks only once! I saw the advertisement of Royal Next Academy and here is where I am… studying medicine in Georgia.',
        image: 'https://www.royalnextacademy.com/testimonial_images/Deena-Dharshan.jpg',
    },
    {
        name: 'Dhaarani S',
        University: 'European University',
        text: 'Thanks to Royal Next International Academy for their excellent guidance and execution of my admission.',
        image: 'https://www.royalnextacademy.com/testimonial_images/Dhaarani-S.jpg',
    },
    {
        name: 'Andrea Lincy A P',
        University: 'European University',
        text: 'It was not easy to find a university out of India to study MBBS. The Royal Next International Academy facilitated everything for me.',
        image: 'https://www.royalnextacademy.com/testimonial_images/Andrea-Lincy-A-P.jpg',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="heading text-center">
            <div className="success-stories">
    <h2>Student Success Stories</h2>
    <p>
        Our students’ success stories are a testament to the quality of service and guidance provided by Royal Next International Academy. From simplifying the complex process of studying abroad to offering personalized support, our academy has played a pivotal role in helping students achieve their dreams of pursuing higher education at prestigious universities. These testimonials reflect the positive experiences of students who trusted us with their academic journeys, and who are now thriving in their chosen fields at top international institutions.
    </p>
</div>


            </div>
            <div className="container-tesi">
                <div className="row text-center">
                    <div className="col-md-12">
                        <Carousel className='text-inner'>
                            {testimonialsData.map((testimonial, index) => (
                                <Carousel.Item key={index} className="text-center ">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="center-block team"
                                    />
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.University}</h4>
                                   <div className='tesi-para'> <p>{testimonial.text}</p></div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;