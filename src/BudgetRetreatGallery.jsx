import React, { useState, useEffect } from "react";
import "./BudgetRetreatGallery.css";

import br1 from "./assets/br1.jpeg";
import br2 from "./assets/br2.jpeg";
import br3 from "./assets/br3.jpeg";
import br4 from "./assets/br4.jpeg";
import br5 from "./assets/br5.jpeg";
import br6 from "./assets/br6.jpeg";
import br7 from "./assets/br7.jpeg";

const slides = [br1, br2, br3, br4, br5, br6, br7];

export default function BudgetRetreatGallery() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="budget-retreat-section">
      {/* Section Heading */}
      <h2 className="budget-retreat-heading">
        🏛️ Y2026 Budget Retreat Highlights
      </h2>

      {/* Short description below heading */}
      <p className="budget-retreat-description">
        A gathering of key stakeholders and officials to review the year’s budget priorities
        and chart a path for sustainable development.
      </p>

      {/* Gallery */}
      <div className="budget-retreat-gallery">
        {slides.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Budget Retreat ${idx + 1}`}
            className={`gallery-image ${idx === current ? "active" : ""}`}
          />
        ))}

        {/* Slide counter */}
        <div className="gallery-indicator">
          {current + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
