import React from "react";
import Navbar from "../common/Navbar/Navbar";
import "./ContactUs.css";
import Footer from "../common/Footer/Footer";

const ContactUs = () => {
  const handleSendMessage = () => {
    const email = "verbello@email.com"; // Replace with your email address
    const subject = "Contact Verbello"; // Replace with your desired subject
    const body = "Hello, I'm reaching out regarding..."; // Replace with your default email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Have questions or suggestions? Reach out to us!</p>

          <form className="contact-form">
          </form>

          <button className="submit-button" onClick={handleSendMessage}>
            Send Message
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
