import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/ijede-logo.jpg";
import "./Navbar.css";

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        {/* Left: Logo + Brand */}
        <div className="nav-left">
          <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
          <span className="brand-name">Ijede LCDA</span>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${mobileOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setMobileOpen(false)}>Projects</Link></li>
          <li><Link to="/achievements" onClick={() => setMobileOpen(false)}>Achievements</Link></li>
          <li>
            <Link to="/contact" className="nav-btn" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Overlay for Mobile Menu */}
        {mobileOpen && <div className="nav-overlay" onClick={toggleMobileMenu}></div>}
      </div>
    </header>
  );
}
