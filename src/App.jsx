import React from "react";
import { Routes, Route } from "react-router-dom";
import IjedeLcda from "./IjedeLcda";
import ProjectsPage from "./ProjectsPage";
import AchievementsPage from "./AchievementsPage.jsx";
import IjedeAbout from "./IjedeAbout.jsx"; 
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Fix scroll on route change */}
      <Routes>
        <Route path="/" element={<IjedeLcda />} />
        <Route path="/about" element={<IjedeAbout />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </>
  );
}

export default App;
