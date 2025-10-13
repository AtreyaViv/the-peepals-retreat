import React from "react";
import logo1 from "../assets/logo11.png"; // Use your actual logo path

const amenitiesData = [
  { title: "Comfortable Stay", desc: "Well-appointed rooms designed to offer maximum relaxation and comfort." },
  { title: "Event Hall", desc: "Well-equipped banquet area ideal for weddings, parties, and corporate events." },
  { title: "Lawn & Garden Venue", desc: "Expansive outdoor space ideal for vibrant events and celebrations." },
  { title: "Fast Wi-Fi", desc: "Complimentary high-speed internet access across the entire property." },
  { title: "Secure Parking", desc: "Spacious and safe parking area available for all our guests." },
  { title: "Daily Housekeeping", desc: "Rooms are cleaned and refreshed every day for a pleasant stay." },
  { title: "Power Backup", desc: "Uninterrupted power supply to ensure your comfort at all times." },
  { title: "Wedding Décor Support", desc: "Assistance with decor setup to elevate your special event." },
  { title: "Luggage Assistance", desc: "On-request support with carrying and managing luggage." },
  { title: "CCTV Surveillance", desc: "24/7 security coverage across the property for guest safety." },
];

const Amenities = () => {
  return (
    <section className="bg-[#f7f7f7] px-4 py-10 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {amenitiesData.map((item, index) => (
          <div
            key={index}
            className="bg-[#2A4630] text-[#D7BC77] rounded-lg p-5 sm:p-6 shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-[#D7BC77] hover:text-[#2A4630]"
          >
            <img
              src={logo1}
              alt="icon"
              className="w-[65px] h-[60px] mb-3 object-contain mx-auto"
            />
            <h3 className="font-semibold text-lg sm:text-base mb-2 text-inherit">
              {item.title}
            </h3>
            <p className="text-sm sm:text-[13px] text-inherit">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
