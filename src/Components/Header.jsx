import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Container from "./Container";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="mt-6">
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-3 transition-colors duration-300">
          <div className="flex items-center justify-between text-white">
            {/* Logo */}
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-semibold tracking-tight text-rose-200 text-lg sm:text-xl">
                Dhruv.dev
              </span>
            </button>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="rounded-xl px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-rose-300 transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Right buttons */}
            <div className="flex items-center gap-3">
              {/* Download CV */}
              <a
                href="/DhruvSharma-CV.pdf"
                download
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-black text-white font-medium text-sm sm:text-base transition-transform duration-200 hover:scale-105 hover:opacity-90"
              >
                Download CV
              </a>

              {/* Mobile menu toggle */}
              {!open && (
                <button
                  className="md:hidden rounded-xl p-2 text-white/80 hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                >
                  ☰
                </button>
              )}
              {open && (
                <button
                  className="md:hidden rounded-xl p-2 text-white/80 hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <motion.div
              ref={menuRef}
              className="md:hidden mt-3 rounded-2xl bg-white/10 backdrop-blur-xl p-5 shadow-lg flex flex-col gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className="w-full text-left rounded-lg px-4 py-3 text-white/90 hover:bg-rose-600/20 hover:text-rose-300 transition-colors duration-200 font-medium"
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <hr className="border-white/20 my-2" />

              {/* Connect With Me */}
              <div className="flex flex-col gap-2">
                <span className="text-white/70 font-semibold text-sm">Connect With Me</span>
                <div className="flex justify-start gap-4">
                  <a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gray-800 hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
}
