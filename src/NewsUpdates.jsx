// src/NewsUpdates.jsx
import React, { useEffect, useState } from "react";
import "./NewsUpdates.css";
import IjdBuilding from "./assets/ijd building.jpg"; // ✅ Using your own image for stability

export default function NewsUpdates() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // ✅ Static curated news data (fast load, no API lag)
    setNews([
      {
        id: 1,
        title: "Ijede LCDA Launches New Classroom and Sanitation Projects",
        description:
          "Flag-off of new classroom & toilet blocks across four schools to improve education and hygiene standards in the community.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/09/23/ijede-lcda-launches-new-classroom-and-sanitation-projects-to-boost-primary-education-inn-nigeria-%E2%98%86/",
        date: "Sept 23, 2025",
      },
      {
        id: 2,
        title:
          "Ijede LCDA Benefits From Abiru’s Touch: Renovated Classrooms & Health Centre Commissioned",
        description:
          "Renovated block of classrooms at Luwasa Junior School and upgraded Abule Eko Health Centre now open for residents.",
        image: IjdBuilding,
        link: "https://ajasainfo.com/2025/09/20/ijede-lcda-benefits-from-abirus-touch-renovated-block-of-classrooms-at-luwasa-junior-school-abule-eko-health-centre-commissioned-ajasa-info/",
        date: "Sept 20, 2025",
      },
      {
        id: 3,
        title:
          "Re-elected Ijede LCDA Chairperson, Motunrayo Alogba is Lagos’ Youngest Council Boss",
        description:
          "Motunrayo Alogba re-elected and recognized as Lagos’ youngest council chairperson, continuing her leadership in the LCDA.",
        image: IjdBuilding,
        link: "https://blackboxnigeria.com/re-elected-ijede-lcda-chairperson-motunrayo-alogba-is-lagos-youngest-council-boss/",
        date: "July 13, 2025",
      },
    ]);
  }, []);

  return (
    <div className="news-section">
      <div className="news-header">
        <h2>Latest News & Updates</h2>
        <p>
          Stay informed about recent developments, projects, and community news
          from Ijede LCDA.
        </p>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <div className="news-card" key={item.id}>
            <div className="news-img-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="news-date">{item.date}</span>
            </div>
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* ✅ "Read More" goes to real source */}
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
