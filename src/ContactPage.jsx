// src/ContactPage.jsx
import React, { useState } from "react";
import "./ContactPage.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="contact-page-container">
      <Topbar />
      <Navbar />

      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out for any questions or feedback!</p>
      </header>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>Ijedelcda@yahoo.com</p>
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

      <div className="contact-form-card">
        {formSubmitted ? (
          <div className="thank-you-message">
            <div className="checkmark-wrapper">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-check" fill="none" d="M14 27l7 7 17-17" />
              </svg>
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been successfully sent. We will get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="35cdeada-5ffe-43af-9b3c-49cd6c3bb1a3" />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="to_email" value="Ijedelcda@yahoo.com" />

              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject_field" placeholder="Subject" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </>
        )}

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

      <Footer />
    </div>
  );
};

export default ContactPage;
