import React from "react";
import BookingForm from "./bookingForm";
import PageHeader from "./pageHeader";
import bookNowHeader from "../assets/reception & lobby/booknow.JPG";

const BookNow = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <PageHeader
        title="Book-A-Event"
        backgroundImage={bookNowHeader}
        breadcrumb={["Home", "Book Now"]}
      />

      {/* Book Your Event Section */}
      <div className="bg-[whitesmoke] my-12 text-left px-4 py-6 sm:px-6 sm:py-10">
        <h2 className="text-2xl font-bold italic font-serif">Book-Your-Event</h2>
        <p className="text-sm sm:text-base text-gray-500">Fill in the details to book your event</p>
        <div className="w-[50px] h-[3px] bg-[lightgreen] mt-3 mb-2" />
      </div>

      <BookingForm />
    </div>
  );
};

export default BookNow;
