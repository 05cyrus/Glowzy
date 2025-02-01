import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1>Glowzy</h1>
        <h4>Your AI-Powered Aesthetician</h4>
        <button className="button">
          Get yourself rated for free
        </button>

      </div>
    </header>
  );
}

export default Header;
