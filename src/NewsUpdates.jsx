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
// src/NewsUpdates.jsx
import React, { useEffect, useState } from "react";
import "./NewsUpdates.css";
import IjdBuilding from "./assets/ijd building.jpg";

export default function NewsUpdates() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    setNews([
      // === NEWEST FIRST ===

      // Dec 25, 2025 — Chair Urges Christians To Embrace Love & Kindness
      {
        id: 1,
        title: "Ijede LCDA Chair Urges Christians To Embrace Love, Kindness At Christmas",
        description:
          "As Christians commemorate the birth of Jesus Christ, the Executive Chairman of Ijede LCDA, Hon. Motunrayo Gbadebo‑Alogba, urged residents to embrace love, compassion, unity, and generosity this festive season.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/12/25/ijede-chair-urges-christians-to-embrace-love-kindness-at-christmas/",
        date: "Dec 25, 2025",
      },

      // Dec 23, 2025 — Roads Grading Across Ijede
      {
        id: 2,
        title: "Hon. Gbadebo‑Alogba Improves Connectivity With Grading Of Major Roads",
        description:
          "To enhance daily commuting, the Ijede LCDA Chairman commenced grading of major roads across the council, improving connectivity and easing travel for residents.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/12/23/hon-gbadebo-alogba-improves-connectivity-with-grading-of-major-roads/",
        date: "Dec 23, 2025",
      },

      // Dec 12, 2025 — Budget Proposal for 2026
      {
        id: 3,
        title: "Ijede LCDA Chair Presents N5.12b Appropriation Bill With Focus On Infrastructure & Human Capital",
        description:
          "Hon. Motunrayo Gbadebo‑Alogba presented the 2026 appropriation bill emphasizing infrastructural support and human‑capital development across all wards of Ijede LCDA.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/12/12/ijede-lcda-chair-presents-n5-12b-appropriation-bill-with-focus-on-infrastructure-human-capital-development/",
        date: "Dec 12, 2025",
      },

      // Dec 3, 2025 — Budget Focus On Key Sectors
      {
        id: 4,
        title: "Budget: Ijede LCDA Focuses On Education, Healthcare & Skills Development",
        description:
          "A 3‑day budget retreat culminated in plans prioritizing education, healthcare, skills empowerment and welfare, underlining the council’s development agenda for 2026.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/12/03/budget-ijede-lcda-focuses-on-education-healthcare-skills-development-others/",
        date: "Dec 3, 2025",
      },

      // Nov 27, 2025 — Legislative Building Commissioning
      {
        id: 5,
        title: "Ijede LCDA Commissions New Legislative & Customary Court Complex",
        description:
          "Council Chairman Hon. Motunrayo Gbadebo‑Alogba has commissioned a new two‑storey Legislative & Customary Court Complex named after late Yeye Fausat Gbadebo‑Alogba.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/11/27/legacy-project-ijede-chair-hon-gbadebo-alogba-commissions-legislative-customary-building/",
        date: "Nov 27, 2025",
      },

      // Nov 12, 2025 — 100% Budget Performance
      {
        id: 6,
        title: "Ijede LCDA Achieves 100% 2025 Budget Performance",
        description:
          "Council reports full execution of 2025 budget — multiple projects completed; stakeholders’ forum launched for future planning.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/11/12/ijede-lcda-achieves-100-y2025-budget-performance-due-to-proper-planning-council/",
        date: "Nov 12, 2025",
      },

      // Nov 12, 2025 — Ajasa Info: Stakeholders Consult Forum
      {
        id: 7,
        title: "Ijede LCDA Hosts Stakeholders’ Consultative Forum Ahead Of Y2026 Budget",
        description:
          "Hon. Motunrayo Gbadebo‑Alogba outlined development priorities including infrastructure, education, healthcare, youth empowerment, and community projects at the two‑day Budget Stakeholders Forum.",
        image: IjdBuilding,
        link:
          "https://ajasainfo.com/2025/11/12/ijede-lcda-hosts-stakeholders-consultative-forum-ahead-of-y2026-budget-ajasa-info/",
        date: "Nov 12, 2025",
      },

      // Nov 6, 2025 — Classroom Construction at Methodist Primary School
      {
        id: 8,
        title:
          "Ijede LCDA Monitors Classroom Construction at Methodist Primary School, Oke-Eletu",
        description:
          "On-site inspection of ongoing classroom construction: 6 new classrooms + toilets + perimeter fence.",
        image: IjdBuilding,
        link:
          "https://ikorodunewsnetwork.com/2025/11/07/ijede-council-boss-monitors-classroom-construction-at-methodist-primary-school-oke-eletu-inn-nigeria-%E2%98%86/",
        date: "Nov 6, 2025",
      },

      // Oct 16, 2025 — Food Security Commitment
      {
        id: 9,
        title:
          "Ijede LCDA Chairman Reaffirms Commitment to Food Security on World Food Day",
        description:
          "Chairperson Hon. Motunrayo Gbadebo-Alogba speaks on sustainable agriculture.",
        image: IjdBuilding,
        link:
          "https://ikorodunewsnetwork.com/2025/10/16/ijede-lcda-chairman-reaffirms-commitment-to-food-security-sustainable-agriculture-on-world-food-day-inn/",
        date: "Oct 16, 2025",
      },

      // Oct 14, 2025 — Seyi Tinubu Felicitation
      {
        id: 10,
        title: "Seyi Tinubu Is A Young Visionary Leader, Beacon Of Hope – Ijede LCDA Chair",
        description:
          "Hon. Motunrayo Gbadebo-Alogba congratulated Seyi Tinubu on his 40th birthday, describing him as a beacon of hope and visionary leader committed to youth empowerment and national development.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/10/14/seyi-tinubu-is-a-young-visionary-leader-beacon-of-hope-ijede-lcda-chair/",
        date: "Oct 14, 2025",
      },

      // Oct 15, 2025 — Asiwaju Basorun Birthday Felicitation
      {
        id: 11,
        title: "Birthday: Ijede LCDA Chairman, Hon. Gbadebo – Alogba Congratulates Asiwaju Basorun",
        description:
          "Hon. Motunrayo Gbadebo-Alogba extended heartfelt birthday congratulations to Asiwaju Olorunfunmi Basorun, recognizing his service and leadership to the community.",
        image: IjdBuilding,
        link:
          "https://www.theimpactnewspaper.com/2025/10/15/birthday-ijede-lcda-chairman-hon-gbadebo-alogba-congratulates-asiwaju-basorun/",
        date: "Oct 15, 2025",
      },

      // Sept 23, 2025 — Classroom & Sanitation Projects
      {
        id: 12,
        title: "Ijede LCDA Launches New Classroom & Sanitation Projects",
        description:
          "Flag-off of new classroom and toilet blocks in four primary schools to improve education and hygiene.",
        image: IjdBuilding,
        link:
          "https://ikorodunewsnetwork.com/2025/09/23/ijede-lcda-launches-new-classroom-and-sanitation-projects-to-boost-primary-education-inn-nigeria-%E2%98%86/",
        date: "Sept 23, 2025",
      },

      // Sept 20, 2025 — Renovated Classrooms & Health Centre
      {
        id: 13,
        title:
          "Ijede LCDA Benefits From Abiru’s Touch: Renovated Classrooms & Health Centre Commissioned",
        description:
          "Renovated classroom block at Luwasa Junior School and upgraded Abule Eko Health Centre now open for residents.",
        image: IjdBuilding,
        link:
          "https://ajasainfo.com/2025/09/20/ijede-lcda-benefits-from-abirus-touch-renovated-block-of-classrooms-at-luwasa-junior-school-abule-eko-health-centre-commissioned-ajasa-info/",
        date: "Sept 20, 2025",
      },

      // May 25, 2025 — Elemu Social Base Club
      {
        id: 14,
        title: "Ijede LCDA Recognizes Elemu Social Base Club",
        description:
          "The Elemu Social Base Club is officially recognised to advance grassroots development.",
        image: IjdBuilding,
        link:
          "https://ikorodunewsnetwork.com/2025/05/26/ijede-lcda-recognizes-elemu-social-base-club-amid-rising-community-advocacy-inn-nigeria-%E2%98%86/",
        date: "May 25, 2025",
      },

      // May 3, 2025 — 8 km Road Construction
      {
        id: 15,
        title:
          "Hon. Aro Moshood Abiodun Flags Off 8 km Road Construction in Ijede LCDA",
        description:
          "Flag-off of 8km Jimoh-Idowu to Ama Avenue road project to improve connectivity.",
        image: IjdBuilding,
        link:
          "https://ikorodunewsnetwork.com/2025/05/04/hon-aro-moshood-abiodun-flags-off-8km-jimoh-idowu-ama-avenue-road-construction-project-in-ijede-lcda-inn-nigeria-%E2%98%86/",
        date: "May 3, 2025",
      },

      // Feb 26, 2025 — Skilled Entrepreneurs Graduation
      {
        id: 16,
        title: "Ijede LCDA Graduates Skilled Entrepreneurs",
        description:
          "317 graduates from the Skill Acquisition Centre receive start-up tools.",
        image: IjdBuilding,
        link:
          "https://blackboxnigeria.com/ijede-lcda-chairman-hon-motunrayo-gbadebo-alogba-graduates-skilled-entrepreneurs-equips-with-start-up-tools/",
        date: "Feb 26, 2025",
      },
    ]);
  }, []);

  const startIndex = (page - 1) * pageSize;
  const displayedNews = news.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(news.length / pageSize);

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

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
