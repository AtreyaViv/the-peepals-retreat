import React from "react";
import MarriageTermsConditions from "./marriageTnC";
import PageHeader from "./pageHeader";
import mpHeader from "../assets/banquet/index.jpeg";

const MarriagePackage = () => {
  return (
    <div className="font-sans text-gray-800">
      <PageHeader
        title="Banquets & Lawns"
        backgroundImage={mpHeader}
        breadcrumb={["HOME", "BANQUETS & LAWNS"]}
      />

      {/* Content Section */}
      <div className="w-[90%] sm:w-[80%] mx-auto my-10 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold italic mb-2">Banquets & Lawns</h2>
        <p className="text-lg text-gray-500 italic border-b-2 border-gray-300 inline-block pb-1 mb-4">
          Celebrate your special moments in style.
        </p>
        <p className="text-sm sm:text-base leading-7 text-gray-700">
          At The Peepal’s Retreat, we offer a beautifully designed indoor banquet hall and a lush green lawn, ideal for both intimate gatherings and grand celebrations. Whether you're planning a wedding, reception, engagement, or a corporate event, our venues provide the perfect setting to match your taste and budget.
          <br /><br />
          With a capacity to host up to 600 guests, we bring together elegant décor, spacious layouts, and personalized service to make every event truly unforgettable. From traditional charm to modern sophistication, we customize themes, menus, and setups to reflect your vision.
          <br /><br />
          Delight your guests with sumptuous cuisine, seamless service, and the signature warmth of TPR hospitality. Whether it’s a simple ceremony or a lavish celebration, we ensure that every detail—big or small—is handled with care and excellence.
        </p>
      </div>

      <MarriageTermsConditions />
    </div>
  );
};

export default MarriagePackage;
