import React from 'react';
import './Amenities.css';
import logo1 from '../assets/logo11.png'; // Use your actual logo path

const amenitiesData = [
    { title: "Comfortable Bedding", desc: "Spacious rooms with king or twin-size beds for a restful sleep." },
    { title: "Meeting Space", desc: "Professional conference room facilities available for business use." },
    { title: "Event Hall", desc: "Well-equipped banquet area ideal for weddings, parties, and corporate events." },
    { title: "Garden Area", desc: "Manicured green space perfect for relaxation or small gatherings." },
    { title: "Health Club", desc: "Fully equipped gym to help guests stay active during their stay." },
    { title: "Corporate Hub", desc: "Dedicated workspace and services to support business needs on the go." },
    { title: "Fast Wi-Fi", desc: "Complimentary high-speed internet access across the entire property." },
    { title: "Secure Parking", desc: "Spacious and safe parking area available for all our guests." },
  ];
  

const Amenities = () => {
  return (
    <section className="amenities-section">
      <div className="amenities-grid">
        {amenitiesData.map((item, index) => (
          <div className="amenity-card" key={index}>
            <img src={logo1} alt="icon" className="amenity-icon" />
            <h3 className="amenity-title">{item.title}</h3>
            <p className="amenity-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
