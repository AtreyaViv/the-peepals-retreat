// components/ImageModal.js
import React from "react";
import "./ImageModal.css";

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <img
        src={src}
        alt="Enlarged View"
        className="image-modal-content"
        onClick={(e) => e.stopPropagation()}
      />
      <button className="image-modal-close" onClick={onClose}>×</button>
    </div>
  );
};

export default ImageModal;
