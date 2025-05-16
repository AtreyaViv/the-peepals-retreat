import React from "react";
import aboutUs from '../assets/hotel/aboutUs.JPG';
import OurValues from "./ourValues";
import "./AboutUs.css";
import PageHeader from "./pageHeader";
import aboutUsHeader from "../assets/hotel/aboutUsMain.JPG";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <PageHeader
        title="About Us"
        backgroundImage={aboutUsHeader}
        breadcrumb={['HOME', 'ABOUT US']}
      />

      {/* About Section */}
      <div className="au-about-content">
        <div className="au-about-text">
          <h2 className="au-about-title">About Hotel</h2>
          <p className="au-about-subtitle">Welcome to The Peepal’s Retreat</p>
          <p className="au-about-description">
            Discover a perfect blend of elegance, comfort, and tranquility at The Peepal’s Retreat, nestled in the peaceful surroundings of Gomti Nagar Extension, Lucknow. Designed to be your home away from home, the hotel offers a serene escape amidst the city's vibrant energy, yet remains close to all major attractions, business hubs, and transport links.
          </p>
          <p className="au-about-description">
            Whether you're here for a relaxing getaway, a business trip, or a grand celebration, The Peepal’s Retreat promises a memorable experience. With beautifully styled rooms, modern amenities, and warm hospitality, every corner of our hotel reflects class and calm.
          </p>
          <p className="au-about-description">
            Take in the views from our rooftop, indulge in flavors at our signature restaurant, or host flawless events in our banquet spaces surrounded by greenery. At The Peepal’s Retreat, every stay is a celebration of peace, luxury, and personalized care.
          </p>
          <p className="au-about-highlight">
            <em>One of the most cozy hotels in the locality. Rooftop restaurant is awesome.</em>
          </p>
          {/* Features */}
          <ul className="au-features-list">
            <li>✅ <strong>Nature-Inspired Serenity</strong></li>
            <li>✅ <strong>Modern Comforts</strong></li>
            <li>✅ <strong>Spacious Banquets & Rooftop Dining</strong></li>
          </ul>
        </div>

        {/* Hotel Image */}
        <div className="au-about-image">
          <img src={aboutUs} alt="Hotel" />
        </div>
      </div>
      <OurValues />
    </div>
  );
};

export default AboutUs;
