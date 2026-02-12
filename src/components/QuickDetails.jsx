
import React from 'react';

const defaultDetails = [
    { label: "ARRIVAL/DEPARTURE", value: "DUBAI / DUBAI" },
    { label: "DURATION", value: "4N5D" },
    { label: "TRIP TYPE", value: "GROUP" },
    { label: "TRANSPORTATION", value: "INCLUDED" },
    { label: "ACCOMMODATION", value: "3 STAR HOTELS" },
    { label: "MEALS", value: "BREAKFAST" },
    { label: "PLACES COVERED", value: "DUBAI - ABU DHABI" },
];

const QuickDetails = ({ details = defaultDetails }) => {
    return (
        <section className="section bg-blue">
            <div className="container text-center">
                <div className="section-header">
                    <h3 className="section-subtitle">Quick</h3>
                    <h2 className="section-title">Details</h2>
                </div>
                <div className="details-grid">
                    {details.map((item, index) => (
                        <div key={index} className="detail-item">
                            <span className="detail-label">{item.label}</span>
                            <span className="detail-value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickDetails;
