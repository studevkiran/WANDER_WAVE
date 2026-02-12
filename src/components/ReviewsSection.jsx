import React from 'react';
import { reviews } from '../data/reviews';

const ReviewsSection = () => {
    const renderStars = (rating) => {
        return (
            <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                ))}
                <span className="rating-text">{rating.toFixed(1)}</span>
            </div>
        );
    };

    return (
        <section id="reviews" className="section reviews-section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <div className="reviews-header text-center">
                    <h2 className="section-title">Wander Wave Reviews</h2>
                    <p className="reviews-subtitle">
                        Rated 5.0 by happy travelers on Google – real stories, real experiences.
                    </p>
                    <div className="overall-rating">
                        Overall rating: 5.0 / 5.0 ⭐⭐⭐⭐⭐ (Google Reviews)
                    </div>
                </div>

                <div className="reviews-carousel-container">
                    <div className="reviews-carousel">
                        {reviews.map((review) => (
                            <div key={review.id} className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="reviewer-details">
                                            <h4 className="reviewer-name">{review.name}</h4>
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>
                                    <div className="trip-tag">{review.tripType}</div>
                                </div>
                                <p className="review-text">{review.text}</p>
                                <div className="destination-chip">
                                    <img src={review.image} alt={review.destination} className="destination-thumb" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
