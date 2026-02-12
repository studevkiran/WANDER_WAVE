import React from 'react';
import './FlipCard.css';

const FlipCard = ({ trip }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {/* Front Side - Image Focus */}
                <div className="flip-card-front">
                    <img src={trip.image} alt={trip.title} className="flip-card-image" />
                    <div className="flip-card-overlay">
                        <h3 className="flip-card-title">{trip.title}</h3>
                        <p className="flip-card-subtitle">{trip.subtitle}</p>
                        <span className="flip-hint">Hover to explore</span>
                    </div>
                </div>

                {/* Back Side - Trip Details */}
                <div className="flip-card-back">
                    <div className="flip-card-back-content">
                        <h3 className="flip-back-title">{trip.title}</h3>
                        <p className="flip-back-duration">{trip.subtitle}</p>

                        {trip.details && trip.details.length > 0 && (
                            <div className="flip-back-details">
                                <div className="detail-item">
                                    <span className="detail-label">Duration:</span>
                                    <span className="detail-value">
                                        {trip.details.find(d => d.label === "DURATION")?.value || "4N5D"}
                                    </span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Places:</span>
                                    <span className="detail-value">
                                        {trip.details.find(d => d.label === "PLACES COVERED")?.value || trip.title}
                                    </span>
                                </div>
                            </div>
                        )}

                        {trip.itineraryOverview && trip.itineraryOverview.length > 0 && (
                            <div className="flip-back-highlights">
                                <h4>Highlights:</h4>
                                <ul>
                                    {trip.itineraryOverview.slice(0, 3).map((item, index) => (
                                        <li key={index}>{item.desc}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="flip-back-footer">
                            <div className="flip-back-price">
                                <span className="price-label">From</span>
                                <span className="price-value">$999</span>
                                <span className="price-person">/person</span>
                            </div>
                            <a href={`/trip/${trip.id}`} className="flip-back-button">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
