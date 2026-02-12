
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trips } from '../data/trips';
import Hero from './Hero';
import QuickDetails from './QuickDetails';
import ItineraryOverview from './ItineraryOverview';
import DayDetail from './DayDetail';

const TripPage = () => {
    const { id } = useParams();
    const trip = trips.find(t => t.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!trip) {
        return (
            <div className="container text-center" style={{ padding: '100px 0' }}>
                <h2>Trip not found</h2>
                <Link to="/" className="btn-primary">Return Home</Link>
            </div>
        );
    }

    // Helper to render Hero with dynamic props if we refactor Hero later
    // For now, we might need to adjust Hero to accept props or just mock it here
    // But wait, Hero.jsx is hardcoded for Dubai currently. 
    // Let's refactor Hero.jsx to be dynamic first, or pass props to it.

    return (
        <div className="trip-page">
            <Hero
                title={trip.title}
                subtitle={trip.subtitle}
                tripDuration={trip.details.find(d => d.label === 'DURATION')?.value}
                bgImage={trip.image}
            />

            <QuickDetails details={trip.details} />

            <ItineraryOverview itineraryData={trip.itineraryOverview} />

            <section className="section">
                <div className="container text-center mb-5">
                    <h3 className="section-subtitle">Detailed</h3>
                    <h2 className="section-title">Day-wise Itinerary</h2>
                </div>

                <div className="days-container">
                    {trip.dayWise.map((day) => (
                        <DayDetail
                            key={day.day}
                            {...day}
                        />
                    ))}
                </div>
            </section>

            <div className="container text-center mb-5">
                <a href={`https://wa.me/918105059223?text=I am interested in the ${trip.title} trip`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', margin: '20px' }}>Book via WhatsApp</a>
                <br />
                <Link to="/" className="back-link">← Back to All Trips</Link>
            </div>
        </div>
    );
};

export default TripPage;
