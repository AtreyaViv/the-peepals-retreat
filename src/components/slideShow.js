import React, { useState, useEffect, useMemo } from "react";
import "./SlideShow.css";

// Image data as memoized array
const SlideShow = () => {
  const images = useMemo(() => [
    { src: require('../assets/hotel/image1.JPG'), text: "Welcome to Luxury" },
    { src: require('../assets/hotel/image2.JPG'), text: "Experience Comfort" },
    { src: require('../assets/hotel/image3.jpeg'), text: "Delight in Every Stay" },
    { src: require('../assets/hotel/image4.JPG'), text: "Relax & Unwind" },
    { src: require('../assets/hotel/image5.jpeg'), text: "Memorable Moments Await" }
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState([0]); // Preload the first

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
    <div className="home-container-1">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: loadedIndexes.includes(index)
                ? `url(${image.src})`
                : "url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')", // transparent fallback
            }}
          >
            <div className="slide-text">{image.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;