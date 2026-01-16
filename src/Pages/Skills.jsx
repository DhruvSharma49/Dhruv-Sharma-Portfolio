// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws,FaGithub} from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiExpress, SiKubernetes, SiAppwrite,SiOracle,SiCplusplus} from "react-icons/si";
// import { BiNetworkChart } from "react-icons/bi"; 

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "Oracle", icon: <SiOracle className="text-[#F80000] text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl sm:text-4xl lg:text-5xl" /> },

//   { name: "C++", icon: <SiCplusplus className="text-[#00599C] text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "Git & GitHub", icon: <FaGithub className="text-white text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "REST API", icon: <BiNetworkChart className="text-pink-400 text-3xl sm:text-4xl lg:text-5xl" /> },
//   { name: "Appwrite", icon: <SiAppwrite className="text-[#F02e65] text-3xl sm:text-4xl lg:text-5xl" /> },
// ];

// const Skills = () => (
//   <section className="relative py-16 bg-black text-white overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-700 animate-gradient" />

//     <div className="max-w-6xl mx-auto px-4 relative z-10">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-wide"
//       >
//         My Skills
//       </motion.h2>

//       <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-10">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             className="flex flex-col items-center transition-transform"
//           >
//             {skill.icon}
//             <span className="mt-2 text-sm sm:text-base">{skill.name}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Skills;
// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaAws,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiAppwrite,
//   SiOracle,
//   SiCplusplus,
// } from "react-icons/si";
// import { BiNetworkChart } from "react-icons/bi";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
//   { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
//   { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//   { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
//   { name: "AWS", icon: <FaAws className="text-orange-400" /> },
//   { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
//   { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
//   { name: "REST APIs", icon: <BiNetworkChart className="text-pink-400" /> },
//   { name: "Appwrite", icon: <SiAppwrite className="text-rose-500" /> },
// ];

// export default function Skills() {
//   return (
//     <section className="relative py-20 bg-neutral-950 text-white overflow-hidden">
//       {/* Unique but matching background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-indigo-500/10 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-12 sm:mb-14"
//         >
//           <h2 className="text-3xl sm:text-5xl font-extrabold">
//             Skills & <span className="text-indigo-400">Tools</span>
//           </h2>
//           <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
//             Technologies I use to design, build, and maintain scalable,
//             performance-focused web applications.
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//               whileHover={{ y: -6 }}
//               className="
//                 group
//                 rounded-xl sm:rounded-2xl
//                 border border-white/10
//                 bg-gradient-to-br from-white/10 to-white/5
//                 backdrop-blur-md
//                 p-3 sm:p-5 lg:p-6
//                 flex flex-col items-center gap-2 sm:gap-3
//                 transition-shadow
//                 hover:shadow-lg hover:shadow-indigo-500/10
//               "
//             >
//               <div
//                 className="
//                   text-3xl sm:text-4xl lg:text-5xl
//                   group-hover:scale-110 transition-transform
//                 "
//               >
//                 {skill.icon}
//               </div>

//               <span
//                 className="
//                   text-[11px] sm:text-sm
//                   text-gray-300 text-center leading-tight
//                 "
//               >
//                 {skill.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiOracle,
  SiCplusplus,
  SiPostman,
  SiSocketdotio,
  SiAppwrite
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { VscTerminal,VscVscode } from "react-icons/vsc";
import { TbBrandNpm } from "react-icons/tb";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "REST APIs", icon: <BiNetworkChart className="text-pink-400" /> },
  { name: "Appwrite", icon: <SiAppwrite className="text-rose-500" /> },
  { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
  { name: "AWS (Basics)", icon: <FaAws className="text-orange-400" /> },
  { name: "Oracle (Basics)", icon: <SiOracle className="text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
];

const tools = [
  { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Terminal / CLI", icon: <VscTerminal className="text-green-400" /> },
  { name: "NPM", icon: <TbBrandNpm  className="text-red-700 bg-white" /> },
];

export default function Skills() {
  return (
    <section className="relative py-20 bg-neutral-950 text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-16">
        {/* ===== SKILLS ===== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Skills I <span className="text-indigo-400">Work With</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Core technologies and programming skills I use to build scalable
              and maintainable applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="
                  rounded-xl sm:rounded-2xl
                  border border-white/10
                  bg-gradient-to-br from-white/10 to-white/5
                  backdrop-blur-md
                  p-3 sm:p-5 lg:p-6
                  flex flex-col items-center gap-2 sm:gap-3
                  transition-shadow hover:shadow-lg hover:shadow-indigo-500/10
                "
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl">
                  {skill.icon}
                </div>
                <span className="text-[11px] sm:text-sm text-gray-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== TOOLS ===== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Tools I <span className="text-purple-400">Use Daily</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Tools that support my development workflow, testing, and version
              control.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-4 py-3 sm:px-6 sm:py-4
                  flex items-center gap-3
                  transition-shadow hover:shadow-md hover:shadow-purple-500/10
                "
              >
                <span className="text-xl sm:text-2xl">{tool.icon}</span>
                <span className="text-xs sm:text-sm text-gray-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
