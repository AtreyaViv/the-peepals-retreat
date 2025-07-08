import React from 'react';
import { Link } from 'react-router-dom';
import roomIndex from '../assets/room/roomIndex.jpeg';

const ExecutiveRoom = () => {
  return (
    <div className="flex flex-wrap items-center gap-5 p-5 bg-[whitesmoke] rounded-lg border-[3px] border-[#2A4630] shadow-md">
      <div className="w-full max-w-[350px]">
        <img
          src={roomIndex}
          alt="Executive Room"
          className="w-full h-auto rounded object-cover"
        />
      </div>
      <div className="flex-1 min-w-[250px] text-[#2A4630]">
        <h2 className="font-[manhattan] text-[38px]">EXECUTIVE ROOM</h2>
        <p className="text-[18px] my-2">Experience luxury and comfort in our well-furnished executive rooms.</p>
        <Link
          to="/book-now"
          className="inline-block px-4 py-2 bg-[#c9a458] text-white rounded font-bold hover:bg-[#b28e36]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ExecutiveRoom;

