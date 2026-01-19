import Container from "./Container";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950/95 backdrop-blur-sm py-10 text-white/70 border-t border-white/10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 text-sm">
        {/* Left: Copyright + microcopy */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Dhruv Sharma. Made with{" "}
          <span className="text-red-500">❤️</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DhruvSharma49"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/10 hover:scale-110 transition transform"
          >
            <FaGithub className="text-gray-300" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-sharma-25822228a/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-[#0A66C2] hover:text-white hover:scale-110 transition transform"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor jump
              const section = document.getElementById("home");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/10 hover:scale-110 transition transform cursor-pointer"
          >
            <FaArrowUp /> Top
          </a>
        </div>
      </Container>
    </footer>
  );
}
