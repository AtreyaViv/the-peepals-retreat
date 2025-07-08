import React from "react";
import PhotoGallery from "./photoGallery";
import PageHeader from "./pageHeader";
import galleryHeader from "../assets/hotel/frontlook.JPG";

const Gallery = () => {
  return (
    <div className="w-full">
      {/* Gallery Header Section */}
      <PageHeader
        title="Gallery"
        backgroundImage={galleryHeader}
        breadcrumb={["Home", "Gallery"]}
      />

      {/* Gallery Description Section */}
      <div className="bg-[ghostwhite] px-4 sm:px-6 py-10 sm:py-16 text-left">
        <h2 className="text-2xl sm:text-3xl text-[#2A4630] italic">Checkout Our Gallery</h2>
        <p className="text-lg sm:text-xl text-[#2A4630] opacity-80 border-b-2 border-[#D7BC77] inline-block pb-1 mt-1">
          Glimpse of Hotel T.P.R
        </p>
      </div>

      <PhotoGallery />
    </div>
  );
};

export default Gallery;

