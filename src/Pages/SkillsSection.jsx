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
  FaFileUpload 
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiOracle,
  SiCplusplus,
  SiPostman,
  SiSocketdotio,
  SiAppwrite,
  SiCloudinary
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { VscTerminal, VscVscode } from "react-icons/vsc";
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
  { name: "C++ (Basics)", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Multer", icon: <FaFileUpload  className="text-orange-500" /> },
  { name: "Cloudinary", icon: < SiCloudinary className="text-blue-500" /> },
];

const tools = [
  { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Terminal / CLI", icon: <VscTerminal className="text-green-400" /> },
  { name: "NPM", icon: <TbBrandNpm className="text-red-700 bg-white" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-neutral-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-16">
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
