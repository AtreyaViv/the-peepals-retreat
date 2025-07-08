import React from 'react';
import { Link } from 'react-router-dom';
import Room from '../assets/Rooms.png';
import Gallery from '../assets/Gallery.png';
import Amenities from '../assets/Amenities.PNG';
import BanquetLawn from '../assets/BanquetLawn.png';

const HotelInfoSection = () => {
  return (
    <div className="flex justify-center flex-wrap bg-gradient-to-br from-[#2A4630] to-[#1E3323] text-[#D7BC77] py-[50px] px-5 font-serif animate-[greenGradient_5s_ease_infinite]">
      {/* Title and Description Section */}
      <div className="max-w-[900px] text-center w-full">
        <h2 className="text-[30px] font-bold text-[#F3F3F3] mb-2">
          Welcome to The Peepal's Retreat Hotel & Banquet
        </h2>
        <p className="text-[16px] text-[#E1C675] mb-5 tracking-wide">
          Comfort | Serenity | Luxury | Greenery
        </p>
        <div className="flex flex-col gap-2.5 px-2 text-[15px] text-[#F6F1DC] leading-relaxed">
          <p>T.P.R. is where luxury meets sophistication in the heart of Gomti Nagar Extension.</p>
          <p>Our spacious banquet hall and beautifully landscaped lawn provide the perfect setting for weddings, corporate events, and special celebrations.</p>
          <p>With world-class hospitality, modern amenities, and a serene ambiance, we promise an experience like no other.</p>
          <p>Our staff is dedicated to offering warm, personalized service that makes every guest feel like royalty.</p>
          <p>Whether you're here for a celebration, a retreat, or a peaceful getaway — we ensure memories that linger long after you leave.</p>
          <p>Experience unmatched tranquility nestled amidst lush greenery and contemporary elegance.</p>
          <p>Make your moments memorable with us!</p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6 mt-10 px-4 py-6 bg-gradient-to-r from-[#D7BC77] via-[#C0A763] to-[#E8D3A1] bg-[length:400%_400%] border-y-2 border-[#F6F1DC] shadow-[0_0_15px_rgba(255,215,0,0.5)] animate-[shimmerBackground_15s_linear_infinite]">
        {[
          {
            image: Room,
            title: 'Elegant Accommodations',
            desc: 'Enjoy comfort in well-designed rooms with modern lighting, wardrobes, hair dryers, and more.',
            link: '/accommodation',
          },
          {
            image: Amenities,
            title: 'Amenities That Elevate Your Stay',
            desc: 'To ensure a perfect blend of comfort, luxury, and tranquility, we offer a wide range of thoughtfully curated amenities for our guests.',
            link: '/services',
          },
          {
            image: BanquetLawn,
            title: 'Banquets & Garden',
            desc: 'Celebrate in elegant banquet halls or under the open sky in our beautifully landscaped lawn.',
            link: '/marriage-package',
          },
          {
            image: Gallery,
            title: 'Gallery',
            desc: 'Explore our gallery to see the luxurious amenities and beautiful surroundings we offer.',
            link: '/gallery',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#fdfdfd] text-[#2A4630] rounded-xl shadow-md w-[260px] p-6 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img src={item.image} alt={item.title} className="w-[60px] h-[60px] mb-4" />
            <h3 className="text-[18px] font-bold text-[#1E3323] mb-2">{item.title}</h3>
            <p className="text-[14px] text-[#3b3b3b] leading-snug mb-4">{item.desc}</p>
            <Link
              to={item.link}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#D7BC77] via-[#C0A763] to-[#E8D3A1] bg-[length:400%_400%] text-[#2A4630] rounded font-bold transition-transform duration-300 hover:scale-105 hover:text-[#1E3323] hover:shadow-md"
            >
              VIEW MORE
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelInfoSection;
