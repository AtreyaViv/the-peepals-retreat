import React from "react";
import MarriageTermsConditions from "./marriageTnC";
import "./MarriagePackage.css";
import PageHeader from "./pageHeader";
import mpHeader from "../assets/banquet/index.jpeg";

const MarriagePackage = () => {
  return (
    <div className="banquets-container">
      <PageHeader
        title="Banquets & Lawns"
        backgroundImage={mpHeader}
        breadcrumb={['HOME', 'BANQUETS & LAWNS']}
      />

      {/* Content Section */}
      <div className="content-container">
        <h2 className="content-title">Banquets & Lawns</h2>
        <p className="content-subtitle">Celebrate your special moments in style.</p>
        <p className="content-description">
          At The Peepal’s Retreat, we offer a beautifully designed indoor banquet hall and a lush green lawn, ideal for both intimate gatherings and grand celebrations. Whether you're planning a wedding, reception, engagement, or a corporate event, our venues provide the perfect setting to match your taste and budget.

          With a capacity to host up to 600 guests, we bring together elegant décor, spacious layouts, and personalized service to make every event truly unforgettable. From traditional charm to modern sophistication, we customize themes, menus, and setups to reflect your vision.

          Delight your guests with sumptuous cuisine, seamless service, and the signature warmth of TPR hospitality. Whether it’s a simple ceremony or a lavish celebration, we ensure that every detail—big or small—is handled with care and excellence.
        </p>
      </div>
      <MarriageTermsConditions />
    </div>
  )
}

export default MarriagePackage;