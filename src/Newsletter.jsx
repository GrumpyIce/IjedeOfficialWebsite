import React from "react";
import "./Newsletter.css";
import CommHigh from "./assets/comm high.jpg"; // New Commissioning Image
import Cowslo from "./assets/cowslo.jpg"; // COWLSO image import

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Highlight of the Month</h2>

        {/* Commissioning of Legislative & Customary Court Building */}
        <div className="newsletter-card">
          <img
            src={CommHigh}
            alt="Commissioning of Legislative and Customary Court Building"
            className="newsletter-image"
          />
          <div className="newsletter-content">
            <h3>
              Ijede LCDA Set to Commission New Legislative and Customary Court Building
            </h3>
            <p className="newsletter-date">November 26, 2025</p>
            <p>
              Ijede LCDA is set to commission its newly constructed Legislative and
              Customary Court Building under the leadership of the Executive Chairman,
              Hon. Motunrayo Gbadebo-Alogba.  
              <br /><br />
              The modern structure is designed to enhance justice administration and
              legislative operations within the community. This development marks a
              significant step forward in strengthening governance, improving access to
              legal services, and supporting institutional growth for the people of Ijede.
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
