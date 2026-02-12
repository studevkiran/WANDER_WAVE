
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trips } from '../data/trips';
import Navbar from './Navbar';
import Footer from './Footer';
import ReviewsSection from './ReviewsSection';
import FlipCard from './FlipCard';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [destination, setDestination] = useState('');
    const [travelMonth, setTravelMonth] = useState('');
    const [groupSize, setGroupSize] = useState('Solo Traveler');

    const generateWhatsAppMessage = () => {
        let message = "Hi, I am looking for a trip package";

        if (destination) {
            message += ` to ${destination}`;
        }

        if (travelMonth) {
            const date = new Date(travelMonth + '-01');
            const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            message += ` in ${monthYear}`;
        }

        if (groupSize) {
            message += ` for ${groupSize}`;
        }

        return encodeURIComponent(message);
    };

    return (
        <div className="skyroute-app">
            <Navbar />

            {/* Hero Section */}
            <header className="sky-hero">
                <div className="container hero-container">
                    <div className="hero-text-content">
                        <h1 className="hero-heading">Your Travel Buddy <br /> for Epic Adventures</h1>
                        <p className="hero-subheading">
                            Amazing group travel experiences for young travelers, solo adventurers, and friends. Unforgettable memories without breaking the bank.
                        </p>
                        <div className="hero-features">
                            <div className="hero-feature">
                                Smart Itineraries
                            </div>
                            <div className="hero-feature">
                                24/7 Support
                            </div>
                            <div className="hero-feature">
                                Transparent Pricing
                            </div>
                        </div>
                    </div>

                    <div className="hero-search-widget">
                        <h3>Discover Your Perfect Trip</h3>
                        <div className="search-form">
                            <div className="form-group">
                                <label>Where do you want to go?</label>
                                <input
                                    type="text"
                                    placeholder="Dubai, Thailand, Vietnam..."
                                    className="form-input"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Travel Month</label>
                                    <input
                                        type="month"
                                        className="form-input"
                                        value={travelMonth}
                                        onChange={(e) => setTravelMonth(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Group Size</label>
                                    <select
                                        className="form-input"
                                        value={groupSize}
                                        onChange={(e) => setGroupSize(e.target.value)}
                                    >
                                        <option>Solo Traveler</option>
                                        <option>2-4 People</option>
                                        <option>5+ Group</option>
                                    </select>
                                </div>
                            </div>
                            <a
                                href={`https://wa.me/918105059223?text=${generateWhatsAppMessage()}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ width: '100%', marginTop: '16px', textAlign: 'center', display: 'block' }}
                            >
                                Explore Packages
                            </a>
                            <p className="search-note">Curated group travel experiences</p>
                        </div>
                    </div>

                    {/* Why Wander Wave - Statistics Row */}
                    <div className="hero-stats">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="stat-number">100%</h3>
                            <p className="stat-label">Satisfied Customers</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 15.5C21.38 15.5 22.5 16.62 22.5 18C22.5 19.38 21.38 20.5 20 20.5C18.62 20.5 17.5 19.38 17.5 18C17.5 16.62 18.62 15.5 20 15.5ZM20 2C21.38 2 22.5 3.12 22.5 4.5C22.5 5.88 21.38 7 20 7C18.62 7 17.5 5.88 17.5 4.5C17.5 3.12 18.62 2 20 2ZM13 9H11V7H13V9ZM13 17H11V15H13V17ZM17 13H7V11H17V13ZM20 11.5C21.38 11.5 22.5 10.38 22.5 9C22.5 7.62 21.38 6.5 20 6.5C18.62 6.5 17.5 7.62 17.5 9C17.5 10.38 18.62 11.5 20 11.5Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="stat-number">24x7</h3>
                            <p className="stat-label">Call Support</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="stat-number">No</h3>
                            <p className="stat-label">3rd Party Mess</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="stat-number">Safe</h3>
                            <p className="stat-label">& Comfy Stay</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11.75C6.66 11.75 2 12.92 2 15.25V17H16V15.25C16 12.92 11.34 11.75 9 11.75ZM4.34 15C5.18 14.42 7.21 13.75 9 13.75C10.79 13.75 12.82 14.42 13.66 15H4.34ZM9 10C10.93 10 12.5 8.43 12.5 6.5C12.5 4.57 10.93 3 9 3C7.07 3 5.5 4.57 5.5 6.5C5.5 8.43 7.07 10 9 10ZM9 5C9.83 5 10.5 5.67 10.5 6.5C10.5 7.33 9.83 8 9 8C8.17 8 7.5 7.33 7.5 6.5C7.5 5.67 8.17 5 9 5ZM16.04 13.81C17.2 14.65 18 15.77 18 17H22V15.25C22 13.23 18.5 12.08 16.04 13.81ZM15 10C16.93 10 18.5 8.43 18.5 6.5C18.5 4.57 16.93 3 15 3C14.46 3 13.96 3.13 13.5 3.35C14.13 4.24 14.5 5.33 14.5 6.5C14.5 7.67 14.13 8.76 13.5 9.65C13.96 9.87 14.46 10 15 10Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="stat-number">500+</h3>
                            <p className="stat-label">Successful Trips</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="stat-number">1000+</h3>
                            <p className="stat-label">Happy Travelers</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Our Best Trips - 3D Flip Cards */}
            <section id="destinations" className="section">
                <div className="container">
                    <div className="section-header-compact">
                        <h2>Our Best Trips</h2>
                        <p>Completed adventures loved by travelers - Hover to explore</p>
                    </div>
                    <div className="flip-cards-grid">
                        {trips
                            .filter(trip => trip.status === 'completed')
                            .map((trip) => (
                                <FlipCard key={trip.id} trip={trip} />
                            ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Trips */}
            <section id="upcoming" className="section bg-off-white">
                <div className="container">
                    <div className="section-header-compact">
                        <h2>Upcoming Trips</h2>
                        <p>New destinations coming soon - Be the first to know</p>
                    </div>
                    <div className="upcoming-trips-grid">
                        {trips
                            .filter(trip => trip.status === 'upcoming')
                            .map((trip) => (
                                <div key={trip.id} className="upcoming-trip-card">
                                    <div className="upcoming-trip-image-container">
                                        <img src={trip.image} alt={trip.title} className="upcoming-trip-image" />
                                        <div className="upcoming-badge">Coming Soon</div>
                                    </div>
                                    <div className="upcoming-trip-content">
                                        <h3>{trip.title}</h3>
                                        <p className="upcoming-tagline">{trip.tagline}</p>
                                        <p className="upcoming-description">{trip.description}</p>
                                        {trip.highlights && trip.highlights.length > 0 && (
                                            <ul className="upcoming-highlights">
                                                {trip.highlights.slice(0, 3).map((highlight, index) => (
                                                    <li key={index}>{highlight}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <a
                                            href={`https://wa.me/918105059223?text=Hi!%20I'm%20interested%20in%20the%20upcoming%20${encodeURIComponent(trip.title)}%20trip.%20Please%20notify%20me%20when%20it's%20available!`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="upcoming-notify-btn"
                                        >
                                            Notify Me
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewsSection />


            <Footer />
        </div>
    );
};

export default Home;
