import React, { useState } from "react";
import aboutUsBelow1 from "../assets/hotel/aboutUsBelow1.jpeg";
import aboutUsBelow2 from "../assets/hotel/aboutUsBelow2.jpeg";
import aboutUsBelow3 from "../assets/hotel/aboutUsBelow3.JPG";
import "./OurValues.css";

const OurValues = () => {
  const [openSection, setOpenSection] = useState("mission");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="values-container">
      {/* Image Gallery */}
      <div className="values-images">
        <img src={aboutUsBelow1} alt="Hotel Exterior" className="image-large" />
        <div className="image-small-group">
          <img src={aboutUsBelow2} alt="Banquet Hall" className="image-small" />
          <img src={aboutUsBelow3} alt="Restaurant" className="image-small" />
        </div>
      </div>

      {/* Values Section */}
      <div className="values-content">
        <h2 className="values-title">Our Values</h2>
        <p className="values-subtitle">Our values are our priorities</p>

        {/* Accordion Section */}
        <div className="accordion">
          {/* What DAYAL Stands For */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleSection("dayal")}>
              What T.P.R. stands for?
              <span>{openSection === "dayal" ? "▲" : "▼"}</span>
            </button>
            {openSection === "dayal" && (
              <div className="accordion-content">
                <p>T – Tranquility, Trust, Timeless</p>
                <p>P – Peaceful, Passionate, Personalized</p>
                <p>R – Relaxation, Reliability, Radiance</p>
              </div>
            )}
          </div>

          {/* Mission */}
          <div className="accordion-item">
            <button className="accordion-header active" onClick={() => toggleSection("mission")}>
              Our Mission
              <span>{openSection === "mission" ? "▲" : "▼"}</span>
            </button>
            {openSection === "mission" && (
              <div className="accordion-content">
                <p>
                  At The Peepal’s Retreat, our mission is to create a true 'home away from home'—where every guest feels genuinely cared for and every stay becomes a cherished memory.
                  With unwavering dedication, we strive to make the world a more welcoming, compassionate, and hospitable place—one guest, one moment, one stay at a time.
                </p>
              </div>
            )}
          </div>

          {/* Vision */}
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleSection("vision")}>
              Our Vision
              <span>{openSection === "vision" ? "▲" : "▼"}</span>
            </button>
            {openSection === "vision" && (
              <div className="accordion-content">
                <p>
                  To dedicate ourselves to making hospitality a truly divine and fulfilling experience for every guest. We aim to extend the spirit and values of hospitality beyond our doors, influencing all aspects of life and society to create a kinder, better world for everyone.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;