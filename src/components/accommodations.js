import React from "react";
import RoomPhotoGallery from "./roomPhotoGallery";
import RoomBookingTnC from "./roomTnC";
import "./Accommodation.css";
import PageHeader from "./pageHeader";
import accHeader from "../assets/room/accommodationIndex.jpeg";

const Accommodations = () => {
  return (
    <div className="accommodations-container">
      {/* Banner Section */}
      <PageHeader
        title="Rooms & Suite"
        backgroundImage={accHeader}
        breadcrumb={['HOME', 'ROOMS & SUITE']}
      />

      {/* Introduction Section */}
      <div className="intro-section">
        <h2>Executive Rooms</h2>
        <p className="subtext">A space where comfort meets contemporary elegance.</p>
        <p className="description">
          At The Peepal’s Retreat, we offer thoughtfully designed Executive Rooms that blend style with functionality. Featuring modern interiors, ambient drop-down lighting, spacious wardrobes, and large windows that welcome natural light, each room offers a warm and inviting atmosphere.
        </p>
        <p className="description">
          Generously sized at approximately 80–85 square meters, our Executive Rooms provide the perfect balance of space and serenity—crafted to suit both your taste and your budget. Whether you're here for business or leisure, your stay is bound to be restful and memorable.
        </p>
      </div>
      <RoomPhotoGallery />
      <RoomBookingTnC />
    </div>
  );
};

export default Accommodations;