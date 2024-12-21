import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FlipBox.css'; 
import './LearnMore';
import image from '../img/pic.png';
import next from '../img/fast-forward.gif';


const FlipBox = ({ frontImage, backImage, header, description, link }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/LearnMore'); 
    };
    return (
        <div className="background-pic">
            <div className="box-item">
                <div className="flip-box">
                    {/* Front Side */}
                    <div className="flip-box-front text-center front-image" >
                        <div className="inner-front color-white">
                            <h3 className=" h3">{header}</h3>
                            <h3 className="flip-box-header ">NEET PG TRAINING / NEXT TRAINING</h3>
                            <p>{description}</p>
                            <img src={next} alt="" className="flip-box-img" />

                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-box-back text-center back-image" >
                        <div className="inner-back color-white">
                            <h3 className="flip-box-header ">NEET PG TRAINING / NEXT TRAINING</h3>

                            <p className='para2'>RoyalGlo Next conducts NEET PG Coaching Classes</p>
                            <button className="flip-box-button" onClick={handleClick}>Learn More</button>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

};

// FlipBoxContainer Component
const FlipBoxContainer = () => {
    // Data for the boxes
    const flipBoxData = [
       
        {
            frontImage: '../img/pic.png',
            backImage: 'https://s25.postimg.cc/hj4c4qnov/cta-3.png',
            header: 'ROYAL GLO NEXT ACADEMY',
            link: '/LearnMore',
        },

    ];

    return (
        <div className="box-container">
            {flipBoxData.map((box, index) => (
                <FlipBox
                    key={index}
                    frontImage={box.frontImage}
                    backImage={box.backImage}
                    header={box.header}
                    description={box.description}
              
                />
            ))}
        </div>
    );
};

export default FlipBoxContainer;
