import React from "react";
import "./Homepage.css";
import Footer from './Footer'
import "./Footer.css"
const Homepage = () => {
  return (
    <>
    <div className="homepage-container">
      {/* Left section with image */}
      <div className="image-section">
        <img src="/website-9020425_1280.png" alt="Left" className="left-image" />
      </div>

      {/* Right section with links */}
      <div className="links-section">
        <a href="/register" className="circular-link">
          Register
        </a>
        <a href="/create-contact" className="circular-link">
          Create Contact
        </a>
        <a href="/contact-list" className="circular-link">
          View Contacts
        </a>
      </div>


     
    </div>
    <Footer/>
    </>
  );
};

export default Homepage;