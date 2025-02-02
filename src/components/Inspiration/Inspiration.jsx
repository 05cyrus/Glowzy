import React from 'react';
import './Inspiration.css';
import Km from '../../assets/km.jpg';
import Mobile from '../../assets/mobile.png';

function Inspiration() {
  return (
    <div className='inspiration-container'>
      {/* Header Section */}
      <div className="insp-header">
        <h1>Unmatched productivity</h1>
        <p>No flights, no more delay.With our sophisticated Machine Learning Algorithms.Korean Beauty tech just a tap away.</p>
      </div>
      
      {/* Features Section */}
      <div className='insp-features'>
        <div className='feature-card'>
          <img src={Km} alt="Keyboard Shortcuts" />
          <h3>Keyboard shortcuts</h3>
          <p>Work efficiently with instant access to common actions.</p>
        </div>
        <div className='feature-card'>
          <img src={Mobile} alt="Team Planner" />
          <h3>Team Planner</h3>
          <p>Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Inspiration;