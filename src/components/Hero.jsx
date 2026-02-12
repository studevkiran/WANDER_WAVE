
import React from 'react';
import images from '../data/images';

const Hero = ({ title, subtitle, tripDuration, bgImage }) => {
    const fallbackImage = images.hero.default;
    return (
        <header className="hero" style={{ backgroundImage: `url('${bgImage || fallbackImage}')` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="brand-subtitle">WANDER WAVE</p>
                <h1 className="hero-title">{title || "EXPLORE"}</h1>
                <p className="trip-duration">{tripDuration || subtitle}</p>
            </div>
        </header>
    );
};

export default Hero;
