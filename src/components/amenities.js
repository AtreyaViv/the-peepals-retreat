import React from "react";
import logo1 from "../assets/logo11.png"; // Use your actual logo path

const amenitiesData = [
  { title: "Comfortable Bedding", desc: "Spacious rooms with king or twin-size beds for a restful sleep." },
  { title: "Meeting Space", desc: "Professional conference room facilities available for business use." },
  { title: "Event Hall", desc: "Well-equipped banquet area ideal for weddings, parties, and corporate events." },
  { title: "Garden Area", desc: "Manicured green space perfect for relaxation or small gatherings." },
  { title: "Health Club", desc: "Fully equipped gym to help guests stay active during their stay." },
  { title: "Corporate Hub", desc: "Dedicated workspace and services to support business needs on the go." },
  { title: "Fast Wi-Fi", desc: "Complimentary high-speed internet access across the entire property." },
  { title: "Secure Parking", desc: "Spacious and safe parking area available for all our guests." },
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
