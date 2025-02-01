import React from 'react';
import './Journey.css';
import { FaCrown, FaStar, FaStopwatch } from 'react-icons/fa'; // Importing icons

function Journey() {
  return (
    <div className="journey-container">
      <h1>Transform Your Beauty Journey</h1>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <h2>Celebrity Comparison Analysis</h2>
          <p>Discover which celebrities share your facial features and get inspired by their styling choices.</p>
          <FaCrown className="icon" />
        </div>

        {/* Card 2 */}
        <div className="card">
          <h2>Personalized Beauty Routine</h2>
          <p>Get a detailed 5-7 step skincare routine tailored to your unique skin type and concerns.</p>
          <FaStar className="icon" />
        </div>

        {/* Card 3 */}
        <div className="card">
          <h2>Instant AI Analysis</h2>
          <p>Advanced AI technology analyzes your facial features and skin condition in seconds.</p>
          <FaStopwatch className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Journey;
