import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiKubernetes, SiAppwrite,SiOracle,SiCplusplus} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi"; 

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Oracle", icon: <SiOracle className="text-[#F80000] text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C] text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-white text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "REST API", icon: <BiNetworkChart className="text-pink-400 text-3xl sm:text-4xl lg:text-5xl" /> },
  { name: "Appwrite", icon: <SiAppwrite className="text-[#F02e65] text-3xl sm:text-4xl lg:text-5xl" /> },
];

const Skills = () => (
  <section className="relative py-16 bg-black text-white overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-700 animate-gradient" />

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-wide"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="flex flex-col items-center transition-transform"
          >
            {skill.icon}
            <span className="mt-2 text-sm sm:text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
