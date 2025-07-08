import React, { useState, useRef, lazy, Suspense } from "react";
const ImageModal = lazy(() => import("./imageModal"));

const images = [
  "/assets/room/image1.jpeg",
  "/assets/room/image2.JPG",
  "/assets/room/image3.jpeg",
  "/assets/room/image4.jpeg",
  "/assets/room/image5.jpeg",
  "/assets/room/image6.jpeg",
  "/assets/room/image7.jpeg",
  "/assets/room/image8.jpeg",
  "/assets/room/image9.jpeg",
  "/assets/room/image10.jpeg",
  "/assets/room/image11.jpeg",
  "/assets/room/image12.jpeg",
  "/assets/room/image13.jpeg",
  "/assets/room/image14.jpeg",
];

const RoomPhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewImage, setViewImage] = useState(null);
  const lastTapRef = useRef(0);

  const visibleImages = images.slice(0, 7);
  const remainingImages = images.length - 7;

  const handleImageClick = (src) => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      setViewImage(src);
    }
    lastTapRef.current = now;
  };

  return (
    <div className="flex flex-col gap-3 max-w-[900px] mx-auto px-4 sm:px-0 my-8">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <img
          src={images[0]}
          alt="Main Hotel"
          className="w-full sm:w-[65%] h-[220px] sm:h-[300px] object-cover rounded-md"
          onClick={() => handleImageClick(images[0])}
          onDoubleClick={() => setViewImage(images[0])}
        />
        <div className="flex sm:flex-col gap-3 w-full sm:w-[35%]">
          {[images[1], images[2]].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Room ${i + 1}`}
              className="w-[calc(50%-6px)] sm:w-full h-[120px] sm:h-[145px] object-cover rounded-md"
              onClick={() => handleImageClick(img)}
              onDoubleClick={() => setViewImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Thumbnails */}
      <div className="flex flex-wrap justify-between gap-2">
        {visibleImages.slice(3, 6).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 3}`}
            className="w-[48%] sm:w-[23%] h-[90px] sm:h-[100px] object-cover rounded-md"
            onClick={() => handleImageClick(src)}
            onDoubleClick={() => setViewImage(src)}
          />
        ))}

        {/* "+X more" Thumbnail */}
        {remainingImages > 0 && (
          <div
            className="relative w-[48%] sm:w-[23%] h-[90px] sm:h-[100px] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={visibleImages[6]}
              alt="More Photos"
              className="w-full h-full object-cover rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick(visibleImages[6]);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                setViewImage(visibleImages[6]);
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center font-bold text-sm sm:text-lg rounded-md">
              +{remainingImages} photos
            </div>
          </div>
        )}
      </div>

      {/* Modal for All Images */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg p-4 sm:p-6 w-full max-w-4xl max-h-[80%] overflow-y-auto">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded text-sm sm:text-base"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Modal ${index}`}
                  loading="lazy"
                  className="w-full h-[100px] sm:h-[120px] object-cover rounded-md"
                  onClick={() => handleImageClick(src)}
                  onDoubleClick={() => setViewImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox View */}
      <Suspense fallback={null}>
        <ImageModal src={viewImage} onClose={() => setViewImage(null)} />
      </Suspense>
    </div>
  );
};

export default RoomPhotoGallery;
