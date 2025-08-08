import React from "react";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2A4630] via-[#1E3323] to-[#354D3A] bg-[length:400%_400%] animate-greenGradient text-[#D7BC77] px-4 py-10 lg:py-16 font-sans">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-4">
        {/* Left - Hotel Info */}
        <div className="flex-1 min-w-[250px] text-left">
          <h3 className="text-lg font-bold underline mb-4">THE PEEPAL'S RETREAT</h3>
          <p>NEAR S.T.P, 60 FEET ROAD,</p>
          <p>GOMTI NAGAR EXTENSION,</p>
          <p>LUCKNOW-226010</p>
          <p className="text-sm mt-4">© THEPEEPALSRETREAT.COM</p>
        </div>

        {/* Middle - Contact Info */}
        <div className="flex-1 min-w-[250px] text-left">
          <h3 className="text-lg font-bold underline mb-4">CONTACT</h3>
          <p><strong>Booking:</strong> +91-7388076677</p>
          <p><strong>Reception:</strong> <span className="font-bold"> +91-7388076677</span></p>
          <p><strong>Office:</strong> +91-9236113434</p>
          <p><strong>Reservations:</strong></p>
          <p className="font-semibold">FOM@THEPEEPALSRETREAT.COM</p>
          <p className="font-semibold">SALESMANAGER@THEPEEPALSRETREAT.COM</p>
        </div>

        {/* Right - Newsletter */}
        <div className="flex-1 min-w-[250px] text-left">
          <h3 className="text-lg font-bold underline mb-4">NEWSLETTER</h3>
          <p className="text-sm font-medium mb-4">
            SIGN UP FOR OUR NEWSLETTER, AND WE'LL KEEP YOU UPDATED ON ALL EVENTS AT THE PEEPAL'S RETREAT!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-2 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded text-black text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#D7BC77] text-white px-4 py-2 rounded hover:bg-[#fbb91498] text-sm font-semibold"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex justify-center gap-6">
          <img
            src={facebook}
            alt="Facebook"
            className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <img
            src={instagram}
            alt="Instagram"
            className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
