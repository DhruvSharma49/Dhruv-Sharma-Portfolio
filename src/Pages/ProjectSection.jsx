// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../Components/Container";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const projects = [
//   // React Projects
//   {
//     title: "Portfolio Website",
//     category: "React",
//     description:
//       "A modern portfolio built with React, TailwindCSS, and Framer Motion.",
//     image: "/projects/portfolio.png",
//     link: "#",
//   },
//   {
//     title: "React Dashboard",
//     category: "React",
//     description: "Admin dashboard with charts and analytics.",
//     image: "/projects/dashboard.png",
//     link: "#",
//   },
//   {
//     title: "React Blog App",
//     category: "React",
//     description: "Blog with markdown support and comments.",
//     image: "/projects/blog.png",
//     link: "#",
//   },

//   // JavaScript Projects
//   {
//     title: "E-Commerce Store",
//     category: "JavaScript",
//     description:
//       "Full-featured online store with shopping cart and payment integration.",
//     image: "/projects/ecommerce.png",
//     link: "#",
//   },
//   {
//     title: "Weather App",
//     category: "JavaScript",
//     description: "Real-time weather forecast using OpenWeather API.",
//     image: "/projects/weather.png",
//     link: "#",
//   },
//   {
//     title: "Typing Speed Test",
//     category: "JavaScript",
//     description: "Track your typing speed and accuracy in real-time.",
//     image: "/projects/typing.png",
//     link: "#",
//   },

//   // Express Projects
//   {
//     title: "REST API",
//     category: "Express",
//     description: "Scalable REST API with JWT authentication.",
//     image: "/projects/api.png",
//     link: "#",
//   },
//   {
//     title: "Chat App Backend",
//     category: "Express",
//     description: "Backend for a real-time chat application.",
//     image: "/projects/chat.png",
//     link: "#",
//   },

//   // Full-Stack Projects
//   {
//     title: "MERN Social App",
//     category: "Full-Stack",
//     description: "Social media app with likes, comments, and authentication.",
//     image: "/projects/social.png",
//     link: "#",
//   },
//   {
//     title: "Task Manager",
//     category: "Full-Stack",
//     description: "Full-stack CRUD app for task management.",
//     image: "/projects/tasks.png",
//     link: "#",
//   },

//   // Three.js Project
//   {
//     title: "3D Product Showcase",
//     category: "Three.js",
//     description: "Interactive 3D product viewer built with Three.js.",
//     image: "/projects/3dshowcase.png",
//     link: "#",
//   },
// ];

// const categories = ["All", "JavaScript", "React", "Express", "Full-Stack"];

// export default function ProjectsSection() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Ref for horizontal scroll
//   const scrollRef = useRef(null);

//   // Filter projects based on category
//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   return (
//     <section
//       id="projects"
//       className="relative w-full py-20 bg-gradient-to-b from-neutral-950 to-neutral-950"
//     >
//       <Container>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-white mb-8 text-center"
//         >
//           Projects
//         </motion.h2>

//         {/* Category Buttons */}
//         <div className="flex justify-center flex-wrap gap-4 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-full transition ${
//                 activeCategory === cat
//                   ? "bg-indigo-500 text-white"
//                   : "bg-white/10 text-gray-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Netflix Style Horizontal Scroll */}
//         <div className="relative">
//           {/* Left Gradient + Button */}
//           <div className="absolute left-0 top-0 bottom-0 w-16  z-10 flex items-center">
//             <button
//               onClick={() =>
//                 scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
//               }
//               className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg"
//             >
//               <FaArrowLeft />
//             </button>
//           </div>

//           {/* Projects Row */}
//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-12 hide-scrollbar"
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 className="min-w-[260px] sm:min-w-[300px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-transform cursor-pointer"
//                 onClick={() => setSelectedProject(project)}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-white">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm mt-2">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Gradient + Button */}
//           <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 flex items-center justify-end">
//             <button
//               onClick={() =>
//                 scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
//               }
//               className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </Container>

//       {/* Popup Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
//             onClick={() => setSelectedProject(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-neutral-900 p-3 sm:p-5 rounded-xl max-w-[85%] sm:max-w-md w-full relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl sm:text-2xl"
//               >
//                 &times;
//               </button>

//               <img
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className="w-full h-32 sm:h-44 object-cover rounded-md mb-3 sm:mb-4"
//               />

//               <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
//                 {selectedProject.title}
//               </h3>

//               <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
//                 {selectedProject.description}
//               </p>

//               <a
//                 href={selectedProject.link}
//                 target="_blank"
//                 className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-xs sm:text-sm transition"
//               >
//                 View Project
//               </a>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Components/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Youtube Clone",
    description:
      "A modern portfolio built with React, TailwindCSS, and Framer Motion.",
    image: "/projects/portfolio.png",
    link: "#",
  },
  {
    title: "Uber Clone",
    description: "Admin dashboard with charts and analytics.",
    image: "/projects/dashboard.png",
    link: "#",
  },
  {
    title: "Block Website With Appwrite",
    description: "Blog with markdown support and comments.",
    image: "/projects/blog.png",
    link: "#",
  },
  {
    title: "Instagram Clone",
    description:
      "Full-featured online store with shopping cart and payment integration.",
    image: "/projects/ecommerce.png",
    link: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecast using OpenWeather API.",
    image: "/projects/weather.png",
    link: "#",
  },
  {
    title: "API Testing Tool",
    description: "Track your typing speed and accuracy in real-time.",
    image: "/projects/typing.png",
    link: "#",
  },
  {
    title: "AI Voice Assistant",
    description: "Scalable REST API with JWT authentication.",
    image: "/projects/api.png",
    link: "#",
  },

  {
    title: "MERN Social App",
    description: "Social media app with likes, comments, and authentication.",
    image: "/projects/social.png",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "Full-stack CRUD app for task management.",
    image: "/projects/tasks.png",
    link: "#",
  },
  {
    title: "3D Product Showcase",
    description: "Interactive 3D product viewer built with Three.js.",
    image: "/projects/3dshowcase.png",
    link: "#",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  return (
    <section
      id="projects"
      className="relative w-full py-20 bg-neutral-950"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        {/* Netflix-style Horizontal Scroll */}
        <div className="relative">
          {/* Left Button */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 flex items-center">
            <button
              onClick={() =>
                scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg"
            >
              <FaArrowLeft />
            </button>
          </div>

          {/* Projects Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-visible scroll-smooth px-12 py-8 hide-scrollbar"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[260px] sm:min-w-[300px]
                bg-white/5 backdrop-blur-md
                border border-white/10 rounded-xl
                overflow-hidden shadow-lg
                hover:scale-[1.03]
                hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                transition-transform cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 flex items-center justify-end">
            <button
              onClick={() =>
                scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="bg-neutral-900 p-4 rounded-xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-44 object-cover rounded-md mb-4"
              />

              <h3 className="text-lg font-bold text-white mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {selectedProject.description}
              </p>

              <a
                href={selectedProject.link}
                target="_blank"
                className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm transition"
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
