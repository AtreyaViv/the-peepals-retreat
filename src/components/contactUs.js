import React from "react";
import ContactInfo from "./contactInfo";
import PageHeader from "./pageHeader";
import contactBg from "../assets/hotel/contactUs.JPG";

const ContactUs = () => {
  return (
    <div className="font-sans">
      {/* MOBILE ONLY Header */}
      <div className="block lg:hidden">
        <PageHeader
          title="Contact"
          backgroundImage={contactBg}
          breadcrumb={["HOME", "CONTACT"]}
          mobileOnly={true}
        />
      </div>

      {/* Layout Wrapper */}
      <div className="flex flex-col lg:flex-row w-full lg:h-screen relative">
        {/* LEFT: Background Image on Desktop */}
        <div
          className="hidden lg:block w-[49.5%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>

        {/* RIGHT: Form Section */}
        <div className="w-full lg:w-[50%] bg-white px-4 lg:px-0 py-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-center mb-4">CONTACT</h2>
          <p className="text-sm text-gray-600 text-center lg:text-left lg:pl-[30%] mb-4">
            Please fill and submit the following form, and our representative will contact you as soon as possible.
          </p>

          {/* 📱 Mobile: centered w/ max-width, 🖥️ Desktop: restore full width */}
          <form className="w-full flex flex-col items-end px-0 lg:pr-2 max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full lg:w-[65%] border border-gray-300 p-3 mb-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full lg:w-[65%] border border-gray-300 p-3 mb-3 text-sm"
            />
            <textarea
              placeholder="Your message"
              required
              className="w-full lg:w-[65%] border border-gray-300 p-3 mb-3 min-h-[100px] resize-y text-sm"
            />
            <button
              type="submit"
              className="w-full lg:w-[65%] bg-[#D7BC77] text-white font-semibold py-3 hover:bg-[#aa8715] transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Box */}
      <ContactInfo />
    </div>
  );
};

export default ContactUs;
