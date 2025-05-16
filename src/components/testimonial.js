import React, { useState, useEffect } from "react";
import quoteFrame from '../assets/quote.png';

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
      setFade(false); // Start fade-out animation
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true); // Start fade-in animation
      }, 500); // Wait for fade-out before changing text
    }, 7000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Testimonial</h2>
      <div className="testimonial-frame">
        <img src={quoteFrame} alt="Quote frame" className="quote-frame-img" />
        <div className="testimonial-content">
          <p className={`testimonial-text ${fade ? "fade-in" : "fade-out"}`}>
            {testimonials[index].review}
          </p>
          <p className={`testimonial-name ${fade ? "fade-in" : "fade-out"}`}>
            – {testimonials[index].name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

// const TestimonialSection = () => {


//     const [index, setIndex] = useState(0);

//     // Auto-slide every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 2) % reviews.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [reviews.length]);

//     // Manual navigation
//     const nextReviews = () => {
//         setIndex((prevIndex) => (prevIndex + 2) % reviews.length);
//     };

//     const prevReviews = () => {
//         setIndex((prevIndex) => (prevIndex - 2 + reviews.length) % reviews.length);
//     };

//     return (
//         <div className="testimonial-section">
//             <h2>Testimonials</h2>
//             <div className="testimonial-container">
//                 {reviews.slice(index, index + 2).map((item, idx) => (
//                     <div key={idx} className="testimonial-card">
//                         <p>{item.review}</p>
//                         <span className="testimonial-name">- {item.name}</span>
//                     </div>
//                 ))}
//             </div>
//             <div className="testimonial-buttons">
//                 <button onClick={prevReviews}>&#9665;</button>
//                 <button onClick={nextReviews}>&#9655;</button>
//             </div>
//         </div>
//     );
//};

// export default TestimonialSection;