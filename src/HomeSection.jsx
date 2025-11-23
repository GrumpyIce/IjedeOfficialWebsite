// // src/HomeSection.jsx
// import React, { useEffect, useRef, useState } from "react";
// import "./HomeSection.css"; // Combined CSS
// import "./services.css"; // Optional if extra styling for cards

// const services = [
//   {
//     title: "Marriage Services",
//     desc: "Legal marriage registrations, licensing, and wedding documentation. Walk-in and appointment options available.",
//     cta: "Request Appointment",
//     img: "https://images.pexels.com/photos/34752673/pexels-photo-34752673.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Birth Certificate Registration",
//     desc: "Register births quickly for newborns and late registrations. Assistance with required documents and forms.",
//     cta: "Start Registration",
//     img: "https://images.pexels.com/photos/34674402/pexels-photo-34674402.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "NIN Registration",
//     desc: "Support for National Identification Number (NIN) enrolment and retrieval services — guidance and appointment booking.",
//     cta: "Book NIN Slot",
//     img: "https://images.pexels.com/photos/33900359/pexels-photo-33900359.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Other Civic Services",
//     desc: "Vendor permits, local permits, community welfare and more offered by Ijede LCDA.",
//     cta: "Request Service",
//     img: "https://images.pexels.com/photos/29083284/pexels-photo-29083284.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

// function ServiceCard({ service }) {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in");
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);

//     return () => observer.disconnect();
//   }, []);

//   const handleCTA = () => alert(`Requesting: ${service.title}`);

//   return (
//     <article className="service-card" ref={cardRef} role="listitem" tabIndex="0">
//       <div className="service-image">
//         <img src={service.img} alt={service.title} loading="lazy" />
//         <div className="image-overlay"></div>
//       </div>
//       <div className="service-content">
//         <h3>{service.title}</h3>
//         <p>{service.desc}</p>
//         <div className="card-actions">
//           <button className="btn-outline" onClick={handleCTA}>{service.cta}</button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function HomeSection() {
//   const sectionRef = useRef(null);
//   const [currentHero, setCurrentHero] = useState(0);

//   const heroImages = [
//     "https://images.pexels.com/photos/34752673/pexels-photo-34752673.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/34674402/pexels-photo-34674402.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/33900359/pexels-photo-33900359.jpeg?auto=compress&cs=tinysrgb&w=800",
//   ];

//   // Hero slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHero((prev) => (prev + 1) % heroImages.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Fade-in for the whole section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in");
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="home-section" ref={sectionRef}>
//       {/* Hero / Announcement Slideshow */}
// <section
//   className="hero fade-in"
//   style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
// >
//   <div className="hero-overlay" />
//   <div className="hero-content">
//     <h2>At Ijede LCDA, we offer essential civic services</h2>
//     <p>
//       Marriage registration, NIN enrolment, birth certificates, and more — 
//       serving our community efficiently.
//     </p>
//   </div>
// </section>


//       {/* Services Section */}
//       <section className="services-section" aria-labelledby="our-services-title">
//         <div className="container">
//           <header className="services-header">
//             <h1 id="our-services-title">Our Services</h1>
//             <p className="lead">
//               Ijede LCDA is committed to serving our community by providing essential public services.
//             </p>
//           </header>

//           <div className="services-grid" role="list">
//             {services.map((s) => <ServiceCard key={s.title} service={s} />)}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// src/HomeSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeSection.css";
import "./services.css";

const services = [
  {
    title: "Marriage Services",
    desc: "Legal marriage registrations, licensing, and wedding documentation. Walk-in and appointment options available.",
    cta: "Request Appointment",
    img: "https://images.pexels.com/photos/34752673/pexels-photo-34752673.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Birth Certificate Registration",
    desc: "Register births quickly for newborns and late registrations. Assistance with required documents and forms.",
    cta: "Start Registration",
    img: "https://images.pexels.com/photos/34674402/pexels-photo-34674402.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "NIN Registration",
    desc: "Support for National Identification Number (NIN) enrolment and retrieval services — guidance and appointment booking.",
    cta: "Book NIN Slot",
    img: "https://images.pexels.com/photos/33900359/pexels-photo-33900359.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Other Civic Services",
    desc: "Vendor permits, local permits, community welfare and more offered by Ijede LCDA.",
    cta: "Request Service",
    img: "https://images.pexels.com/photos/29083284/pexels-photo-29083284.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ServiceCard({ service, showToast, navigate }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCTA = () => {
    showToast("Redirecting to Contact page...");
    setTimeout(() => navigate("/contact"), 1000); // 1 second delay
  };

  return (
    <article className="service-card" ref={cardRef} role="listitem" tabIndex="0">
      <div className="service-image">
        <img src={service.img} alt={service.title} loading="lazy" />
        <div className="image-overlay"></div>
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <div className="card-actions">
          <button className="btn-outline" onClick={handleCTA}>
            {service.cta}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function HomeSection() {
  const sectionRef = useRef(null);
  const [currentHero, setCurrentHero] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToastMsg, setShowToastMsg] = useState(false);
  const navigate = useNavigate();

  const heroImages = [
    "https://images.pexels.com/photos/34752673/pexels-photo-34752673.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34674402/pexels-photo-34674402.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/33900359/pexels-photo-33900359.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Fade-in for the whole section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setShowToastMsg(true);
    setTimeout(() => setShowToastMsg(false), 2000); // Toast stays 2 seconds
  };

  return (
    <div className="home-section" ref={sectionRef}>
      {/* Hero / Announcement Slideshow */}
      <section
        className="hero fade-in"
        style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h2>At Ijede LCDA, we offer essential civic services</h2>
          <p>
            Marriage registration, NIN enrolment, birth certificates, and more — 
            serving our community efficiently.
          </p>
          <Link to="/contact" className="hero-cta btn-outline">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" aria-labelledby="our-services-title">
        <div className="container">
          <header className="services-header">
            <h1 id="our-services-title">Our Services</h1>
            <p className="lead">
              Ijede LCDA is committed to serving our community by providing essential public services.
            </p>
          </header>

          <div className="services-grid" role="list">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} showToast={showToast} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToastMsg && <div className="toast">{toastMessage}</div>}
    </div>
  );
}
