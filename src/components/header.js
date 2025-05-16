import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside nav
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest('.nav-items') && !e.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo1} alt="Hotel Logo" className="site-logo" />
            </Link>

          </div>

          {/* Nav items */}
          <nav className={`nav-items ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/accommodation" onClick={closeMenu}>Accommodation</Link>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            <Link to="/marriage-package" onClick={closeMenu}>Wedding Package</Link>
            <Link to="/book-now" onClick={closeMenu}>Book Now</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </nav>

          {/* Hamburger */}
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Overlay for outside click */}
      {menuOpen && <div className="menu-overlay"></div>}
    </>
  );
};

export default Header;
