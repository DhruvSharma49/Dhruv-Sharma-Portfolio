import React from "react";
import Container from "./Container";

const items = [
  { role: "Senior Front‑End Engineer", at: "Studio XYZ", time: "2023 — Present", points: ["Led design‑system rebuild", "Cut LCP by 35%", "Integrated 3D hero"] },
  { role: "UI Engineer", at: "Acme Co.", time: "2021 — 2023", points: ["Built analytics suite", "Mentored devs", "Improved a11y score"] },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-neutral-950 py-16 text-white overflow-hidden">
      
      {/* Top Half Background Image */}
<div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=2070&q=80"
    alt="Developer Background"
    className="w-full h-full object-cover"
  />
  {/* Gradient fade to bottom */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
</div>


      {/* Content */}
      <Container className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
        <div className="mt-8 space-y-6">
          {items.map((it) => (
            <div key={it.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{it.role} • <span className="text-white/70">{it.at}</span></h3>
                <span className="text-sm text-white/60">{it.time}</span>
              </div>
              <ul className="mt-3 list-inside list-disc text-sm text-white/80">
                {it.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
