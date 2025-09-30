import React, { useEffect, useState } from "react";
import Container from "./Container";
import Button from "./Button";
import HeroCanvas from "./HeroCanvas";
import ProfilePicture from "../assets/ProfilePicture.jpg";

export default function HeroSection() {
  const counters = [
    { label: "Years Experience", target: 3, suffix: "+" },
    { label: "Projects Completed", target: 25, suffix: "+" },
    { label: "Happy Clients", target: 50, suffix: "+" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  // Mounted state for HeroCanvas
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure top scroll
    window.scrollTo(0, 0);

    // Small delay to let DOM paint → avoid white screen
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increments = counters.map(c => c.target / steps);

    const interval = setInterval(() => {
      setCounts(prev => {
        const next = prev.map((val, i) => {
          const inc = increments[i];
          if (val + inc >= counters[i].target) return counters[i].target;
          return val + inc;
        });
        if (next.every((val, i) => val >= counters[i].target)) clearInterval(interval);
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative isolate bg-neutral-950 pt-28 text-white min-h-screen">
      {/* Background fallback to avoid white screen */}
      <div className="absolute inset-0 bg-neutral-950 z-0 gap-1.5" />

 

      <Container className="relative z-20 grid items-center gap-10 py-16 md:grid-cols-2">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Building elegant, performant web experiences
          </h1>
          <p className="mt-4 text-white/100">
            I’m a front‑end developer crafting product‑grade UIs with motion and 3D flourishes—focused on accessibility and speed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="#projects" className="bg-white text-neutral-900 hover:opacity-90">
              View projects
            </Button>
            <Button as="a" href="#solutions" className="border border-white/20 bg-white/5 text-white hover:bg-white/10">
              What I do
            </Button>
          </div>

          {/* Animated Counters */}
          <div className="mt-10 flex flex-wrap gap-6">
            {counters.map((counter, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  {Math.floor(counts[i])}{counter.suffix}
                </span>
                <span className="mt-1 text-white/70">{counter.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
          <img src={ProfilePicture} alt="Profile" className="w-full h-full object-cover" />
      
        </div>
      </Container>
    </section>
  );
}




