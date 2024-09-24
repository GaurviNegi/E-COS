import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>E-COS</span>
        <img src="/logo.png"/>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/create-contact">Create Contacts</Link></li>
        <li><Link to="/contact-list">Contact List</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
