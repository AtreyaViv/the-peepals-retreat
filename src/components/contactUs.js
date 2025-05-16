import React from "react";
import ContactInfo from "./contactInfo";
import PageHeader from "./pageHeader";
import contactBg from "../assets/hotel/contactUs.JPG"; // Import image directly
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* MOBILE: Header Section with Breadcrumb */}
      <div className="mobile-only">
        <PageHeader
          title="Contact"
          backgroundImage={contactBg}
          breadcrumb={['HOME', 'CONTACT']}
          mobileOnly={true}
        />
      </div>

      {/* DESKTOP: Left side with background image */}
      <div className="contact-image"></div>

      {/* Right side with Contact Form */}
      <div className="contact-form-container">
        <h2>CONTACT</h2>
        <p>
          Please fill and submit the following form, and our representative will
          contact you as soon as possible.
        </p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      {/* Contact Info Box */}
      <ContactInfo />
    </div>
  );
};

export default ContactUs;
