import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  const handleLogoClick = () => {
    // Handle clicking on the logo to navigate to the home page
    // You can add your navigation logic here
    console.log('Logo clicked');
  };

  const handleMenuClick = () => {
    // Handle clicking on the options menu
    // You can add your menu opening logic here
    console.log('Menu clicked');
  };

  return (
    <header className="header-container fixed-top bg-dark text-white py-3">
      <Link to="/"  onClick={handleLogoClick} className='link-item'> IndigoLearn</Link>
      
      <div className="link-container">
        <Link to="/whychooseus" className="link-item">WhyChooseUs</Link>
        <Link to="/eligibility" className="link-item">Eligibility</Link>
        <Link to="/learn" className="link-item">Learn</Link>
        <Link to="/placement" className="link-item">Placement</Link>
        <Link to="/startjourney" className="link-item">Start Journey</Link>
        <button className="btn btn-outline-light">Log In/Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
