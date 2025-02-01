import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h2>Special Offer</h2>
        <p className="price">$2.31</p>
        <p className="subtitle">What You'll Get:</p>
        
        <ul className="benefits">
          <li>Comprehensive facial analysis report</li>
          <li>Personalized skincare routine</li>
          <li>Celebrity face matching</li>
          <li>Ideal haircut recommendations</li>
          <li>Targeted treatment strategies</li>
          <li>Science-backed product recommendations</li>
          <li>Face symmetry analysis</li>
          <li>Custom home remedies</li>
          <li>Professional procedure suggestions</li>
          <li>Lifetime access to your report</li>
        </ul>

        <button className="cta-button">Get Your Personalized Report Now</button>

        <p className="offer-text">Limited Time Offer - Start Your Beauty Journey Today</p>
      </div>
    </div>
  );
}

export default Pricing;
