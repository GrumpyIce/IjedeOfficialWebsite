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
          <p>info@ijede.lg.gov.ng</p>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>07033494434, 08077790430</p>
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

       
{/* Ijede LCDA Location Map */}
<div className="contact-map">
  <iframe
    title="Ijede LCDA Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.208121101144!2d3.588800315243606!3d6.564730995352563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bb0faab6f6e5f%3A0x69c11f1739c8b54b!2sIjede%20Local%20Council%20Development%20Area%2C%20Ikorodu%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1700792190000!5m2!1sen!2sng"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
