
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" style={{ backgroundColor: '#021029', color: '#fff', padding: '60px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '20px' }}>Wander Wave</h3>
                        <p style={{ color: '#889eb3', marginBottom: '20px' }}>Your go-to travel buddy for amazing group travel adventures. Experience the world with passion, adventure, and unforgettable memories since 2014.</p>

                        {/* Contact Info */}
                        <div style={{ color: '#889eb3', marginTop: '20px' }}>
                            <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <a href="mailto:info@wanderwave.com" style={{ color: '#889eb3', textDecoration: 'none' }}>info@wanderwave.com</a>
                            </p>
                            <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <a href="https://wa.me/918105059223" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', textDecoration: 'none' }}>+91 810 505 9223</a>
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            <a href="https://instagram.com/wanderwave" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', transition: 'color 0.3s' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com/wanderwave" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', transition: 'color 0.3s' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/wanderwave" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', transition: 'color 0.3s' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/918105059223" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', transition: 'color 0.3s' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '15px' }}>Quick Links</h4>
                        <ul style={{ color: '#889eb3', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                            <li><a href="/" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a></li>
                            <li><a href="/#destinations" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Destinations</a></li>
                            <li><a href="/#upcoming" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Upcoming Trips</a></li>
                            <li><a href="https://wa.me/918105059223?text=Hi!%20I%20want%20to%20know%20more%20about%20Wander%20Wave" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '15px' }}>Support</h4>
                        <ul style={{ color: '#889eb3', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                            <li><a href="https://wa.me/918105059223?text=Hi!%20I%20need%20help" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Help Center</a></li>
                            <li><a href="#" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Terms of Service</a></li>
                            <li><a href="#" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy Policy</a></li>
                            <li><a href="https://wa.me/918105059223" target="_blank" rel="noopener noreferrer" style={{ color: '#889eb3', textDecoration: 'none', transition: 'color 0.3s' }}>WhatsApp Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '15px' }}>Newsletter</h4>
                        <p style={{ color: '#889eb3', marginBottom: '10px' }}>Subscribe for the latest travel deals.</p>
                        <div style={{ display: 'flex' }}>
                            <input type="email" placeholder="Email address" style={{ padding: '10px', borderRadius: '4px 0 0 4px', border: 'none', width: '100%' }} />
                            <button style={{ backgroundColor: '#00A8E8', border: 'none', padding: '0 20px', borderRadius: '0 4px 4px 0', color: 'white', cursor: 'pointer', fontWeight: '600' }}>Go</button>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #1c2e4a', marginTop: '60px', paddingTop: '20px', textAlign: 'center', color: '#546b82' }}>
                    <p>© 2026 Wander Wave. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
