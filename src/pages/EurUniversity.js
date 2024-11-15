import React from 'react';
import './WelcomePage.css'; // CSS for styling

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <div className="overlay">
                <h1 className="welcome-title">Welcome to European University</h1>
                <p className="welcome-subtitle">
                    Embark on an academic journey with history, innovation, and culture.
                </p>
                <button className="explore-button">Explore Programs</button>
            </div>
        </div>
    );
};

export default WelcomePage;
