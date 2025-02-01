import React from 'react';
import './Inspiration.css';
import InspirationImg from '../../assets/inspiration.png';

function Inspiration() {
  return (
    <div className='inspiration-container'>
      {/* Left Section */}
      <div className="insp-white">
        <h1>10000+</h1>
        <p className="subtext">Reports generated</p>
        <p className="desc">
          No flights, no more delay.<br />
          With our sophisticated <br />
          Machine Learning Algorithms.<br />
          Korean Beauty tech just a tap away.
        </p>
        <div className="korea-flag">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" alt="South Korea Flag" />
        </div>
      </div>

      {/* Right Section */}
      <div className="insp-black">
        <div className="beauty-machine">
          <img src={InspirationImg} alt="Beauty Machine" />
        </div>
        <p className="satisfaction-text">Satisfaction Rate</p>
      </div>
    </div>
  );
}

export default Inspiration;
