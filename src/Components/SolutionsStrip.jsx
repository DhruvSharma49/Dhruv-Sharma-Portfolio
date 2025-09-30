import React from "react";
import Container from "./Container";

const items = [
  {
    title: "Design Systems",
    desc: "Scalable UI kits with tokens, theming, and accessibility.",
    cta: "Explore",
  },
  {
    title: "3D & Motion",
    desc: "WebGL hero scenes, micro‑interactions, and fluid page transitions.",
    cta: "See demos",
  },
  {
    title: "Performance",
    desc: "Lighthouse‑friendly builds, LCP/CLS tuning, and code‑splitting.",
    cta: "How I optimize",
  },
  {
    title: "Full‑stack",
    desc: "API wiring, auth flows, and dashboards with Node/Express.",
    cta: "Stack details",
  },
];


export default function SolutionsStrip() {
  return (
    <section id="solutions" className="bg-neutral-950 py-16 text-white">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solutions</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card) => (
            <a key={card.title} href="#projects" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">{card.cta}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M5 12h12M13 5l7 7-7 7"/></svg>
              </span>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(600px_circle_at_var(--x,0px)_var(--y,0px),rgba(99,102,241,.15),transparent_40%)" }} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
