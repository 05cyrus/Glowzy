import React from 'react';
import Header from './components/Header/Header';
import Report from './components/Report/Report';
import Inspiration from './components/Inspiration/Inspiration';
import Journey from './components/Journey/Journey';
import Pricing from './components/Pricing/Pricing';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="app-container">
      <Header />
      <Report />
    </div>
      <Inspiration />
      <Journey />
      <Pricing />
    </div>
  );
}

export default App;

