// // src/IjedeAbout.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar"; // ✅ Shared Navbar
// import Topbar from "./Topbar"; // ✅ Add Topbar for consistency
// import Footer from "./Footer"; // ✅ Shared Footer
// import "./IjedeAbout.css";

// // Updated imports for your assets
// import Market from "./assets/market.jpg";
// import Market1 from "./assets/market1.jpg";
// import IjdHospital from "./assets/ijdhospital.jpg";
// import PHC from "./assets/phc.jpg";
// import Spring from "./assets/spring.jpg"; // ✅ Added missing Spring image

// export default function IjedeAbout() {
//   return (
//     <div>
//       {/* ✅ Topbar (same across all pages) */}
//       <div className="topbar-wrapper">
//         <Topbar />
//       </div>

//       {/* ✅ Navbar full width */}
//       <div className="navbar-wrapper">
//         <Navbar />
//       </div>

//       {/* Main About Page Content */}
//       <div className="about-container">
//         {/* Back Home Button */}
//         <div className="back-btn-container">
//           <Link to="/" className="back-home-btn">
//             Back Home
//           </Link>
//         </div>

//         {/* Hero Section */}
//         <section className="about-hero">
//           <h1>About Ijede LCDA</h1>
//           <p>
//             Ijede Local Council Development Area (LCDA) is one of the vibrant
//             grassroots councils in Ikorodu Division of Lagos State. It is widely
//             known for its strong cultural heritage, thriving trade, historical
//             relevance, and commitment to delivering sustainable development to
//             its citizens. Over the years, Ijede has transformed from a fishing
//             community into a center of commerce, education, and governance.
//           </p>
//         </section>

//         {/* History Section */}
//         <section className="about-section history-section">
//           <h2>Historical Overview</h2>
//           <p>
//             The name Ijede, originally “Ajede,” translates to “the place where
//             men gather fish to eat.” This reflects its beginnings as a fishing
//             and agrarian community, strategically located near the Lagos Lagoon
//             and Egbin waterside. Fishing was the lifeblood of the people, with
//             trade extending to neighboring villages and towns.
//           </p>
//           <p>
//             As one of the ancient settlements in Ikorodu Division, Ijede
//             developed into a center of trade and culture, attracting settlers
//             from across Yoruba land and beyond. Today, the LCDA encompasses
//             towns and villages such as Oke-Eletu, Abule-Eko, Igbopa, Ipakan,
//             Egbin, and Ayetoro, making it a dynamic and diverse community that
//             preserves its traditions while embracing modernization.
//           </p>
//         </section>

//         {/* PHCs Section */}
//         <section className="about-section phc-section">
//           <h2>Healthcare Facilities</h2>
//           <div className="card-grid">
//             <div className="info-card">
//               <img src={IjdHospital} alt="Ijede General Hospital" />
//               <h3>General Hospital, Ijede</h3>
//               <p>
//                 Commissioned in 1983, the General Hospital in Ijede serves as a
//                 cornerstone of healthcare for residents. With over 33 beds and
//                 6 cots, the hospital provides comprehensive medical services,
//                 including maternity, emergency care, general surgery, and child
//                 immunization programs. It has been instrumental in reducing
//                 maternal and child mortality rates in the LCDA.
//               </p>
//             </div>
//             <div className="info-card">
//               <img src={PHC} alt="Primary Healthcare Centres" />
//               <h3>Primary Healthcare Centres (PHCs)</h3>
//               <p>
//                 Ijede LCDA operates several Primary Healthcare Centres (PHCs),
//                 strategically located to serve different wards. Facilities such
//                 as the Abule-Eko PHC and others have recently undergone
//                 renovations, ensuring access to essential healthcare, antenatal
//                 services, vaccinations, and preventive medicine for residents.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Markets Section */}
//         <section className="about-section market-section">
//           <h2>Markets & Economy</h2>
//           <div className="card-grid">
//             <div className="info-card">
//               <img src={Market} alt="Obun-Ale Market" />
//               <h3>Obun-Ale Market</h3>
//               <p>
//                 Obun-Ale Market is a pivotal hub of commerce in Ijede. Recently
//                 reconstructed by the council, the market now features modern
//                 stalls, improved sanitation, and better drainage systems. It is
//                 home to traders dealing in foodstuff, textiles, fish, and
//                 household goods, making it a major contributor to the local
//                 economy.
//               </p>
//             </div>
//             <div className="info-card">
//               <img src={Market1} alt="Other Local Markets" />
//               <h3>Other Markets</h3>
//               <p>
//                 Aside from Obun-Ale, Ijede boasts several local markets
//                 scattered across its communities. These markets support small
//                 businesses and artisans, boost local agriculture, and provide
//                 employment opportunities. Collectively, they are vital in
//                 sustaining grassroots economic development.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Education & Community Development */}
//         <section className="about-section education-section">
//           <h2>Education & Community Development</h2>
//           <p>
//             Education is a top priority for Ijede LCDA. The council has invested
//             in the construction of new classrooms, libraries, and sanitation
//             facilities across primary and secondary schools. Beyond physical
//             infrastructure, bursary schemes and scholarships are provided to
//             support indigent students, ensuring that no child is left behind.
//           </p>
//           <p>
//             Community development is driven by active collaboration with the
//             over 140 Community Development Associations (CDAs). Initiatives
//             include skill acquisition programs for youths, women empowerment
//             schemes, and health awareness campaigns. These efforts aim to build
//             a self-reliant, educated, and empowered citizenry.
//           </p>
//         </section>

//         {/* Tourism & Natural Attractions */}
//         <section className="about-section tourism-section">
//           <h2>Tourism & Natural Attractions</h2>
//           <div className="card-grid">
//             <div className="info-card">
//               <img src={Spring} alt="Ijede Spring Water" />
//               <h3>Ijede Spring Water</h3>
//               <p>
//                 The natural spring in Ijede is not only a source of fresh water
//                 but also a cultural heritage site. Locals believe in its healing
//                 properties, and it has long served as a gathering spot for
//                 communal activities. The council is exploring ways to preserve
//                 and promote the spring as a tourist attraction to boost local
//                 tourism and cultural pride.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Governance & Infrastructure */}
//         <section className="about-section governance-section">
//           <h2>Governance & Infrastructure</h2>
//           <p>
//             Ijede LCDA operates under the leadership of the Chairman, Vice
//             Chairman, and elected councillors who oversee various departments.
//             The administration places strong emphasis on transparency,
//             accountability, and citizen engagement in governance.
//           </p>
//           <p>
//             Infrastructure projects in the LCDA include rehabilitation of major
//             roads, desilting of canals, construction of drainages, and the
//             provision of street lighting. These efforts are designed to improve
//             mobility, reduce flooding, and enhance security. The council also
//             partners with Lagos State Government agencies to drive innovation
//             and ensure sustainable urban development.
//           </p>
//         </section>
//       </div>

//       {/* ✅ Footer added here */}
//       <div className="footer-wrapper">
//         <Footer />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import "./IjedeAbout.css";

/* Market & Healthcare assets */
import Market from "./assets/market.jpg";
import Market1 from "./assets/market1.jpg";
import IjdHospital from "./assets/ijdhospital.jpg";
import PHC from "./assets/phc.jpg";

/* Masquerade images */
import masq1 from "./assets/masq1.jpg";
import masq2 from "./assets/masq2.jpg";
import masq3 from "./assets/masq3.jpg";
import masq4 from "./assets/masq4.jpg";
import masq5 from "./assets/masq5.jpg";

/* School and Classroom images */
import class1 from "./assets/class1.jpg";
import class2 from "./assets/class2.jpg";
import class3 from "./assets/class3.jpg";

import sch1 from "./assets/sch1.jpg";
import sch2 from "./assets/sch2.jpg";
import sch3 from "./assets/sch3.jpg";
import sch4 from "./assets/sch4.jpg";
import sch5 from "./assets/sch5.jpg";
import sch6 from "./assets/sch6.jpg";
import sch7 from "./assets/sch7.jpg";
import sch8 from "./assets/sch8.jpg";
import sch9 from "./assets/sch9.jpg";
import sch10 from "./assets/sch10.jpg";
import sch11 from "./assets/sch11.jpg";
import sch12 from "./assets/sch12.jpg";
import sch13 from "./assets/sch13.jpg";
import sch14 from "./assets/sch14.jpg";

/* Tourism images */
import tour1 from "./assets/tour1.jpg";
import tour2 from "./assets/tour2.jpg";
import tour3 from "./assets/tour3.jpg";
import tour4 from "./assets/tour4.jpg";
import tour5 from "./assets/tour5.jpg";
import tour6 from "./assets/tour6.jpg";
import tour7 from "./assets/tour7.jpg";
import tour8 from "./assets/tour8.jpg";
import tour9 from "./assets/tour9.jpg";
import tour10 from "./assets/tour10.jpg";

export default function IjedeAbout() {
  const masqueradeImages = [masq1, masq2, masq3, masq4, masq5];
  const schoolImages = [
    class1, class2, class3,
    sch1, sch2, sch3, sch4, sch5, sch6, sch7,
    sch8, sch9, sch10, sch11, sch12, sch13, sch14
  ];
  const tourismImages = [
    tour1, tour2, tour3, tour4, tour5,
    tour6, tour7, tour8, tour9, tour10
  ];

  return (
    <div>
      <div className="topbar-wrapper"><Topbar /></div>
      <div className="navbar-wrapper"><Navbar /></div>

      <main className="about-container">
        <div className="back-btn-container">
          <Link to="/" className="back-home-btn">← Back Home</Link>
        </div>

        {/* Hero */}
        <section className="about-hero">
          <h1>About Ijede LCDA</h1>
          <p>
            Ijede Local Council Development Area (LCDA) is a dynamic community in the Ikorodu Division of Lagos State.
            Rich in culture, trade, and community spirit, Ijede has evolved from a fishing settlement to a thriving hub.
          </p>
        </section>

        {/* Historical Overview & Masquerade */}
        <section className="about-section history-section">
          <h2>Historical Overview & Masquerade Traditions</h2>
          <p>
            Ijede’s story stretches back centuries, built on trade, community, and faith.
            The people of Ijede have always celebrated their culture through colorful festivals and ancestral heritage.
          </p>
          <p>
            Among these is the <strong>masquerade tradition</strong> — a vivid celebration that blends art, dance,
            and spirituality. The masquerades such as Epa, Igunnuko, and Eyibi/Eluku play vital roles as protectors,
            entertainers, and storytellers in the community.
          </p>
          <p>
            During the recent Ijede Tourism Day, these masquerades showcased the community’s deep-rooted values,
            drawing visitors and cultural enthusiasts alike.
          </p>

          <div className="masq-gallery">
            {masqueradeImages.map((src, index) => (
              <figure key={index} className="masq-image-wrapper">
                <img src={src} alt={`Ijede Masquerade ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        {/* Healthcare */}
        <section className="about-section phc-section">
          <h2>Healthcare Facilities</h2>
          <div className="card-grid">
            <article className="info-card">
              <img src={IjdHospital} alt="Ijede General Hospital" loading="lazy" />
              <h3>General Hospital, Ijede</h3>
              <p>
                Commissioned in 1983, the General Hospital serves as a major healthcare center,
                offering maternity, emergency, and surgery services for residents.
              </p>
            </article>

            <article className="info-card">
              <img src={PHC} alt="Primary Healthcare Centre" loading="lazy" />
              <h3>Primary Healthcare Centres</h3>
              <p>
                PHCs across Ijede LCDA provide maternal and child health, vaccinations, and preventive care —
                ensuring every household has access to essential healthcare.
              </p>
            </article>
          </div>
        </section>

        {/* Markets */}
        <section className="about-section market-section">
          <h2>Markets & Local Economy</h2>
          <div className="card-grid">
            <article className="info-card">
              <img src={Market} alt="Obun-Ale Market" loading="lazy" />
              <h3>Obun-Ale Market</h3>
              <p>
                A vibrant commercial hub offering everything from fish and fabrics to household goods,
                rebuilt with better drainage and modern stalls.
              </p>
            </article>

            <article className="info-card">
              <img src={Market1} alt="Local Markets" loading="lazy" />
              <h3>Community Markets</h3>
              <p>
                Smaller markets empower artisans, traders, and local entrepreneurs, helping drive inclusive economic growth.
              </p>
            </article>
          </div>
        </section>

        {/* Education */}
        <section className="about-section education-section">
          <h2>Education & Community Development</h2>
          <p>
            Education remains a cornerstone of Ijede’s growth. Schools across the LCDA have benefitted from renovation,
            new classroom blocks, and improved learning resources.
          </p>

          <div className="school-gallery">
            {schoolImages.map((src, index) => (
              <figure key={index} className="school-image-wrapper">
                <img src={src} alt={`Ijede School ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        {/* Tourism */}
        <section className="about-section tourism-section">
          <h2>Tourism & Ijede Tourism Day 2025</h2>
          <p>
            In September 2025, Ijede LCDA celebrated its first-ever “Ijede Tourism Day” in collaboration with
            Lagos State Ferry Service, showcasing culture, crafts, and eco-tourism potential.
          </p>
          <p>
            The event brought together traditional performers, local artisans, and community leaders —
            all under the theme of “Sustainable Tourism and Cultural Unity”.
          </p>

          <div className="tour-gallery">
            {tourismImages.map((src, index) => (
              <figure key={index} className="tour-image-wrapper">
                <img src={src} alt={`Ijede Tourism ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        {/* Governance */}
        <section className="about-section governance-section">
          <h2>Governance & Infrastructure</h2>
          <p>
            The LCDA’s administration prioritizes transparency, accountability, and participatory governance.
            Road rehabilitation, lighting projects, and drainage systems remain central to ongoing progress.
          </p>
        </section>
      </main>

      <div className="footer-wrapper"><Footer /></div>
    </div>
  );
}
