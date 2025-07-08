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
    if (now - lastTapRef.current < 300) {
      setModalImage(src);
    }
    lastTapRef.current = now;
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto text-center px-4 pb-10">
      {/* Categories */}
      <div className="flex justify-start sm:justify-center overflow-x-auto gap-4 mb-6 font-bold text-sm sm:text-base whitespace-nowrap">
        {categories.map((cat) => (
          <span
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`cursor-pointer px-3 py-1 border-b-2 transition-all duration-300 ${
              selectedCategory === cat.key
                ? "text-[#398f4c] border-[#398f4c]"
                : "border-transparent text-gray-700"
            }`}
          >
            {cat.name}
          </span>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="Gallery"
            loading="lazy"
            className="w-full h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleImageClick(img.src)}
            onDoubleClick={() => setModalImage(img.src)}
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
