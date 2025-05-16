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
      setViewImage(src); // double-tap/double-click
    }
    lastTapRef.current = now;
  };

  return (
    <div className="room-photo-gallery">
      {/* Main Section */}
      <div className="room-photo-gallery__main">
        <img
          src={images[0]}
          alt="Main Hotel"
          className="main-image"
          onClick={() => handleImageClick(images[0])}
          onDoubleClick={() => setViewImage(images[0])}
        />
        <div className="room-photo-gallery__side">
          {[images[1], images[2]].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Room ${i + 1}`}
              className="side-image"
              onClick={() => handleImageClick(img)}
              onDoubleClick={() => setViewImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="room-photo-gallery__bottom">
        {visibleImages.slice(3, 6).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 3}`}
            className="bottom-image"
            onClick={() => handleImageClick(src)}
            onDoubleClick={() => setViewImage(src)}
          />
        ))}

        {/* Last image with "+x" */}
        {remainingImages > 0 && (
          <div
            className="room-photo-gallery__more"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={visibleImages[6]}
              alt="More Photos"
              className="bottom-image"
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick(visibleImages[6]);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                setViewImage(visibleImages[6]);
              }}
            />
            <div className="overlay">+{remainingImages} photos</div>
          </div>
        )}
      </div>

      {/* All Images Modal */}
      {isModalOpen && (
        <div className="photo-modal">
          <div className="photo-modal__content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✖</button>
            <div className="photo-grid">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Modal ${index}`}
                  loading="lazy"
                  className="modal-image"
                  onClick={() => handleImageClick(src)}
                  onDoubleClick={() => setViewImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Single Image Lightbox */}
      <Suspense fallback={null}>
        <ImageModal src={viewImage} onClose={() => setViewImage(null)} />
      </Suspense>
    </div>
  );
};

export default RoomPhotoGallery;
