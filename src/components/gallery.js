import React from "react";
import PhotoGallery from "./photoGallery";
import "./Gallery.css";
import PageHeader from "./pageHeader";
import galleryHeader from "../assets/hotel/frontlook.JPG";

const Gallery = () => {
  return (
    <div className="gallery-container">
      {/* Gallery Header Section */}
      <PageHeader
        title="Gallery"
        backgroundImage={galleryHeader}
        breadcrumb={['Home', 'Gallery']}
      />

      {/* Gallery Description Section */}
      <div className="gallery-description">
        <h2>Checkout Our Gallery</h2>
        <p>Glimpse of Hotel T.P.R</p>
      </div>
      <PhotoGallery />
    </div>
  );
};

export default Gallery;
