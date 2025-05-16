import React from "react";
import "./Services.css";
import PageHeader from "./pageHeader";
import amenitiesHeader from "../assets/reception & lobby/serviceIndex.JPG";
import Amenities from "./amenities";

const Services = () => {
  return (
    <div className="s-amenities-container">
      {/* Hero Section */}
      <PageHeader
        title="Hotel Amenities"
        backgroundImage={amenitiesHeader}
        breadcrumb={['HOME', 'HOTEL AMENITIES']}
      />

      {/* Content Section */}
      <div className="s-content-container">
        <h2 className="s-content-title">Hotel amenities</h2>
        <p className="s-content-subtitle">T.P.R amenities</p>
        <p className="s-content-description">
          At The Peepal’s Retreat, we offer a thoughtfully curated range of amenities that reflect the standards of a premium stay. Designed with your comfort, class, luxury, and peace of mind in mind, every feature is in place to ensure a truly fulfilling and relaxing experience.

          From elegant interiors to modern conveniences, we’ve taken care of every detail—so you can simply unwind and enjoy your stay.
        </p>
        <Amenities />
      </div>
    </div>
  );
};

export default Services;
