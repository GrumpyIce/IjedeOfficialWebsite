import React from "react";
import "./Newsletter.css";
import Masq1 from "./assets/masq1.jpg"; // Tourism Day
import Cowslo from "./assets/cowslo.jpg"; // COWLSO image import

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Highlight of the Month</h2>

        {/* Tourism Day */}
        <div className="newsletter-card">
          <img
            src={Masq1}
            alt="Ijede Tourism Day 2025"
            className="newsletter-image"
          />
          <div className="newsletter-content">
            <h3>Ijede Tourism Day 2025: Celebrating Culture and Progress</h3>
            <p className="newsletter-date">September 30, 2025</p>
            <p>
              Ijede LCDA hosted its maiden Tourism Day celebration in partnership with
              Lagos Ferry Services (LAGFERRY). The event featured cultural performances,
              art exhibitions, and guided tours along Ijede’s coastal routes, showcasing
              the rich heritage and tourism potential of the community.
            </p>
          </div>
        </div>

        {/* COWLSO */}
        <div className="newsletter-card">
          <img
            src={Cowslo}
            alt="COWLSO 2025"
            className="newsletter-image"
          />
          <div className="newsletter-content">
            <h3>COWLSO 2025: Women in Leadership</h3>
            <p className="newsletter-date">October 10, 2025</p>
            <p>
              The Executive Chairman of Ijede LCDA joined other women leaders at the
              2025 Women’s Leadership Summit (COWLSO). The summit emphasized collaboration,
              mentorship, and community engagement for grassroots development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
