
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    Wander Wave
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="nav-link">Home</a>
                    <a href="/#destinations" className="nav-link">Destinations</a>
                    <a href="/#upcoming" className="nav-link">Upcoming Trips</a>
                    <a href="/#reviews" className="nav-link">Reviews</a>
                    <a href="#footer" className="nav-link">Contact</a>
                    <a href="https://wa.me/918105059223?text=Hi!%20I%20want%20to%20book%20a%20trip" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Book now</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ display: 'none' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {mobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>

            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="mobile-nav-link">Home</a>
                    <a href="/#destinations" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
                    <a href="/#upcoming" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Upcoming Trips</a>
                    <a href="/#reviews" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
                    <a href="#footer" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <a href="https://wa.me/918105059223?text=Hi!%20I%20want%20to%20book%20a%20trip" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}>Book now</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
