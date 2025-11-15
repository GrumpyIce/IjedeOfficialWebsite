// // src/IjedeLcda.jsx
// import React from "react";
// import Logo from "./assets/ijede-logo.jpg"; // <-- import your logo here
// import "./IjedeLcda.css";

// export default function IjedeLcda() {
//   return (
//     <div className="ijede-container">
//       {/* Navbar */}
//       <header className="navbar">
//         <nav className="nav-content">
//           <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
//           <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#campaign">Campaign</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#achievements">Achievements</a></li>
//             <li><a href="#schools">Schools</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="hero" style={{ backgroundImage: `url(${Logo})` }}>
//         <div className="hero-overlay"></div>
//         <div className="hero-content">
//           <h2>Welcome to Ijede LCDA</h2>
//           <p>Building a stronger, progressive, and united community</p>
//           <a href="#mission-vision" className="hero-button">Learn More</a>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section id="mission-vision" className="mission-vision">
//         <div className="mission-image">
//           <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Community" />
//           <div className="mission-overlay"></div>
//         </div>
//         <div className="mission-text">
//           <h2>Mission & Vision</h2>
//           <p>Our mission is to deliver sustainable development, improve community welfare, and foster unity among the people of Ijede LCDA.</p>
//           <p>Our vision is to make Ijede a model community in Lagos State — one that leads in innovation, education, and social welfare.</p>
//         </div>
//       </section>

//       {/* About the Chairman */}
//       <section id="about-chairman" className="chairman">
//         <div className="chairman-image">
//           <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Hon Motunrayo Gbadebo Alogba" />
//         </div>
//         <div className="chairman-text">
//           <h2>Hon. Motunrayo Gbadebo Alogba</h2>
//           <p>The Executive Chairman of Ijede LCDA, a visionary leader dedicated to driving community growth, youth empowerment, and infrastructural development for the people of Ijede.</p>
//           <div className="chairman-buttons">
//             <a href="#">Learn More</a>
//             <a href="#projects" className="green-btn">View Projects</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// src/IjedeLcda.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom"; 
// import Logo from "./assets/ijede-logo.jpg"; 
// import HerBoldImage from "./assets/her bold image.jpg"; 
// import IjdBuilding from "./assets/ijd building.jpg"; 
// import "./IjedeLcda.css";

// export default function IjedeLcda() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="ijede-container">
//       {/* Navbar */}
//       <header className="navbar">
//         <nav className="nav-content">
//           <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/projects">Projects</Link></li>
//             <li><Link to="/achievements">Achievements</Link></li>
//             <li><Link to="/schools">Schools</Link></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="hero zoom-bg"
//         style={{ backgroundImage: `url(${Logo})` }}
//       >
//         <div className="hero-overlay" />
//         <div className="hero-content fade-in">
//           <h2>Welcome to Ijede LCDA</h2>
//           <p>Building a stronger, progressive, and united community</p>
//           <a href="#welcome-message" className="hero-button">Discover More</a>
//         </div>
//       </section>

//       {/* Welcome Message Section */}
//       <section id="welcome-message" className="welcome-message fade-in">
//         <div className="welcome-box">
//           <h2>Message from the Executive Chairman</h2>
//           <p>
//             Dear Residents and Visitors, <br /><br />
//             It is my honor to welcome you to the official portal of Ijede Local Council Development Area.
//             Our mission is to create a vibrant, empowered, and resilient community where every citizen has
//             the opportunity to thrive. Over the past four years, our administration has prioritized education,
//             infrastructure, healthcare, youth and women empowerment, environmental sustainability, and
//             innovative governance. <br /><br />
//             This platform is designed to connect, inform, and engage our community. You will find comprehensive
//             updates on our projects, programs, and initiatives, along with resources and opportunities to
//             participate in shaping the future of Ijede LCDA. <br /><br />
//             Together, we are building a legacy of progress, unity, and excellence. Your feedback, support,
//             and active participation are invaluable as we continue this journey toward a brighter tomorrow.
//           </p>
//           <Link to="/achievements" className="green-btn">Explore Achievements</Link>
//         </div>
//       </section>


//  {/* About the Chairman */}
// <section id="about-chairman" className="chairman fade-in">
//   <div className="chairman-image">
//     <img src={HerBoldImage} alt="Hon Motunrayo Gbadebo Alogba" />
//   </div>

//   <div className="chairman-text">
//     <h2>Hon. Motunrayo Gbadebo Alogba</h2>

//     {/* short intro with inline More button */}
//     <p className="chairman-intro">
//       The Executive Chairman of Ijede LCDA, a visionary leader dedicated to driving
//       community growth, youth empowerment, and infrastructural development for the
//       people of Ijede.
//       {!showMore && (
//         <button
//           className="more-btn"
//           onClick={() => setShowMore(true)}
//           aria-expanded="false"
//           aria-controls="chairman-more"
//         >
//           More
//         </button>
//       )}
//     </p>

//     {/* expanded content */}
//     {showMore && (
//       <div className="more-text" id="chairman-more" aria-live="polite">
//         <p>
//           In 2021, Hon. Motunrayo Gbadebo-Alogba assumed the role of Executive Chairman of Ijede LCDA,
//           with a legacy rooted in community development and leadership. She draws inspiration from her
//           philanthropist grandmother, Alhaja Tohebat Amoke Onilenla, and her late mother, Yeye Fausat Gbadebo,
//           a trailblazer who served as the pioneer Executive Chairman of Ijede LCDA and held the position of
//           APC Lagos East Senatorial Woman Leader.
//         </p>

//         <p>
//           Born on April 1, 1990, in Lagos, Nigeria, Motunrayo Gbadebo-Alogba is a Fellow of the Chartered Institute
//           of Local Government and Public Administration of Nigeria. She hails from the esteemed family of Otunba
//           Wasiu Gbadebo and the late Yeye Fausat Gbadebo. Growing up primarily in Ijede and other parts of Ikorodu,
//           she completed her secondary education and earned a Bachelor's degree in Political Science from Lagos
//           State University in 2012 and a Masters in Public Administration at the same institution in 2024.
//         </p>

//         <p>
//           Her professional journey started as an Administrative Officer at the Federal Capital Development Authority,
//           Abuja, during her NYSC program, where Motunrayo showcased her early commitment to service. Before stepping
//           into the political arena, she ventured into entrepreneurship, establishing House of Tweetyz—a fabric sales
//           company specializing in bespoke apparels and fashion merchandising.
//         </p>

//         <p>
//           Prior to her democratic election as Chairman, Motunrayo served as the Vice Chairman of the LCDA while concurrently
//           holding the position of Supervisor for Health and Environment. This dual role highlighted her versatility and
//           commitment to multifaceted community leadership.
//         </p>

//         <p>
//           Beyond her official responsibilities, Motunrayo is a devoted philanthropist, extending unwavering support to the needy
//           and vulnerable, with a particular focus on women and children. Her tireless efforts in community welfare have left an
//           indelible mark on Ijede and its surrounding areas.
//         </p>

//         <p>
//           Motunrayo Gbadebo-Alogba stands as a dynamic figure, skillfully navigating the realms of politics and entrepreneurship for the
//           collective betterment of her community. In addition to her professional endeavors, she finds joy in her marriage and the blessing
//           of beautiful children.
//         </p>

//         {/* Less button */}
//         <div className="less-wrap">
//           <button
//             className="more-btn less"
//             onClick={() => setShowMore(false)}
//             aria-expanded="true"
//             aria-controls="chairman-more"
//           >
//             Less
//           </button>
//         </div>
//       </div>
//     )}

//     <div className="chairman-buttons">
//       <Link to="/projects" className="green-btn">View Projects</Link>
//     </div>
//   </div>
// </section>


//       {/* Mission & Vision */}
//       <section id="mission-vision" className="mission-vision fade-in">
//         <div className="mission-image">
//           <img src={IjdBuilding} alt="Ijede LCDA Building" />
//         </div>
//         <div className="mission-text">
//           <h2>Mission & Vision</h2>
//           <p>
//             Our mission is to deliver sustainable development, improve community welfare,
//             and foster unity among the people of Ijede LCDA.
//           </p>
//           <p>
//             Our vision is to make Ijede a model community in Lagos State — one that leads in
//             innovation, education, and social welfare.
//           </p>
//         </div>
//       </section>

//     </div>
//   );
// }



// // src/IjedeLcda.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; 
// import Logo from "./assets/ijede-logo.jpg"; 
// import HerBoldImage from "./assets/her bold image.jpg"; 
// import IjdBuilding from "./assets/ijd building.jpg"; 
// import Car3 from "./assets/car3.jpg"; 
// import "./IjedeLcda.css";
// import Footer from "./Footer"; // ✅ Import Footer

// export default function IjedeLcda() {
//   const [showMore, setShowMore] = useState(false);
//   const [currentHero, setCurrentHero] = useState(0);
//   const [scrolled, setScrolled] = useState(false);

//   const heroImages = [Logo, HerBoldImage, Car3];

//   // Hero slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHero((prev) => (prev + 1) % heroImages.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Scroll detection for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="ijede-container">
//       {/* ✅ Sticky Top Info Bar */}
//       <div className="topbar">
//         <div className="topbar-left">
//           Official Website of Ijede Local Council Development Area of Lagos State
//         </div>
//         <div className="topbar-right">
//           <span className="topbar-icon">📧</span>
//           <a href="mailto:info@ijedelcda.lg.gov.ng">info@ijedelcda.lg.gov.ng</a>
//         </div>
//       </div>

//       {/* ✅ Advanced Navbar directly below Topbar */}
//       <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
//         <nav className="nav-content">
//           <div className="nav-left">
//             <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
//             <span className="brand-name">Ijede LCDA</span>
//           </div>
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/projects">Projects</Link></li>
//             <li><Link to="/achievements">Achievements</Link></li>
//             <li><Link to="/schools">Schools</Link></li>
//           </ul>
//           <div className="nav-right">
//             <a href="#contact" className="nav-btn">Contact Us</a>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className={`hero zoom-bg ${currentHero === 0 ? "blur-bg" : ""}`}
//         style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
//       >
//         <div className="hero-overlay" />
//         {currentHero === 0 && (
//           <div className="hero-content fade-in">
//             <h2>Welcome to Ijede LCDA</h2>
//             <p>Building a stronger, progressive, and united community</p>
//             <a href="#welcome-message" className="hero-button">Discover More</a>
//           </div>
//         )}
//       </section>

//       {/* Welcome Message Section */}
//       <section id="welcome-message" className="welcome-message fade-in bounce">
//         <div className="welcome-box">
//           <h2>Message from the Executive Chairman</h2>
//           <p>
//             Dear Residents and Visitors, <br /><br />
//             It is my honor to welcome you to the official portal of Ijede Local Council Development Area.
//             Our mission is to create a vibrant, empowered, and resilient community where every citizen has
//             the opportunity to thrive. Over the past four years, our administration has prioritized education,
//             infrastructure, healthcare, youth and women empowerment, environmental sustainability, and
//             innovative governance. <br /><br />
//             This platform is designed to connect, inform, and engage our community. You will find comprehensive
//             updates on our projects, programs, and initiatives, along with resources and opportunities to
//             participate in shaping the future of Ijede LCDA. <br /><br />
//             Together, we are building a legacy of progress, unity, and excellence. Your feedback, support,
//             and active participation are invaluable as we continue this journey toward a brighter tomorrow.
//           </p>
//           <Link to="/achievements" className="green-btn">Explore Achievements</Link>
//         </div>
//       </section>

//       {/* About the Chairman */}
//       <section id="about-chairman" className="chairman fade-in">
//         <div className="chairman-image">
//           <img src={HerBoldImage} alt="Hon Motunrayo Gbadebo Alogba" />
//         </div>

//         <div className="chairman-text">
//           <h2>Hon. Motunrayo Gbadebo Alogba</h2>
//           <p className="chairman-intro">
//             The Executive Chairman of Ijede LCDA, a visionary leader dedicated to driving
//             community growth, youth empowerment, and infrastructural development for the
//             people of Ijede.
//             {!showMore && (
//               <button
//                 className="more-btn"
//                 onClick={() => setShowMore(true)}
//                 aria-expanded="false"
//                 aria-controls="chairman-more"
//               >
//                 More
//               </button>
//             )}
//           </p>

//           {showMore && (
//             <div className="more-text" id="chairman-more" aria-live="polite">
//               <p>
//                 In 2021, Hon. Motunrayo Gbadebo-Alogba assumed the role of Executive Chairman of Ijede LCDA,
//                 with a legacy rooted in community development and leadership. She draws inspiration from her
//                 philanthropist grandmother, Alhaja Tohebat Amoke Onilenla, and her late mother, Yeye Fausat Gbadebo,
//                 a trailblazer who served as the pioneer Executive Chairman of Ijede LCDA and held the position of
//                 APC Lagos East Senatorial Woman Leader.
//               </p>
//               <p>
//                 Born on April 1, 1990, in Lagos, Nigeria, Motunrayo Gbadebo-Alogba is a Fellow of the Chartered Institute
//                 of Local Government and Public Administration of Nigeria. She hails from the esteemed family of Otunba
//                 Wasiu Gbadebo and the late Yeye Fausat Gbadebo. Growing up primarily in Ijede and other parts of Ikorodu,
//                 she completed her secondary education and earned a Bachelor's degree in Political Science from Lagos
//                 State University in 2012 and a Masters in Public Administration at the same institution in 2024.
//               </p>
//               <p>
//                 Her professional journey started as an Administrative Officer at the Federal Capital Development Authority,
//                 Abuja, during her NYSC program, where Motunrayo showcased her early commitment to service. Before stepping
//                 into the political arena, she ventured into entrepreneurship, establishing House of Tweetyz—a fabric sales
//                 company specializing in bespoke apparels and fashion merchandising.
//               </p>
//               <p>
//                 Prior to her democratic election as Chairman, Motunrayo served as the Vice Chairman of the LCDA while concurrently
//                 holding the position of Supervisor for Health and Environment. This dual role highlighted her versatility and
//                 commitment to multifaceted community leadership.
//               </p>
//               <p>
//                 Beyond her official responsibilities, Motunrayo is a devoted philanthropist, extending unwavering support to the needy
//                 and vulnerable, with a particular focus on women and children. Her tireless efforts in community welfare have left an
//                 indelible mark on Ijede and its surrounding areas.
//               </p>
//               <p>
//                 Motunrayo Gbadebo-Alogba stands as a dynamic figure, skillfully navigating the realms of politics and entrepreneurship for the
//                 collective betterment of her community. In addition to her professional endeavors, she finds joy in her marriage and the blessing
//                 of beautiful children.
//               </p>
//               <div className="less-wrap">
//                 <button
//                   className="more-btn less"
//                   onClick={() => setShowMore(false)}
//                   aria-expanded="true"
//                   aria-controls="chairman-more"
//                 >
//                   Less
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="chairman-buttons">
//             <Link to="/projects" className="green-btn">View Projects</Link>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section id="mission-vision" className="mission-vision fade-in">
//         <div className="mission-image">
//           <img src={IjdBuilding} alt="Ijede LCDA Building" />
//         </div>
//         <div className="mission-text">
//           <h2>Mission & Vision</h2>
//           <p>
//             Our mission is to deliver sustainable development, improve community welfare,
//             and foster unity among the people of Ijede LCDA.
//           </p>
//           <p>
//             Our vision is to make Ijede a model community in Lagos State — one that leads in
//             innovation, education, and social welfare.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Footer added at bottom */}
//       <Footer />
//     </div>
//   );
// }

// src/IjedeLcda.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; 
// import Logo from "./assets/ijede-logo.jpg"; 
// import HerBoldImage from "./assets/her bold image.jpg"; 
// import IjdBuilding from "./assets/ijd building.jpg"; 
// import Car3 from "./assets/car3.jpg"; 
// import "./IjedeLcda.css";
// import NewsUpdates from "./NewsUpdates";  // ✅ Import News section
// import Footer from "./Footer";            // ✅ Import Footer

// export default function IjedeLcda() {
//   const [showMore, setShowMore] = useState(false);
//   const [currentHero, setCurrentHero] = useState(0);
//   const [scrolled, setScrolled] = useState(false);

//   const heroImages = [Logo, HerBoldImage, Car3];

//   // Hero slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHero((prev) => (prev + 1) % heroImages.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Scroll detection for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="ijede-container">
//       {/* ✅ Sticky Top Info Bar */}
//       <div className="topbar">
//         <div className="topbar-left">
//           Official Website of Ijede Local Council Development Area of Lagos State
//         </div>
//         <div className="topbar-right">
//           <span className="topbar-icon">📧</span>
//           <a href="mailto:info@ijedelcda.lg.gov.ng">info@ijedelcda.lg.gov.ng</a>
//         </div>
//       </div>

//       {/* ✅ Advanced Navbar directly below Topbar */}
//       <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
//         <nav className="nav-content">
//           <div className="nav-left">
//             <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
//             <span className="brand-name">Ijede LCDA</span>
//           </div>
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/projects">Projects</Link></li>
//             <li><Link to="/achievements">Achievements</Link></li>
//             <li><Link to="/schools">Schools</Link></li>
//           </ul>
//           <div className="nav-right">
//             <a href="#contact" className="nav-btn">Contact Us</a>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className={`hero zoom-bg ${currentHero === 0 ? "blur-bg" : ""}`}
//         style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
//       >
//         <div className="hero-overlay" />
//         {currentHero === 0 && (
//           <div className="hero-content fade-in">
//             <h2>Welcome to Ijede LCDA</h2>
//             <p>Building a stronger, progressive, and united community</p>
//             <a href="#welcome-message" className="hero-button">Discover More</a>
//           </div>
//         )}
//       </section>

//       {/* Welcome Message Section */}
//       <section id="welcome-message" className="welcome-message fade-in bounce">
//         <div className="welcome-box">
//           <h2>Message from the Executive Chairman</h2>
//           <p>
//             Dear Residents and Visitors, <br /><br />
//             It is my honor to welcome you to the official portal of Ijede Local Council Development Area.
//             Our mission is to create a vibrant, empowered, and resilient community where every citizen has
//             the opportunity to thrive. Over the past four years, our administration has prioritized education,
//             infrastructure, healthcare, youth and women empowerment, environmental sustainability, and
//             innovative governance. <br /><br />
//             This platform is designed to connect, inform, and engage our community. You will find comprehensive
//             updates on our projects, programs, and initiatives, along with resources and opportunities to
//             participate in shaping the future of Ijede LCDA. <br /><br />
//             Together, we are building a legacy of progress, unity, and excellence. Your feedback, support,
//             and active participation are invaluable as we continue this journey toward a brighter tomorrow.
//           </p>
//           <Link to="/achievements" className="green-btn">Explore Achievements</Link>
//         </div>
//       </section>

//       {/* About the Chairman */}
//       <section id="about-chairman" className="chairman fade-in">
//         <div className="chairman-image">
//           <img src={HerBoldImage} alt="Hon Motunrayo Gbadebo Alogba" />
//         </div>

//         <div className="chairman-text">
//           <h2>Hon. Motunrayo Gbadebo Alogba</h2>
//           <p className="chairman-intro">
//             The Executive Chairman of Ijede LCDA, a visionary leader dedicated to driving
//             community growth, youth empowerment, and infrastructural development for the
//             people of Ijede.
//             {!showMore && (
//               <button
//                 className="more-btn"
//                 onClick={() => setShowMore(true)}
//                 aria-expanded="false"
//                 aria-controls="chairman-more"
//               >
//                 More
//               </button>
//             )}
//           </p>

//           {showMore && (
//             <div className="more-text" id="chairman-more" aria-live="polite">
//               <p>
//                 In 2021, Hon. Motunrayo Gbadebo-Alogba assumed the role of Executive Chairman of Ijede LCDA,
//                 with a legacy rooted in community development and leadership. She draws inspiration from her
//                 philanthropist grandmother, Alhaja Tohebat Amoke Onilenla, and her late mother, Yeye Fausat Gbadebo,
//                 a trailblazer who served as the pioneer Executive Chairman of Ijede LCDA and held the position of
//                 APC Lagos East Senatorial Woman Leader.
//               </p>
//               <p>
//                 Born on April 1, 1990, in Lagos, Nigeria, Motunrayo Gbadebo-Alogba is a Fellow of the Chartered Institute
//                 of Local Government and Public Administration of Nigeria. She hails from the esteemed family of Otunba
//                 Wasiu Gbadebo and the late Yeye Fausat Gbadebo. Growing up primarily in Ijede and other parts of Ikorodu,
//                 she completed her secondary education and earned a Bachelor's degree in Political Science from Lagos
//                 State University in 2012 and a Masters in Public Administration at the same institution in 2024.
//               </p>
//               <p>
//                 Her professional journey started as an Administrative Officer at the Federal Capital Development Authority,
//                 Abuja, during her NYSC program, where Motunrayo showcased her early commitment to service. Before stepping
//                 into the political arena, she ventured into entrepreneurship, establishing House of Tweetyz—a fabric sales
//                 company specializing in bespoke apparels and fashion merchandising.
//               </p>
//               <p>
//                 Prior to her democratic election as Chairman, Motunrayo served as the Vice Chairman of the LCDA while concurrently
//                 holding the position of Supervisor for Health and Environment. This dual role highlighted her versatility and
//                 commitment to multifaceted community leadership.
//               </p>
//               <p>
//                 Beyond her official responsibilities, Motunrayo is a devoted philanthropist, extending unwavering support to the needy
//                 and vulnerable, with a particular focus on women and children. Her tireless efforts in community welfare have left an
//                 indelible mark on Ijede and its surrounding areas.
//               </p>
//               <p>
//                 Motunrayo Gbadebo-Alogba stands as a dynamic figure, skillfully navigating the realms of politics and entrepreneurship for the
//                 collective betterment of her community. In addition to her professional endeavors, she finds joy in her marriage and the blessing
//                 of beautiful children.
//               </p>
//               <div className="less-wrap">
//                 <button
//                   className="more-btn less"
//                   onClick={() => setShowMore(false)}
//                   aria-expanded="true"
//                   aria-controls="chairman-more"
//                 >
//                   Less
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="chairman-buttons">
//             <Link to="/projects" className="green-btn">View Projects</Link>
//           </div>
//         </div>
//       </section>

//      {/* Mission & Vision */}
// <section id="mission-vision" className="mission-vision fade-in">
//   {/* ✅ Text first */}
//   <div className="mission-text">
//     <h2>Mission & Vision</h2>
//     <p>
//       Our mission is to deliver sustainable development, improve community welfare,
//       and foster unity among the people of Ijede LCDA.
//     </p>
//     <p>
//       Our vision is to make Ijede a model community in Lagos State — one that leads in
//       innovation, education, and social welfare.
//     </p>
//   </div>

//   {/* ✅ Image second */}
//   <div className="mission-image">
//     <img src={IjdBuilding} alt="Ijede LCDA Building" />
//   </div>
// </section>


//       {/* ✅ News & Updates Section */}
//       <NewsUpdates />

//       {/* ✅ Footer at bottom */}
//       <Footer />
//     </div>
//   );
// }
// src/IjedeLcda.jsx
// src/IjedeLcda.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/ijede-logo.jpg";
import HerBoldImage from "./assets/her bold image.jpg";
import Leg3 from "./assets/leg3.jpg";
import IjdBuilding from "./assets/ijd building.jpg";
import Car3 from "./assets/car3.jpg";
import "./IjedeLcda.css";
import NewsUpdates from "./NewsUpdates";
import Footer from "./Footer";
import ChairmanSection from "./ChairmanSection";
import Newsletter from "./Newsletter";

export default function IjedeLcda() {
  const [currentHero, setCurrentHero] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const heroImages = [Logo, HerBoldImage, Leg3, Car3];

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <div className="ijede-container">
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="topbar-left">
          Official Website of Ijede Local Council Development Area of Lagos State
        </div>
        <div className="topbar-right">
          <span className="topbar-icon">📧</span>
          <a href="mailto:info@ijedelcda.lg.gov.ng">info@ijedelcda.lg.gov.ng</a>
        </div>
      </div>

      {/* Navbar */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-content">
          {/* Left: Logo + Brand */}
          <div className="nav-left">
            <img src={Logo} alt="Ijede LCDA Logo" className="logo-img" />
            <span className="brand-name">Ijede LCDA</span>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav Links */}
          <ul className={`nav-links ${mobileOpen ? "show" : ""}`}>
            <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setMobileOpen(false)}>Projects</Link></li>
            <li><Link to="/achievements" onClick={() => setMobileOpen(false)}>Achievements</Link></li>
            <li>
              <Link to="/contact" className="nav-btn" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Overlay */}
          {mobileOpen && <div className="nav-overlay" onClick={toggleMobileMenu}></div>}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`hero zoom-bg ${currentHero === 0 ? "blur-bg" : ""}`}
        style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
      >
        <div className="hero-overlay" />
        {currentHero === 0 && (
          <div className="hero-content fade-in">
            <h2>Welcome to Ijede LCDA</h2>
            <p>Building a stronger, progressive, and united community</p>
            <br /><br />
            <a href="#welcome-message" className="hero-button primary-cta">
              Discover More
            </a>
          </div>
        )}
      </section>

      {/* Welcome Message */}
      <section id="welcome-message" className="welcome-message fade-in bounce">
        <div className="welcome-box">
          <h2>Message from the Executive Chairman</h2>
          <p>
            Dear Residents and Visitors, <br /><br />
            Welcome to the official portal of Ijede Local Council Development Area.
            Our mission is to create a vibrant, empowered, and resilient community
            where every citizen has the opportunity to thrive. Our administration
            has prioritized education, infrastructure, healthcare, youth & women
            empowerment, environmental sustainability, and innovative governance.
            <br /><br />
            This platform is designed to connect, inform, and engage our community.
            You will find updates on projects, programs, and initiatives, along with
            resources and opportunities to participate in shaping the future of
            Ijede LCDA.
            <br /><br />
            Together, we are building a legacy of progress, unity, and excellence.
          </p>
          <Link to="/about" className="green-btn">
            Explore About Ijede
          </Link>
        </div>
      </section>

      {/* Chairman Section */}
      <ChairmanSection />

      {/* Mission & Vision */}
      <section id="mission-vision" className="mission-vision fade-in">
        <div className="mission-text">
          <h2>🎯 Mission & 👁️ Vision</h2>
          <p>
            Our mission is to deliver sustainable development, improve community
            welfare, and foster unity among the people of Ijede LCDA.
          </p>
          <p>
            Our vision is to make Ijede a model community in Lagos State — one that
            leads in innovation, education, and social welfare.
          </p>
        </div>
        <div className="mission-image">
          <img src={IjdBuilding} alt="Ijede LCDA Building" loading="lazy" />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* News & Updates */}
      <NewsUpdates />

      {/* Footer */}
      <Footer />
    </div>
  );
}
