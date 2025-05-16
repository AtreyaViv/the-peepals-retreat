import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" name="name" placeholder="Name" className="contact-input" required />
      <input type="email" name="email" placeholder="Email" className="contact-input" required />
      <textarea name="message" placeholder="Your message" className="contact-textarea" required></textarea>
      <button type="submit" className="contact-submit">SUBMIT</button>
    </form>
  );
};

export default ContactForm;