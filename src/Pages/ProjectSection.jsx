import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Components/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Youtube from "../assets/projects/Youtube.webp";
import Planify from "../assets/projects/Planify.webp";
import Uber from "../assets/projects/Uber.webp";
import Focal from "../assets/projects/Focal.webp";
import blockwebsite from "../assets/projects/blockwebsite.webp";
import AI from "../assets/projects/AI.webp";
import APITesting from "../assets/projects/APITesting.webp";

const projects = [
  {
    title: "Video Streaming Web App (YouTube API Integrated)",
    description: "A responsive YouTube clone built with modern UI practices, featuring video listings, clean layout, and smooth user experience inspired by the original platform.",
    image: Youtube,
    link: "https://github.com/DhruvSharma49/YouTube-Clone",
  },
  {
    title: "Planify Project management tool",
    description: "A modern and responsive project management platform that helps teams streamline task management, organize projects efficiently, track progress in real time, and enhance team collaboration through an intuitive user interface.",
    image: Planify,
    link: "https://github.com/DhruvSharma49/Planify-PM-Tool",
  },
  {
    title: "Full Stack Ride Sharing Platform (Uber-Inspired)",
    description: "An Uber-inspired web interface focusing on ride booking flow, location-based UI structure, and user-friendly design for real-world transportation apps",
    image: Uber,
    link: "https://github.com/DhruvSharma49/Uber",
  },
  {
    title: "BlockHive – Content & Ideas Hub (Appwrite Powered)",
    description: "A dynamic blog website designed for reading and publishing content, with a clean layout, structured posts, and smooth navigation for better readability.",
    image: blockwebsite,
    link: "https://github.com/DhruvSharma49/Blog-Website",
  },
  {
    title: "AI Assistant Web App (Vanilla JavaScript)",
    description: "An AI-powered web app built using Vanilla JavaScript and external APIs, enabling real-time responses and interactive user input handling.",
    image: AI,
    link: "https://github.com/DhruvSharma49/AI-with-Vanilla-JS",
  },
  {
    title: "Focal social media platform",
    description: "A modern social media platform designed for seamless user interaction, featuring real-time post sharing, responsive design, engaging UI, and smooth user experience for connecting and communicating online.",
    image: Focal,
    link: "https://github.com/DhruvSharma49/Focal-Social-Media-PlatForm",
  },
  {
    title: "Web-Based API Testing Tool (Postman-Inspired)",
    description: "A lightweight API testing tool inspired by Postman, allowing users to send HTTP requests and analyze responses for backend testing and debugging.",
    image: APITesting,
    link: "https://github.com/DhruvSharma49/Postman",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  return (
    <section id="projects" className="relative w-full py-16 bg-neutral-950">
      <Container>
         <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold">
        <span className="text-indigo-400">Projects </span>
        </h2>
      </motion.div>

        <div className="relative">
          <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-16 z-10 items-center">
            <button
              onClick={() =>
                scrollRef.current.scrollBy({ left: -350, behavior: "smooth" })
              }
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <FaArrowLeft />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="
              flex gap-6
              overflow-x-auto scroll-smooth
              px-4 sm:px-10 py-6
              snap-x snap-mandatory
              hide-scrollbar
            "
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
                className="
                  snap-center
                  min-w-[85%] sm:min-w-[300px]
                  md:min-w-[340px]
                  lg:min-w-[380px]
                  xl:min-w-[420px]
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  rounded-2xl overflow-hidden
                  shadow-lg
                  hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <div className="w-full h-44 sm:h-48 lg:h-56 bg-black flex items-center justify-center">
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain p-4"
                  /> */}
                  <img
  src={project.image}
  alt={project.title}
  loading="lazy"
  decoding="async"
  width="420"
  height="280"
  className="max-w-full max-h-full object-contain p-4"
/>

                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-16 z-10 items-center justify-end">
            <button
              onClick={() =>
                scrollRef.current.scrollBy({ left: 350, behavior: "smooth" })
              }
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-neutral-900
                w-full
                max-w-lg sm:max-w-2xl
                p-6 sm:p-8
                rounded-2xl
                relative
              "
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl"
              >
                &times;
              </button>

              <div className="w-full h-52 sm:h-64 bg-black flex items-center justify-center rounded-xl mb-5">
                {/* <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-full max-h-full object-contain p-5"
                /> */}
                <img
  src={selectedProject.image}
  alt={selectedProject.title}
  loading="lazy"
  decoding="async"
  width="600"
  height="400"
  className="max-w-full max-h-full object-contain p-5"
/>

              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base mb-5">
                {selectedProject.description}
              </p>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="block text-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
