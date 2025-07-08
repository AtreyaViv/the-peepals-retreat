import React from 'react';
import { Link } from 'react-router-dom';
import banquetIndex from '../assets/banquet/banquetIndex.jpeg';

const BanquetLawn = () => {
  return (
    <div className="flex flex-wrap items-center gap-5 p-5 bg-[whitesmoke] rounded-lg border-[3px] border-[#2A4630] shadow-md">
      <div className="flex-1 min-w-[250px] text-[#2A4630]">
        <h2 className="font-[manhattan] text-[38px]">BANQUET & LAWN</h2>
        <p className="text-[18px] my-2">Perfect venue for weddings, corporate events, and celebrations.</p>
        <Link
          to="/marriage-package"
          className="inline-block px-4 py-2 bg-[#c9a458] text-white rounded font-bold hover:bg-[#b28e36]"
        >
          Know More
        </Link>
      </div>
      <div className="w-full max-w-[350px]">
        <img
          src={banquetIndex}
          alt="Banquet Hall"
          className="w-full h-auto rounded object-cover"
        />
      </div>
    </div>
  );
};

export default BanquetLawn;