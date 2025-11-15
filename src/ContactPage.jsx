import React from "react";
import "./ContactPage.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out for any questions or feedback!</p>
      </header>

      {/* Contact Cards Section */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>info@ijede.lg.gov.ng</p> {/* Updated from footer */}
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>08012345678, 09087654321</p> {/* Updated from footer */}
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Visit Us</h3>
          <p>
            The Council Secretariat <br />
            1 Madan Road, Ijede, Ikorodu, Lagos State
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-card">
        <h2>Send a Message</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!"); // Replace with actual submission logic
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
