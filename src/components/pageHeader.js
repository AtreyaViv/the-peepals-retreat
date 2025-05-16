import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, backgroundImage, breadcrumb = [], mobileOnly = false }) => {
  return (
    <div className={`page-header-wrapper ${mobileOnly ? 'mobile-only' : ''}`}>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="hero-title">{title}</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        {breadcrumb.map((item, index) => (
          <span key={index} className={index === breadcrumb.length - 1 ? 'current-page' : ''}>
            {item}
            {index < breadcrumb.length - 1 && ' > '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
