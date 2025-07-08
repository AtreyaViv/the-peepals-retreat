import React from "react";
import aboutUs from "../assets/hotel/aboutUs.JPG";
import OurValues from "./ourValues";
import PageHeader from "./pageHeader";
import aboutUsHeader from "../assets/hotel/aboutUsMain.JPG";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      <PageHeader
        title="About Us"
        backgroundImage={aboutUsHeader}
        breadcrumb={["HOME", "ABOUT US"]}
      />

      {/* About Section */}
      <div className="w-[90%] sm:w-[80%] mx-auto my-10 flex flex-wrap justify-between items-start gap-8 text-left">
        <div className="w-full sm:w-[60%]">
          <h2 className="text-2xl sm:text-3xl font-bold italic text-center sm:text-left">About Hotel</h2>
          <p className="text-base sm:text-lg text-gray-500 italic mb-4 border-b-2 border-gray-300 inline-block pb-1 text-center sm:text-left">
            Welcome to The Peepal’s Retreat
          </p>
          <p className="text-sm sm:text-base leading-7 text-gray-700 mb-4 text-justify">
            Discover a perfect blend of elegance, comfort, and tranquility at The Peepal’s Retreat, nestled in the peaceful surroundings of Gomti Nagar Extension, Lucknow. Designed to be your home away from home, the hotel offers a serene escape amidst the city's vibrant energy, yet remains close to all major attractions, business hubs, and transport links.
          </p>
          <p className="text-sm sm:text-base leading-7 text-gray-700 mb-4 text-justify">
            Whether you're here for a relaxing getaway, a business trip, or a grand celebration, The Peepal’s Retreat promises a memorable experience. With beautifully styled rooms, modern amenities, and warm hospitality, every corner of our hotel reflects class and calm.
          </p>
          <p className="text-sm sm:text-base leading-7 text-gray-700 mb-4 text-justify">
            Take in the views from our rooftop, indulge in flavors at our signature restaurant, or host flawless events in our banquet spaces surrounded by greenery. At The Peepal’s Retreat, every stay is a celebration of peace, luxury, and personalized care.
          </p>
          <p className="text-sm sm:text-base italic text-blue-600 mt-3 text-justify">
            One of the most cozy hotels in the locality. Rooftop restaurant is awesome.
          </p>

          <ul className="mt-4 space-y-2 pl-5 text-sm sm:text-base text-gray-700 list-none">
            <li>✅ <strong>Nature-Inspired Serenity</strong></li>
            <li>✅ <strong>Modern Comforts</strong></li>
            <li>✅ <strong>Spacious Banquets & Rooftop Dining</strong></li>
          </ul>
        </div>

        {/* Hotel Image */}
        <div className="w-full sm:w-auto flex justify-center mt-6 sm:mt-0">
          <img
            src={aboutUs}
            alt="Hotel"
            className="w-[90%] max-w-[280px] sm:w-[200px] sm:h-[300px] border-[5px] border-yellow-400 object-cover"
          />
        </div>
      </div>

      <OurValues />
    </div>
  );
};

export default AboutUs;

