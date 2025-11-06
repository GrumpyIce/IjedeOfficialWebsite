// src/AchievementsPage.jsx
import React, { useState } from "react";
import "./AchievementsPage.css";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AchievementsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Works & Infrastructure",
      content: [
        "Palliative on Ijede road from Oke-Eletu to Abule-Eko and Welcome bus stop.",
        "Grading of internal roads stretching from Oke-Eletu to Abule-Eko bus stop, Ijede Junction to Wema Bank, Ilupeju community to Oko-Ope road, Scriptures Union camp, and Igbe community road.",
        "Rehabilitation of Falilat Ajoke Saalu's Street.",
        "Rehabilitation of Mayflower Street.",
        "Construction of borehole water systems in various locations, including the Ipakan community (Ward A), Okeigbeyin Street (Ward B), Falilat Ajoke Salu Street (Ward C), and Ole-Eletu opposite the Lukham bus stop (Ward D).",
        "Desilting of drainage systems within the LCDA to stop incessant flooding.",
        "Complete renovation and provision of a complete furniture set in the Ijede student library.",
        "Complete renovation and tiling of Ijede town hall.",
        "Complete renovation of the Egbin kingdom town hall.",
        "Complete renovation of Oke-Eletu Primary Healthcare Center (PHC).",
        "Complete installation of solar-packed street lights in Ipakan community (Ward A), Aiyegbami to Okegbehin Street (Ward B), Ijede Junction to Oke-Oyinbo Street (Ward C), and Igbopa (Ward D).",
        "Facilitated the Solar Street light installation at Adetona Bello Close, Ile Omi, Ijede.",
        "Complete construction of the staff canteen and sick bay on the council premises.",
        "Complete construction of culvert at Idera Junction.",
        "Establishment of Ijede Central Motor Park, Market, and toilet facilities at Ile-Omi.",
        "Ongoing construction of the Legislative and Customary Court Complex.",
        "Facilitated the complete perimeter fencing of an Anglican primary school.",
        "Facilitated the complete rehabilitation of a block of 2 classrooms in the Methodist Primary School Oke-Eletu.",
        "Ongoing construction of Oremeta (Folashade Ibiwunmi) street, Igbopa Ijede, with a complete drainage system.",
        "Facilitated the complete renovation of Obun-Ale market in Ijede.",
        "Facilitated the complete rehabilitation of Sholumade Street, Eleuku Street, and Olutusin Street to the Ijede Garage Roundabout.",
        "Facilitated the ongoing road construction of Ayubu Bashorun Street, Ilupeju, Ijede.",
        "Facilitated the ongoing road construction from Abule-Eko to Ewu-Owa.",
        "Facilitated the construction of one side drainage system at Nureni Adeshola Street, Abule-Eko road Ijede."
      ],
    },
    {
      title: "Health Sector",
      content: [
        "Purchase of a new Ambulance for the Oke-Eletu primary healthcare center.",
        "Sensitization and distribution of mosquito nets to nursing mothers on World Malaria Day in Oke-Eletu PHC.",
        "Community flag-off for Ilera-Eko and free distribution of drugs held at the council premises for all residents.",
        "Sensitization and awareness of Breast cancer held at Oke-Eletu PHC for nursing mothers and pregnant women.",
        "Medical outreach/sensitization on World Mental Health Day.",
        "Community outreach targeted on Zero Hepatitis, blood pressure, sugar level checks, breast cancer screening for adults and children.",
        "Sensitization on the benefits of exclusive breastfeeding held at Oke-Eletu PHC for nursing mothers.",
        "Medical Outreach/JIGI BOLA, on Free Eye screening and free glasses."
      ],
    },
    {
      title: "Education",
      content: [
        "Yearly distribution of UTME/JAMB forms to indigent students.",
        "Annual distribution of back-to-school writing materials and uniforms to public school pupils.",
        "Organizes Scrabble training in public primary and secondary schools.",
        "Organized Chess training for primary and secondary school children.",
        "Provision of School intervention fund for all public primary schools within Ijede LCDA.",
        "Annual Financial support to all primary schools within Ijede LCDA for inter-house sports.",
        "Complete construction and commissioning of the first model primary school of two blocks of six classrooms, with an Office and ICT Training Lab in Igbe-Ogunro Community.",
        "Presentation of one million naira to Mrs. Azeezat Rufai, the best graduating student from the Department of Biochemistry at Lagos State University with a First Class (CGPA) of 4.74 for the 2021/2022 academic session.",
        "Sponsoring Outstanding Tertiary Institution Students to Rotary Youth Leadership Award (RYLA).",
        "Sensitization on the effects of drug abuse amongst youths in the society held in all public secondary schools within the LCDA."
      ],
    },
    {
      title: "Environmental / Social Intervention / Youth Empowerment",
      content: [
        "Recruitment and training of local security bodies (JTF) within the community to promote safety.",
        "Officially signed the establishment of the local security Joint Task Force (JTF).",
        "Purchase of vehicles for political office holders.",
        "Refurbishment of the Alajede-in council chieftaincy bus.",
        "Yearly tree planting exercise.",
        "Yearly practical skill training and empowerment of thousands of youths with beneficiaries handed start-up kits.",
        "Partnered with Lagos State Waterways Authority (LASWA) on training for youth on recycling water hyacinths.",
        "Quarterly distribution of cash and food palliative to residents of Ijede LCDA.",
        "Distribution of Tunrayo Traders' market money initiative to residents through WEMA bank.",
        "Distribution of life jackets through LASWA to waterways passengers onboard at various jetty locations within the LCDA.",
        "Yearly presentation of cash gifts and baby materials to the first baby of the year in Ijede General Hospital and PHCs with the LCDA.",
        "Quarterly fumigation of Ijede General Hospital and PHCs within the LCDA.",
        "Facilitated jobs for six indigenes at the Lagos State Teaching Service Commission."
      ],
    },
    {
      title: "General Staff Welfare",
      content: [
        "Presentation of coaster bus to the Nigeria Union of Local Government Employees (NULGE) in Ijede LCDA.",
        "Yearly workers forum and send forth a program for retirees.",
        "General financial assistance to needy council staff."
      ],
    },
  ];

  return (
    <>
      {/* ✅ Full-width Topbar & Navbar like Home */}
      <Topbar />
      <Navbar />

      {/* Page Content */}
      <div className="achievements-page">
        <Link to="/" className="back-home-btn">Back to Home</Link>

        <div className="achievements-hero">
          <h1>4 Years in Office: Executive Chairman Scorecard</h1>
          <p className="quote">
            “Leadership is the capacity to translate a vision into reality.” – Warren Bennis
          </p>
          <p className="intro">
            Hon. Motunrayo Gbadebo-Alogba resumed office on Tuesday, July 27th, 2021. Her strategic policy framework
            was anchored on education, economy, youth & women development, infrastructure, health, security, and partnership.
          </p>
        </div>

       {/* Collapsible Sections */}
<div className="achievements-sections">
  {sections.map((section, index) => (
    <div key={index} className="achievement-section">
      <button
        className={`section-header ${activeSection === index ? "active" : ""}`}
        onClick={() => toggleSection(index)}
        aria-expanded={activeSection === index}
        aria-controls={`section-content-${index}`}
      >
        {section.title}
        <span className="toggle-icon">
          {activeSection === index ? "−" : "+"}
        </span>
      </button>

      <div
        id={`section-content-${index}`}
        className={`section-content ${activeSection === index ? "open" : ""}`}
      >
        <ul>
          {section.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
      </div>

      {/* ✅ Footer moved to the bottom */}
      <Footer />
    </>
  );
};

export default AchievementsPage;
