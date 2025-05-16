import React from 'react';
import { Link } from 'react-router-dom';
import banuetIndex from '../assets/banquet/banquetIndex.jpeg'

const BanquetLawn = () => {
    return (
      <div className="banquet-lawn">
        <div className="banquet-info">
          <h2>BANQUET & LAWN</h2>
          <p>Perfect venue for weddings, corporate events, and celebrations.</p>
          <Link to="/marriage-package" className="btn">Know More</Link>
        </div>
        <div className="banquet-images">
          <img src={banuetIndex} alt="Banquet Hall" />
        </div>
      </div>
    );
  };

  export default BanquetLawn;