import React, { useState, useRef, lazy, Suspense } from "react";
const ImageModal = lazy(() => import("./imageModal"));

const categories = [
  { name: "All Images", key: "all" },
  { name: "Exterior", key: "exterior" },
  { name: "Reception", key: "reception" },
  { name: "Rooms", key: "rooms" },
  { name: "Halls", key: "halls" },
  { name: "Lawn", key: "lawn" },
];

const galleryImages = [
  { src: "/assets/gallery/exterior1.JPG", category: "exterior" },
  { src: "/assets/gallery/exterior2.JPG", category: "exterior" },
  { src: "/assets/gallery/exterior3.jpeg", category: "exterior" },
  { src: "/assets/gallery/reception1.JPG", category: "reception" },
  { src: "/assets/gallery/reception2.JPG", category: "reception" },
  { src: "/assets/gallery/reception3.JPG", category: "reception" },
  { src: "/assets/gallery/rooms1.jpeg", category: "rooms" },
  { src: "/assets/gallery/rooms2.jpeg", category: "rooms" },
  { src: "/assets/gallery/rooms3.jpeg", category: "rooms" },
  { src: "/assets/gallery/rooms4.jpeg", category: "rooms" },
  { src: "/assets/gallery/rooms5.jpeg", category: "rooms" },
  { src: "/assets/gallery/halls1.jpeg", category: "halls" },
  { src: "/assets/gallery/halls2.JPG", category: "halls" },
  { src: "/assets/gallery/halls3.jpeg", category: "halls" },
  { src: "/assets/gallery/halls4.JPG", category: "halls" },
  { src: "/assets/gallery/lawn1.jpeg", category: "lawn" },
  { src: "/assets/gallery/lawn2.JPG", category: "lawn" },
  { src: "/assets/gallery/lawn3.jpeg", category: "lawn" },
];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalImage, setModalImage] = useState(null);
  const lastTapRef = useRef(0);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleImageClick = (src) => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapRef.current;

    if (timeSinceLastTap < 300) {
      setModalImage(src); // Double-tap or double-click
    }

    lastTapRef.current = now;
  };

  return (
    <div className="photo-gallery">
      {/* Categories */}
      <div className="gallery-categories">
        {categories.map((cat) => (
          <span
            key={cat.key}
            className={selectedCategory === cat.key ? "active" : ""}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.name}
          </span>
        ))}
      </div>

      {/* Images Grid */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="Gallery"
            className="gallery-img"
            loading="lazy"
            onClick={() => handleImageClick(img.src)}
            onDoubleClick={() => setModalImage(img.src)} // desktop fallback
          />
        ))}
      </div>

      {/* Modal Viewer */}
      <Suspense fallback={null}>
        <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
      </Suspense>
    </div>
  );
};

export default PhotoGallery;
