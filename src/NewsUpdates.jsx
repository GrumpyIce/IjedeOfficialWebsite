// // src/NewsUpdates.jsx
// import React, { useEffect, useState } from "react";
// import "./NewsUpdates.css";
// import IjdBuilding from "./assets/ijd building.jpg"; // ✅ Using your own image for stability

// export default function NewsUpdates() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     // ✅ Static curated news data (fast load, no API lag)
//     setNews([
//       {
//         id: 1,
//         title: "Ijede LCDA Launches New Classroom and Sanitation Projects",
//         description:
//           "Flag-off of new classroom & toilet blocks across four schools to improve education and hygiene standards in the community.",
//         image: IjdBuilding,
//         link: "https://ikorodunewsnetwork.com/2025/09/23/ijede-lcda-launches-new-classroom-and-sanitation-projects-to-boost-primary-education-inn-nigeria-%E2%98%86/",
//         date: "Sept 23, 2025",
//       },
//       {
//         id: 2,
//         title:
//           "Ijede LCDA Benefits From Abiru’s Touch: Renovated Classrooms & Health Centre Commissioned",
//         description:
//           "Renovated block of classrooms at Luwasa Junior School and upgraded Abule Eko Health Centre now open for residents.",
//         image: IjdBuilding,
//         link: "https://ajasainfo.com/2025/09/20/ijede-lcda-benefits-from-abirus-touch-renovated-block-of-classrooms-at-luwasa-junior-school-abule-eko-health-centre-commissioned-ajasa-info/",
//         date: "Sept 20, 2025",
//       },
//       {
//         id: 3,
//         title:
//           "Re-elected Ijede LCDA Chairperson, Motunrayo Alogba is Lagos’ Youngest Council Boss",
//         description:
//           "Motunrayo Alogba re-elected and recognized as Lagos’ youngest council chairperson, continuing her leadership in the LCDA.",
//         image: IjdBuilding,
//         link: "https://blackboxnigeria.com/re-elected-ijede-lcda-chairperson-motunrayo-alogba-is-lagos-youngest-council-boss/",
//         date: "July 13, 2025",
//       },
//     ]);
//   }, []);

//   return (
//     <div className="news-section">
//       <div className="news-header">
//         <h2>Latest News & Updates</h2>
//         <p>
//           Stay informed about recent developments, projects, and community news
//           from Ijede LCDA.
//         </p>
//       </div>

//       <div className="news-grid">
//         {news.map((item) => (
//           <div className="news-card" key={item.id}>
//             <div className="news-img-wrapper">
//               <img src={item.image} alt={item.title} />
//               <span className="news-date">{item.date}</span>
//             </div>
//             <div className="news-content">
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//               {/* ✅ "Read More" goes to real source */}
//               <a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more">
//                 Read More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./NewsUpdates.css";
import IjdBuilding from "./assets/ijd building.jpg";

export default function NewsUpdates() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    setNews([
      // === Page 1: Most Recent 3 News (2025) ===
      {
        id: 1,
        title: "Ijede LCDA Monitors Classroom Construction at Methodist Primary School, Oke‑Eletu",
        description:
          "On‑site inspection of ongoing classroom construction: 6 new classrooms + toilets + perimeter fence.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/11/07/ijede-council-boss-monitors-classroom-construction-at-methodist-primary-school-oke-eletu-inn-nigeria-%E2%98%86/",  
        date: "Nov 6, 2025", // from source :contentReference[oaicite:0]{index=0}
      },
      {
        id: 2,
        title: "Ijede LCDA Launches New Classroom & Sanitation Projects",
        description:
          "Flag‑off of new classroom and toilet blocks in four primary schools to improve education and hygiene.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/09/23/ijede-lcda-launches-new-classroom-and-sanitation-projects-to-boost-primary-education-inn-nigeria-%E2%98%86/",  
        date: "Sept 23, 2025", // :contentReference[oaicite:1]{index=1}
      },
      {
        id: 3,
        title: "Senator Abiru Unveils New Classrooms & Upgraded Health Centre",
        description:
          "Senator Mukhail Abiru commissioned renovated classroom block at Luwasa Junior School and reopened the refurbished Abule‑Eko Primary Healthcare Centre.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/09/19/abiru-unveils-new-classrooms-upgraded-health-centre-in-ijede-inn-nigeria-%E2%98%86/",  
        date: "Sept 19, 2025", // :contentReference[oaicite:2]{index=2}
      },

      // === Page 2: Your original 3 news (still 2025) ===
      {
        id: 4,
        title: "Ijede LCDA Launches New Classroom and Sanitation Projects",
        description:
          "Flag-off of new classroom & toilet blocks across four schools to improve education and hygiene standards in the community.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/09/23/ijede-lcda-launches-new-classroom-and-sanitation-projects-to-boost-primary-education-inn-nigeria-%E2%98%86/",
        date: "Sept 23, 2025",
      },
      {
        id: 5,
        title:
          "Ijede LCDA Benefits From Abiru’s Touch: Renovated Classrooms & Health Centre Commissioned",
        description:
          "Renovated block of classrooms at Luwasa Junior School and upgraded Abule Eko Health Centre now open for residents.",
        image: IjdBuilding,
        link:
          "https://ajasainfo.com/2025/09/20/ijede-lcda-benefits-from-abirus-touch-renovated-block-of-classrooms-at-luwasa-junior-school-abule‑eko-health-centre-commissioned-ajasa-info/",
        date: "Sept 20, 2025",
      },
      {
        id: 6,
        title:
          "Re‑elected Ijede LCDA Chairperson, Motunrayo Alogba is Lagos’ Youngest Council Boss",
        description:
          "Motunrayo Alogba re-elected and recognized as Lagos’ youngest council chairperson, continuing her leadership in the LCDA.",
        image: IjdBuilding,
        link:
          "https://blackboxnigeria.com/re-elected-ijede-lcda-chairperson-motunrayo-alogba-is-lagos-youngest-council-boss/",
        date: "July 13, 2025",
      },

      // === Page 3: More 2025 News (older but still 2025) ===
      {
        id: 7,
        title: "Ijede LCDA Chairman Reaffirms Commitment to Food Security on World Food Day",
        description:
          "Chairperson Hon. Motunrayo Gbadebo‑Alogba speaks on sustainable agriculture and food security as part of her development agenda.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/10/16/ijede-lcda-chairman-reaffirms-commitment-to-food-security-sustainable-agriculture-on-world-food-day-inn/",
        date: "Oct 16, 2025", // :contentReference[oaicite:3]{index=3}
      },
      {
        id: 8,
        title: "Hon. Aro Moshood Abiodun Flags Off 8 km Road Construction in Ijede LCDA",
        description:
          "Flag-off of 8km Jimoh‑Idowu to Ama Avenue road project to improve connectivity and economic activity in Ijede.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/05/04/hon-aro-moshood-abiodun-flags-off-8km-jimoh-idowu-ama-avenue-road-construction-project-in-ijede-lcda-inn-nigeria-%E2%98%86/",
        date: "May 3, 2025", // :contentReference[oaicite:4]{index=4}
      },
      {
        id: 9,
        title: "Ijede LCDA Recognizes Elemu Social Base Club Amid Rising Community Advocacy",
        description:
          "The Elemu Social Base Club is officially recognised by Ijede LCDA as a key community organization to advance grassroots development.",
        image: IjdBuilding,
        link: "https://ikorodunewsnetwork.com/2025/05/26/ijede-lcda-recognizes-elemu-social-base-club-amid-rising-community-advocacy-inn-nigeria-%E2%98%86/",
        date: "May 25, 2025", // :contentReference[oaicite:5]{index=5}
      },
      {
        id: 10,
        title: "Ijede LCDA Chairperson Graduates Skilled Entrepreneurs, Equips with Start‑Up Tools",
        description:
          "317 graduates from the Skill Acquisition Centre receive sewing machines, generators, hair dryers, tile cutters and other equipment.",
        image: IjdBuilding,
        link: "https://blackboxnigeria.com/ijede-lcda-chairman-hon-motunrayo-gbadebo-alogba-graduates-skilled-entrepreneurs-equips-with-start-up-tools/",
        date: "Feb 26, 2025", // from source date :contentReference[oaicite:6]{index=6}
      },
    ]);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const displayedNews = news.slice(startIndex, startIndex + pageSize);

  return (
    <div className="news-section">
      <div className="news-header">
        <h2>Latest News & Updates</h2>
        <p>
          Stay informed about recent developments, projects, and community news from Ijede LCDA.
        </p>
      </div>

      <div className="news-grid">
        {displayedNews.map((item) => (
          <div className="news-card" key={item.id}>
            <div className="news-img-wrapper">
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="news-date">{item.date}</span>
            </div>
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(news.length / pageSize) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
