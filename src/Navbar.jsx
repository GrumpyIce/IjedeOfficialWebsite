import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/ijede-logo.jpg";
import "./Navbar.css";

export default function Navbar({ scrolled }) {
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-content">
        <div className="nav-left">
          <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
          <span className="brand-name">Ijede LCDA</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/schools">Schools</Link></li>
        </ul>
        <div className="nav-right">
          <a href="#contact" className="nav-btn">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}
