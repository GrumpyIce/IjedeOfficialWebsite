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
        <a href="mailto:Ijedelcda@yahoo.com">Ijedelcda@yahoo.com</a>
      </div>
    </div>
  );
}
