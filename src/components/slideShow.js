import React, { useState, useEffect, useMemo } from "react";

const SlideShow = () => {
  const images = useMemo(
    () => [
      { src: require("../assets/hotel/image1.JPG"), text: "Welcome to Luxury" },
      { src: require("../assets/hotel/image2.JPG"), text: "Experience Comfort" },
      { src: require("../assets/hotel/image3.jpeg"), text: "Delight in Every Stay" },
      { src: require("../assets/hotel/image4.JPG"), text: "Relax & Unwind" },
      { src: require("../assets/hotel/image5.jpeg"), text: "Memorable Moments Await" },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState([0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      setLoadedIndexes((prev) =>
        prev.includes(nextIndex) ? prev : [...prev, nextIndex]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full h-[75vh] sm:h-[77vh] overflow-hidden">
      {/* Metallic shine background effect (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-emerald-800 to-lime-900 animate-pulse opacity-10 z-0" />

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: loadedIndexes.includes(index)
              ? `url(${image.src})`
              : "url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white text-[32px] sm:text-[20px] font-bold text-center px-4 drop-shadow-md">
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
