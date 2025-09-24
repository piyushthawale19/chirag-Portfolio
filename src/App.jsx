import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { SkillsSection } from "./pages/SkillsSection";
import { ProjectSection } from "./pages/ProjectSection";


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20"> {/* padding so content isn’t hidden behind navbar */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="project">
          <ProjectSection />
        </section>

      </div>
    </div>
  );
}

export default App;
