// Import necessary libraries and icons
import React from 'react';
import { FaUser, FaGlobe, FaQuestion } from 'react-icons/fa';
import './Navbar.css';
import logo from './images/png-transparent-tesla-logo-tesla-motors-car-tesla-model-s-tesla-model-3-decal-angle-text-rectangle-thumbnail-removebg-preview.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-container">
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
      </div>
      <div className="icons-container">
        <FaUser className="icon" />
        <FaGlobe className="icon" />
        <FaQuestion className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
