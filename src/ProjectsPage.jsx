// src/ProjectsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* Existing Project Images */
import B2S2 from "./assets/b2s2.jpg";
import Back2Sch from "./assets/back2sch.jpg";
import Car1 from "./assets/car1.jpg";
import Car2 from "./assets/car2.jpg";
import Car3 from "./assets/car3.jpg";
import Car4 from "./assets/car4.jpg";
import Classroom1 from "./assets/classroom.jpg";
import Classroom2 from "./assets/classroom2.jpg";
import Commissioning1 from "./assets/commissioning1.jpg";
import Commissioning2 from "./assets/commissioning2.jpg";
import Road1 from "./assets/road.jpg";
import Road2 from "./assets/road2.jpg";

/* Newly added Project images */
import proj1 from "./assets/proj1.jpg";
import proj2 from "./assets/proj2.jpg";
import proj3 from "./assets/proj3.jpg";
import proj4 from "./assets/proj4.jpg";
import proj5 from "./assets/proj5.jpg";
import proj6 from "./assets/proj6.jpg";
import proj7 from "./assets/proj7.jpg";
import proj8 from "./assets/proj8.jpg";

/* Classroom images reused */
import class1 from "./assets/class1.jpg";
import class2 from "./assets/class2.jpg";
import class3 from "./assets/class3.jpg";

/* ✅ Newly added Legislative images */
import leg1 from "./assets/leg1.jpg";
import leg2 from "./assets/leg2.jpg";
import leg3 from "./assets/leg3.jpg";
import leg4 from "./assets/leg4.jpg";
import leg5 from "./assets/leg5.jpg";
import leg6 from "./assets/leg6.jpg";
import leg7 from "./assets/leg7.jpg";

export default function ProjectsPage() {
  const projects = [
    leg1, leg2, leg3, leg4, leg5, leg6, leg7,
     proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8,
    class1, class2, class3,
    B2S2, Back2Sch, Car1, Car2, Car3, Car4,
    Classroom1, Classroom2, Commissioning1, Commissioning2,
    Road1, Road2,
  ];

  return (
    <>
      <Topbar />
      <Navbar />

      <div
        className="projects-page"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div className="back-home" style={{ marginBottom: "40px" }}>
          <Link
            to="/"
            className="back-home-btn"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#00c853",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Back Home
          </Link>
        </div>

        <div className="projects-intro" style={{ marginBottom: "50px" }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Transformational Projects for Ijede LCDA
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
            Since assuming office in July 2021, Hon. Motunrayo Gbadebo-Alogba
            has championed a series of impactful projects designed to uplift
            every ward of Ijede LCDA. Her administration’s focus on{" "}
            <strong>
              infrastructure, education, healthcare, and community development
            </strong>{" "}
            has redefined the face of governance at the grassroots level.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
            From the rehabilitation of critical roads and the installation of
            solar-powered streetlights, to the construction of modern school
            blocks, healthcare centers, and borehole systems, these projects
            stand as a testament to her unwavering dedication to the welfare of
            the people.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
            The gallery below showcases some of these landmark initiatives that
            continue to impact lives positively, foster community growth, and
            secure a brighter future for the people of Ijede LCDA.
          </p>
        </div>

        {/* ✅ Projects Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((img, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                backgroundColor: "#000", // ✅ hides white gaps
                height: "260px",
              }}
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // ✅ fills box neatly
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
