import React from "react";

const ContactInfo = () => {
  return (
    <div
      className="w-[90%] max-w-[600px] lg:max-w-none mx-auto mt-8 
      lg:w-[38%] lg:mx-0 
      lg:absolute lg:top-[65%] lg:left-[43.78%] 
      lg:-translate-x-1/2 lg:-translate-y-1/2 
      shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
      rounded-lg overflow-hidden z-10 
      flex flex-col lg:flex-row"
    >
      {/* Address Section */}
      <div className="w-full lg:w-[65%] text-center lg:text-left text-sm px-4 py-4 text-black bg-gradient-to-r from-[#D7BC77] via-[#C0A763] to-[#E8D3A1] bg-[length:400%_400%] animate-none lg:animate-goldGradient">
        <p>The Peepal’s Retreat, Near STP, 60 feet road,</p>
        <p>Gomti Nagar Extension, Lucknow</p>
        <p>📞 +91-7388076677</p>
        <p>✉ thepeepalsretreat@gmail.com</p>
      </div>

      {/* See Map Button */}
      <div className="w-full lg:w-[35%] flex items-center justify-center py-4 bg-gradient-to-r from-[#2A4630] via-[#1E3323] to-[#354D3A] bg-[length:400%_400%] animate-none lg:animate-greenGradient hover:shadow-[0_0_10px_rgba(215,188,119,0.8)] transition-shadow">
        <a
          href="https://maps.app.goo.gl/46oUHS2DGHFnbGRC8?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7BC77] text-lg font-medium hover:text-white hover:font-bold text-center transition"
        >
          📍<br />SEE MAP
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
