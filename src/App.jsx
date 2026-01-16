import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import HeroSection from "./Pages/LandingPage";
import ProjectsSection from "./Pages/ProjectSection";
import AboutSection from "./Pages/AboutSection";
import ContactSection from "./Pages/ContactSection";
import Footer from "./Components/Footer";
import Skills from "./Pages/Skills";
import LearningJourney from "./Pages/JourneySection";

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
        <Skills />
        <LearningJourney />

        <ProjectsSection />

        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
