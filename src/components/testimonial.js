import React, { useState, useEffect } from "react";
import quoteFrame from "../assets/quote.png";

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "The service was outstanding! The staff made sure that every little detail was taken care of. I will definitely come back for another stay."
  },
  {
    name: "Priya Verma",
    review:
      "An unforgettable experience. The ambience was peaceful, and the rooms were spotlessly clean. Highly recommended for a relaxing getaway!"
  },
  {
    name: "Rohan Malhotra",
    review:
      "Stayed here for the weekend and was amazed by the hospitality. The staff was very friendly and accommodating."
  },
  {
    name: "Neha Singh",
    review:
      "The food was absolutely delightful, and the chefs were very skilled. The variety of dishes made every meal a special experience."
  },
  {
    name: "Rahul Tiwari",
    review:
      "From the luxurious rooms to the exceptional service, everything was top-notch. The attention to detail was impressive!"
  },
  {
    name: "Kavita Joshi",
    review:
      "One of the best hotels I have stayed in. The interiors were beautiful, and the staff made me feel at home. A wonderful experience!"
  },
  {
    name: "Sandeep Chauhan",
    review:
      "A perfect blend of comfort and elegance. I really appreciated how quiet and peaceful the hotel was. Highly recommended!"
  },
  {
    name: "Anjali Pandey",
    review:
      "I was impressed by the cleanliness and organization. Everything was well maintained, and the service was prompt."
  },
  {
    name: "Vikas Gupta",
    review:
      "The rooms were spacious, and the decor was absolutely stunning. I will surely visit again with my family!"
  },
  {
    name: "Meena Kapoor",
    review:
      "An amazing experience from check-in to check-out. I loved the luxurious feel of the entire place."
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section w-full h-full flex flex-col items-center justify-start bg-[#1E3323]">
      <h2 className="text-[#D7BC77] text-[42px] md:text-[56px] font-bold font-[cursive] mb-6">
        Testimonial
      </h2>

      <div className="relative w-[95%] max-w-[650px] aspect-[4/5]">
        <img
          src={quoteFrame}
          alt="Quote Frame"
          className="w-full h-full object-contain"
        />

        {/* Review text */}
        <p
          className={`absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[85%] text-center text-[#D7BC77] text-[15px] md:text-[17px] font-semibold transition-all duration-500 ease-in-out ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {testimonials[index].review}
        </p>

        {/* Reviewer name */}
        <p
          className={`absolute bottom-[35%] right-[10%] text-[#D7BC77] text-[13px] md:text-[15px] transition-all duration-500 ease-in-out ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          – {testimonials[index].name}
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
