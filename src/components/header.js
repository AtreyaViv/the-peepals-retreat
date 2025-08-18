import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hideOffset, setHideOffset] = useState(0); // pixels to translate up when hiding

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const lastYRef = useRef(window.scrollY);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  // Measure how far we need to move to fully hide header + overhanging logo
  const measureOffsets = () => {
    const headerH = headerRef.current?.offsetHeight || 0;
    const logoH = logoRef.current?.offsetHeight || 0;
    // Logo is anchored to header top; portion inside header is headerH, overhang is (logoH - headerH)
    // To hide everything, move by headerH + max(overhang, 0)
    const total = headerH + Math.max(logoH - headerH, 0);
    setHideOffset(total);
  };

  // Scroll direction detection
  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      const prev = lastYRef.current;
      if (curr > prev + 4) setIsHidden(true);         // scrolling down
      else if (curr < prev - 4) setIsHidden(false);   // scrolling up
      lastYRef.current = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure on mount and when resized (logo/header sizes can change with breakpoints)
  useEffect(() => {
    measureOffsets();
    const ro = new ResizeObserver(measureOffsets);
    if (headerRef.current) ro.observe(headerRef.current);
    if (logoRef.current) ro.observe(logoRef.current);
    window.addEventListener("resize", measureOffsets);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measureOffsets);
    };
  }, []);

  // Close mobile menu when clicking outside
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* WRAPPER we translate to hide *everything* (header + overhanging logo) */}
      <div
        className="fixed top-0 left-0 w-full z-[1002] will-change-transform transition-transform duration-300 ease-out"
        style={{ transform: isHidden ? `translateY(-${hideOffset}px)` : "translateY(0)" }}
      >
        {/* HEADER BAR */}
        <header ref={headerRef} className="relative w-full bg-[#D7BC77] shadow-md">
          {/* Height of the actual bar; tweak per breakpoint */}
          <div className="h-[52px] sm:h-[56px]">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Safe left padding so center nav doesn't collide with the overhanging logo */}
              <div className="relative flex items-center justify-center h-[52px] sm:h-[56px] pl-[96px] sm:pl-[120px] md:pl-[150px]">
                {/* Overhanging LOGO (absolute inside header, anchored to top) */}
                <div
                  className="absolute left-4 sm:left-6 md:left-8 top-0 z-10"
                  ref={logoRef}
                >
                  <Link to="/" onClick={closeMenu} aria-label="Go to home">
                    {/* scale down for mobile to avoid overlap */}
                    <img
                      src={logo}
                      alt="Hotel Logo"
                      className="h-[88px] sm:h-[110px] md:h-[130px] lg:h-[140px] w-auto object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
                    />
                  </Link>
                </div>

                {/* Desktop NAV */}
                <nav className="hidden lg:flex gap-8 text-[15px] font-bold text-[#2A4630] uppercase">
                  <Link to="/" onClick={closeMenu}>Home</Link>
                  <Link to="/about" onClick={closeMenu}>About</Link>
                  <Link to="/services" onClick={closeMenu}>Services</Link>
                  <Link to="/accommodation" onClick={closeMenu}>Accommodation</Link>
                  <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                  <Link to="/marriage-package" onClick={closeMenu}>Wedding Package</Link>
                  <Link to="/book-now" onClick={closeMenu}>Book Now</Link>
                  <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </nav>

                {/* Hamburger (Mobile) */}
                <button
                  ref={hamburgerRef}
                  onClick={toggleMenu}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 lg:hidden flex flex-col justify-between w-[26px] h-[20px]"
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                >
                  <span className={`bg-[#2A4630] h-[3px] rounded transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                  <span className={`bg-[#2A4630] h-[3px] rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
                  <span className={`bg-[#2A4630] h-[3px] rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-green-800/95 text-white z-[1001] pt-[110px] px-6 flex flex-col gap-6 lg:hidden"
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

      {/* Click-through overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black/0 z-[1000]" onClick={closeMenu} />}

      {/* Optional spacer so content doesn’t sit under the header on first render */}
      <div className="h-[80px] sm:h-[96px] lg:h-[96px]" />
    </>
  );
};

export default Header;
