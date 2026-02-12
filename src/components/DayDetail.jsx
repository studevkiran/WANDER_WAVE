
import React from 'react';

const DayDetail = ({ day, title, subtitle, details }) => {
    return (
        <div className="day-detail-card container">
            <div className="day-info">
                <span className="day-number">DAY {day}</span>
                <h3 className="day-title">{title}</h3>
                {subtitle && <h4 className="day-subtitle">{subtitle}</h4>}
                <ul className="day-activities">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
            {/* 
              We could add an image here if we had one for each day.
              For now, the CSS has styles for day-detail-card, but we need to ensure the structure matches.
            */}
        </div>
    );
};

export default DayDetail;
