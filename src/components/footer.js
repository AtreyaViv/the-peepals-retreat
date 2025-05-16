import React from "react";
import facebook from '../assets/facebook.jpg';
import instagram from '../assets/instagram.jpg';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Hotel Info */}
        <div className="footer-section">
          <h3 className="footer-title">THE PEEPAL'S RETREAT</h3>
          <p>NEAR S.T.P., 60 FEET ROAD,</p>
          <p>GOMTI NAGAR EXTENTION,</p>
          <p> LUCKNOW-226010</p>
          <p className="copyright">© THEPEEPALSRETREAT.COM</p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">CONTACT</h3>
          <p><strong>Mobile:</strong> +91-923613434</p>
          <p><strong>Phone:</strong> <span className="highlight">0522-******</span></p>
          <p><strong>Reservations:</strong></p>
          <p className="email">FOM@THEPEEPALSRETREAT.COM</p>
          <p className="email">SALESMANAGER@THEPEEPALSRETREAT.COM</p>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">NEWSLETTER</h3>
          <p className="newsletter-text">
            SIGN UP FOR OUR NEWSLETTER, AND WE'LL KEEP YOU UPDATED ON ALL EVENTS AT THE PEEPAL'S RETREAT!
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="send-btn">SEND</button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" className="social-icon" />
            <img src={instagram} alt="Instagram" className="social-icon" />
          </div>
        </div>
    </footer>
  );
};

export default Footer;