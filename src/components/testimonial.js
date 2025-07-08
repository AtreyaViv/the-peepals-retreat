import React, { useState, useEffect } from "react";
import quoteFrame from "../assets/quote.png";

const testimonials = [
  { name: "Amit Sharma", review: "The service was outstanding! The staff made sure that every little detail was taken care of. I will definitely come back for another stay." },
  { name: "Priya Verma", review: "An unforgettable experience. The ambience was peaceful, and the rooms were spotlessly clean. Highly recommended for a relaxing getaway!" },
  { name: "Rohan Malhotra", review: "Stayed here for the weekend and was amazed by the hospitality. The staff was very friendly and accommodating." },
  { name: "Neha Singh", review: "The food was absolutely delightful, and the chefs were very skilled. The variety of dishes made every meal a special experience." },
  { name: "Rahul Tiwari", review: "From the luxurious rooms to the exceptional service, everything was top-notch. The attention to detail was impressive!" },
  { name: "Kavita Joshi", review: "One of the best hotels I have stayed in. The interiors were beautiful, and the staff made me feel at home. A wonderful experience!" },
  { name: "Sandeep Chauhan", review: "A perfect blend of comfort and elegance. I really appreciated how quiet and peaceful the hotel was. Highly recommended!" },
  { name: "Anjali Pandey", review: "I was impressed by the cleanliness and organization. Everything was well maintained, and the service was prompt." },
  { name: "Vikas Gupta", review: "The rooms were spacious, and the decor was absolutely stunning. I will surely visit again with my family!" },
  { name: "Meena Kapoor", review: "An amazing experience from check-in to check-out. I loved the luxurious feel of the entire place." },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#2A4630] px-4 py-10 md:py-20 flex flex-col items-center">
      <h2 className="text-[#D7BC77] text-[38px] md:text-[50px] font-bold font-[cursive] text-center mb-8 drop-shadow-md">
        Testimonial
      </h2>

      <div className="relative w-[330px] h-[280px] md:w-[400px] md:h-[330px]">
        <img
          src={quoteFrame}
          alt="Quote Frame"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 pt-10 pb-12">
          <p
            className={`text-[#D7BC77] text-[14px] text-center font-semibold transition-all duration-500 ease-in-out ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {testimonials[index].review}
          </p>
          <p
            className={`text-[#D7BC77] text-sm font-normal mt-auto self-end transition-all duration-500 ease-in-out ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            – {testimonials[index].name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
