import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X/Twitter icon is in fa6


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Who We Are */}
        <div className="footer-section">
          <h3>Who We Are</h3>
          <p>
            Ijede Local Council Development Area is a vibrant and dynamic
            administrative unit in the heart of Ikorodu, Lagos State. With a
            commitment to fostering community development and enhancing the
            quality of life for our residents, we take pride in being a
            catalyst for positive change.
          </p>
        </div>

        {/* Web Links */}
        <div className="footer-section">
          <h3>Web Links</h3>
          <p>📧 info@ijede.lg.gov.ng</p>
          <p>📞 08012345678, 09087654321</p>
          <p>
            🏢 The Council Secretariat <br />
            1 Madan Road, Ijede, Ikorodu, Lagos State
          </p>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="footer-bottom">
        <p>© 2025 Created by Majolagbe Fahizol Damilola</p>
      </div>

      {/* Scroll to top */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </footer>
  );
}
