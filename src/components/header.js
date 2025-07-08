import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        mobileMenuRef.current &&
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[50px] bg-[#D7BC77] shadow-md z-[1002] flex items-center">
        <div className="w-full relative flex justify-center">
          {/* Logo */}
          <div className="absolute left-[60px] top-[0px] h-[120px] z-[2]">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Hotel Logo" className="h-full object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex ml-[200px] gap-[32.75px] text-[16px] font-bold text-[#2A4630] uppercase font-[mongolian_baitiregular]">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/accommodation" onClick={closeMenu}>Accommodation</Link>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            <Link to="/marriage-package" onClick={closeMenu}>Wedding Package</Link>
            <Link to="/book-now" onClick={closeMenu}>Book Now</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </nav>

          {/* Hamburger Icon */}
          <div
            ref={hamburgerRef}
            className={`absolute right-4 top-[0px] z-[1001] lg:hidden flex flex-col justify-between w-[25px] h-[20px] cursor-pointer`}
            onClick={toggleMenu}
          >
            <span className={`bg-[#2A4630] h-[3px] rounded transition-all ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`bg-[#2A4630] h-[3px] rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`bg-[#2A4630] h-[3px] rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-screen w-1/2 bg-green-700/95 text-white z-[1000] pt-[100px] pl-[30px] flex flex-col gap-6 transition-all duration-300 ease-in-out lg:hidden"
        >
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/accommodation" onClick={closeMenu}>Accommodation</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/marriage-package" onClick={closeMenu}>Wedding Package</Link>
          <Link to="/book-now" onClick={closeMenu}>Book Now</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      )}

      {/* Transparent overlay (optional for styling) */}
      {menuOpen && <div className="fixed inset-0 bg-transparent z-[999]" />}
    </>
  );
};

export default Header;
