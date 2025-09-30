import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import SolutionsStrip from "./Components/SolutionsStrip";
import ProjectsSection from "./Components/ProjectSection";
import ExperienceSection from "./Components/ExperienceSection";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);
  // global hover spotlight coords for cards
  useEffect(() => {
    const handler = (e) => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
          <Loading done={loaded} />
    <main className="min-h-screen bg-neutral-950 font-sans text-white">
      <HeroSection />
      <NavBar />
      <AboutSection />
      <Skills/>
      <SolutionsStrip />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
    </>

  );
}