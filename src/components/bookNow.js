import React from "react";
import BookingForm from "./bookingForm";
import "./BookNow.css";
import PageHeader from "./pageHeader";
import bookNowHeader from "../assets/reception & lobby/booknow.JPG";

const BookNow = () => {
  return (
    <div className="book-now">
      {/* Header Section */}
      <PageHeader
        title="Book-A-Event"
        backgroundImage={bookNowHeader}
        breadcrumb={['Home', 'Book Now']}
      />

      {/* Book Your Event Section */}
      <div className="book-your-event">
        <h2 className="event-title">Book-Your-Event</h2>
        <p className="event-subtext">Fill in the details to book your event</p>
        <div className="event-underline"></div>
      </div>
      <BookingForm />
    </div>
  );
};

export default BookNow;
