import Container from "./Container";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-10 text-white/70 border-t border-white/10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 text-sm">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Dhruv Sharma. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/10 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/10 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="#home"
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/10 transition"
          >
            <FaArrowUp /> Top
          </a>
        </div>
      </Container>
    </footer>
  );
}
