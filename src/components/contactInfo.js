import React from "react";


const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      {/* Left 65% - Address Details */}
      <div className="contact-details">
        <p>The Peepal’s Retreat, Near STP, 60 feet road,</p>
        <p>Gomti Nagar Extension, Lucknow</p>
        <p>📞 +91-9236113434</p>
        <p>✉ thepeepalsretreat@gmail.com</p>
      </div>

      {/* Right 35% - See Map Button */}
      <div className="see-map">
        <a href="https://maps.app.goo.gl/46oUHS2DGHFnbGRC8?g_st=iw" target="_blank" rel="noopener noreferrer">
          📍<br></br>SEE MAP
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
