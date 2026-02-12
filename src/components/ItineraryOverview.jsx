
import React from 'react';

const defaultItinerary = [
    { day: "DAY 1", desc: "Arrival in Dubai – Marina Cruise Dinner" },
    { day: "DAY 2", desc: "Dubai City Tour + Burj Khalifa (124th/125th Floor)" },
    { day: "DAY 3", desc: "Desert Safari with BBQ Dinner – Royal Vision Camp" },
    { day: "DAY 4", desc: "Abu Dhabi City Tour – BAPS Temple – Grand Mosque – Ferrari World Photo Stop" },
    { day: "DAY 5", desc: "Departure" },
];

const ItineraryOverview = ({ itineraryData = defaultItinerary }) => {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h3 className="section-subtitle">Sketch</h3>
                    <h2 className="section-title">Itinerary</h2>
                </div>

                <div className="sketch-table">
                    <div className="sketch-header">
                        <div className="sketch-col-day">DAYS</div>
                        <div className="sketch-col-desc">ITINERARY</div>
                    </div>
                    {itineraryData.map((item, index) => (
                        <div key={index} className="sketch-row">
                            <div className="sketch-col-day">{item.day}</div>
                            <div className="sketch-col-desc">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItineraryOverview;
