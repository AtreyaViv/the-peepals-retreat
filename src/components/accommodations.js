import React from "react";
import RoomPhotoGallery from "./roomPhotoGallery";
import RoomBookingTnC from "./roomTnC";
import PageHeader from "./pageHeader";
import accHeader from "../assets/room/accommodationIndex.jpeg";

const Accommodations = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-fit">
      {/* Banner Section */}
      <PageHeader
        title="Rooms & Suite"
        backgroundImage={accHeader}
        breadcrumb={["HOME", "ROOMS & SUITE"]}
      />

      {/* Introduction Section */}
      <div className="max-w-[800px] mx-auto px-4 text-left mt-8">
        <h2 className="text-2xl font-bold mb-2">Executive Rooms</h2>
        <div className="w-[60px] h-[4px] bg-[#D7BC77] mx-auto my-2" />

        <p className="italic text-gray-500 mb-4">
          A space where comfort meets contemporary elegance.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-7 mb-4">
          At The Peepal’s Retreat, we offer thoughtfully designed Executive Rooms
          that blend style with functionality. Featuring modern interiors, ambient
          drop-down lighting, spacious wardrobes, and large windows that welcome
          natural light, each room offers a warm and inviting atmosphere.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-7 mb-4">
          Generously sized at approximately 80–85 square meters, our Executive Rooms
          provide the perfect balance of space and serenity—crafted to suit both your
          taste and your budget. Whether you're here for business or leisure, your
          stay is bound to be restful and memorable.
        </p>
      </div>

      <RoomPhotoGallery />
      <RoomBookingTnC />
    </div>
  );
};

export default Accommodations;
