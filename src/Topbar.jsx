import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        Official Website of Ijede Local Council Development Area of <br /> Lagos State
      </div>
      <div className="topbar-right">
        <span className="topbar-icon">📧</span>
        <a href="mailto:info@ijedelcda.lg.gov.ng">info@ijedelcda.lg.gov.ng</a>
      </div>
    </div>
  );
}
