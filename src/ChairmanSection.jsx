// src/ChairmanSection.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HerBoldImage from "./assets/her bold image.jpg";
import "./IjedeLcda.css";

export default function ChairmanSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (tab === "achievements") {
      // 👇 Redirect directly to AchievementsPage
      navigate("/achievements");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <section id="about-chairman" className="chairman fade-in">
      {/* ✅ Changed className to match CSS */}
      <div className="chairman-photo">
        <img
          src={HerBoldImage}
          alt="Hon. Motunrayo Gbadebo Alogba"
          loading="lazy"
        />
      </div>

      <div className="chairman-text">
        <h2>Hon. Motunrayo Gbadebo Alogba</h2>

        {/* ✅ Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "overview" ? "tab active" : "tab"}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </button>
          <button
            className={activeTab === "vision" ? "tab active" : "tab"}
            onClick={() => handleTabClick("vision")}
          >
            Vision
          </button>
          <button
            className="tab" // no active state because it redirects
            onClick={() => handleTabClick("achievements")}
          >
            Achievements
          </button>
        </div>

        {/* ✅ Tab Content */}
        <div className="tab-content">
          {activeTab === "overview" && (
            <p>
              I am honored to serve as the Chairman of Ijede LCDA.  
              Our administration is dedicated to promoting good governance, 
              inclusivity, and development for all residents of our community.  
              With the support of my team and the good people of Ijede, 
              we are working tirelessly to ensure transparency, accountability, 
              and progress.  
              Our focus remains on creating an enabling environment that fosters 
              growth, innovation, and improved quality of life.
            </p>
          )}

          {activeTab === "vision" && (
            <p>
              Looking ahead, our vision is to position Ijede LCDA as a model 
              community that thrives on sustainable growth, innovation, and inclusivity.  
              We are committed to implementing policies and programs that address the 
              needs of our people, foster unity, and promote social and economic progress.  
              Together, we will build a future where every resident feels valued, 
              supported, and empowered to reach their full potential.
            </p>
          )}
        </div>

        {/* ✅ Button */}
        <div className="chairman-buttons">
          <Link to="/projects" className="secondary-btn">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
