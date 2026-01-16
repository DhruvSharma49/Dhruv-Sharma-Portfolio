import React, { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },

  { id: "projects", label: "Projects" },

  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  // const scrollTo = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  //   setOpen(false);
  // };

  const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -100; // header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setOpen(false);
};
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="mt-4">
        <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between text-white">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-semibold tracking-tight">Dhruv.dev</span>
            </button>
            <nav className="hidden md:flex items-center gap-2">
              {links.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/10">
                  {l.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
  href="/DhruvSharma-CV.pdf"
  download
  className="
    hidden sm:inline-flex
    items-center justify-center
    px-5 py-2.5
    rounded-lg
    bg-white
    text-neutral-900
    font-medium
    transition
    hover:opacity-90
    focus:outline-none
  "
>
  Download CV
</a>

              {/* <Button className="hidden sm:inline-flex bg-white text-neutral-900 hover:opacity-90">Dowload CV</Button> */}
              <button className="md:hidden rounded-xl p-2 text-white/80 hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Open menu">☰</button>
            </div>
          </div>
          {open && (
            <div className="md:hidden mt-3 grid gap-1">
              {links.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="rounded-xl px-3 py-2 text-left text-sm text-white/90 hover:bg-white/10">
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}





