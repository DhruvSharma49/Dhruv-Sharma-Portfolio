// import { motion } from "framer-motion";
// import Container from "../Components/Container";

// const education = [
//   {
//     title: "BCA (Bachelor of Computer Applications)",
//     institution: "IGNOU",
//     duration: "Ongoing / 2nd Year",
//     description: "Learning computer applications, programming, and system design.",
//   },
//   {
//     title: "Diploma in Information Technology",
//     institution: "XYZ Institute",
//     duration: "1 Year",
//     description: "Completed foundational IT concepts and practical applications.",
//   },
//   {
//     title: "CCO Certification",
//     institution: "ABC Institute",
//     duration: "Completed",
//     description: "Certified in computer operations and office tools.",
//   },
//   {
//     title: "Full-Stack Developer Course",
//     institution: "Online / Self-paced",
//     duration: "Completed",
//     description: "Learned HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
//   },
//   {
//     title: "Designing Skills (UI/UX Basics)",
//     institution: "Self-learned / Practice",
//     duration: "Ongoing",
//     description: "Gained practical experience in modern web design and portfolio styling.",
//   },
// ];

// const LearningJourney = () => (
//   <section className="relative py-16 bg-neutral-950 text-white">
//     <Container>
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
//       >
//         My Learning Journey
//       </motion.h2>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {education.map((edu, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition"
//           >
//             <h3 className="text-lg sm:text-xl font-semibold mb-1">{edu.title}</h3>
//             <span className="text-gray-400 text-sm">{edu.institution}</span>
//             {edu.duration && (
//               <p className="text-gray-500 text-xs sm:text-sm mt-1">{edu.duration}</p>
//             )}
//             <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </Container>
//   </section>
// );

// export default LearningJourney;

// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import { FaGraduationCap, FaLaptopCode, FaPalette, FaCertificate } from "react-icons/fa";

// const education = [
//   {
//     title: "BCA (Bachelor of Computer Applications)",
//     institution: "IGNOU",
//     duration: "Ongoing / 2nd Year",
//     description: "Learning computer applications, programming, and system design.",
//     icon: <FaGraduationCap className="text-indigo-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "Diploma in Information Technology",
//     institution: "XYZ Institute",
//     duration: "1 Year",
//     description: "Completed foundational IT concepts and practical applications.",
//     icon: <FaLaptopCode className="text-green-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "CCO Certification",
//     institution: "ABC Institute",
//     duration: "Completed",
//     description: "Certified in computer operations and office tools.",
//     icon: <FaCertificate className="text-yellow-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "Full-Stack Developer Course",
//     institution: "Online / Self-paced",
//     duration: "Completed",
//     description: "Learned HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
//     icon: <FaLaptopCode className="text-cyan-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "Designing Skills (UI/UX Basics)",
//     institution: "Self-learned / Practice",
//     duration: "Ongoing",
//     description: "Gained practical experience in modern web design, Figma, and Photoshop.",
//     icon: <FaPalette className="text-pink-400 text-2xl sm:text-3xl mb-2" />,
//   },
// ];

// const LearningJourney = () => (
//   <section className="relative py-20 bg-neutral-950 text-white">
//     <Container>
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
//       >
//         My Learning Journey
//       </motion.h2>

//       <div className="relative before:absolute before:w-1 before:bg-indigo-500 before:top-0 before:bottom-0 before:left-8 before:rounded-full">
//         <div className="space-y-8 sm:space-y-10">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="relative pl-20 sm:pl-24 flex flex-col sm:flex-row items-start sm:items-center"
//             >
//               <div className="absolute left-0 top-0 sm:top-2 w-16 h-16 flex items-center justify-center bg-neutral-900 border border-white/20 rounded-full shadow-md">
//                 {edu.icon}
//               </div>
//               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition w-full">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-1">{edu.title}</h3>
//                 <span className="text-gray-400 text-sm">{edu.institution}</span>
//                 {edu.duration && (
//                   <p className="text-gray-500 text-xs sm:text-sm mt-1">{edu.duration}</p>
//                 )}
//                 <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   </section>
// );

// export default LearningJourney;
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import { FaGraduationCap, FaLaptopCode, FaPalette, FaCertificate } from "react-icons/fa";

// const education = [
//   {
//     title: "BCA (Bachelor of Computer Applications)",
//     institution: "IGNOU",
//     duration: "Ongoing / 2nd Year",
//     description: "Learning computer applications, programming, and system design.",
//     icon: <FaGraduationCap className="text-indigo-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "Diploma in Information Technology",
//     institution: "XYZ Institute",
//     duration: "1 Year",
//     description: "Completed foundational IT concepts and practical applications.",
//     icon: <FaLaptopCode className="text-green-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "CCO Certification",
//     institution: "ABC Institute",
//     duration: "Completed",
//     description: "Certified in computer operations and office tools.",
//     icon: <FaCertificate className="text-yellow-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "Full-Stack Developer Course",
//     institution: "Online / Self-paced",
//     duration: "Completed",
//     description: "Learned HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
//     icon: <FaLaptopCode className="text-cyan-400 text-2xl sm:text-3xl mb-2" />,
//   },
//   {
//     title: "Designing & Software Skills",
//     institution: "Self-learned / Practice",
//     duration: "Ongoing",
//     description: "Tally ERP, Adobe Photoshop, Adobe PageMaker, CorelDraw, Microsoft Word, Excel, PowerPoint, Access, Basic Java, Oracle Database.",
//     icon: <FaPalette className="text-pink-400 text-2xl sm:text-3xl mb-2" />,
//   },
// ];

// const LearningJourney = () => (
//   <section className="relative py-20 bg-neutral-950 text-white">
//     <Container>
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
//       >
//         My Learning Journey
//       </motion.h2>

//       <div className="relative before:absolute before:w-1 before:bg-indigo-500 before:top-0 before:bottom-0 before:left-8 before:rounded-full">
//         <div className="space-y-8 sm:space-y-10">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="relative pl-20 sm:pl-24 flex flex-col sm:flex-row items-start sm:items-center"
//             >
//               <div className="absolute left-0 top-0 sm:top-2 w-16 h-16 flex items-center justify-center bg-neutral-900 border border-white/20 rounded-full shadow-md">
//                 {edu.icon}
//               </div>
//               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition w-full">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-1">{edu.title}</h3>
//                 <span className="text-gray-400 text-sm">{edu.institution}</span>
//                 {edu.duration && (
//                   <p className="text-gray-500 text-xs sm:text-sm mt-1">{edu.duration}</p>
//                 )}
//                 <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   </section>
// );

// export default LearningJourney;

import { motion } from "framer-motion";
import Container from "../Components/Container";
import { FaGraduationCap, FaLaptopCode, FaPalette, FaCertificate, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiOracle,SiAdobephotoshop ,SiCoreldraw } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";
import { FaJava } from "react-icons/fa";

const education = [
    {
      title: "CCO Certification",
      institution: "Lal Bahadur Shastri Training Institute",
      duration: " 3 months / Completed",
      description: "Certified in computer operations and office tools.",
      icon: <FaCertificate className="text-yellow-400 text-2xl sm:text-3xl mb-2" />,
      skills: [
        { name: "MS Office", icon: <AiFillFileText className="text-yellow-400 text-xl sm:text-2xl mr-1" /> },
      ],
    },
  {
    title: "BCA (Bachelor of Computer Applications)",
    institution: "IGNOU",
    duration: "Ongoing / 2nd Year",
    description: "Learning computer applications, programming, and system design.",
    icon: <FaGraduationCap className="text-indigo-400 text-2xl sm:text-3xl mb-2" />,
    skills: [],
  },
  {
    title: "Diploma in Information Technology",
    institution: "DICE Academy",
    duration: "1 Year Completed",
    description: "Completed foundational IT concepts and practical applications.",
    icon: <FaLaptopCode className="text-green-400 text-2xl sm:text-3xl mb-2" />,
    skills: [
      { name: "C", icon: <SiCplusplus className="text-blue-500 text-xl sm:text-2xl mr-1" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C] text-xl sm:text-2xl mr-1" /> },
      { name: "Java", icon: < FaJava  className="text-[#1283da] text-xl sm:text-2xl mr-1" /> },
      { name: "Tally ERP"},
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400 text-xl sm:text-2xl mr-1" /> },
      { name: "PageMaker" },
      { name: "CorelDraw", icon: <SiCoreldraw className="text-orange-500 text-xl sm:text-2xl mr-1" /> },
      { name: " Advanced MS Office", icon: <AiFillFileText className="text-yellow-400 text-xl sm:text-2xl mr-1" /> },
      { name: "Basic Java", icon: <SiCplusplus className="text-red-400 text-xl sm:text-2xl mr-1" /> },
      { name: "Oracle DB", icon: <SiOracle className="text-red-600 text-xl sm:text-2xl mr-1" /> },
    ],
  },
  {
    title: "Full-Stack Developer Course",
    institution: "Lal Bahadur Shastri Training Institute",
    duration: " 1 year Completed",
    description: "Learned modern web development with front-end, back-end, databases, and cloud services.",
    icon: <FaLaptopCode className="text-cyan-400 text-2xl sm:text-3xl mb-2" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-xl sm:text-2xl mr-1" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl sm:text-2xl mr-1" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-xl sm:text-2xl mr-1" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-xl sm:text-2xl mr-1" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-xl sm:text-2xl mr-1" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 text-xl sm:text-2xl mr-1" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-xl sm:text-2xl mr-1" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-xl sm:text-2xl mr-1" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400 text-xl sm:text-2xl mr-1" /> },
      { name: "REST API", icon: <BiNetworkChart className="text-pink-400 text-xl sm:text-2xl mr-1" /> },
      { name: "Git/GitHub", icon: <FaGit className="text-white text-xl sm:text-2xl mr-1" /> },
    ],
  },

];

const LearningJourney = () => (
  <section className="relative py-20 bg-neutral-950 text-white">
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
      >
        My Learning Journey
      </motion.h2>

      <div className="relative before:absolute before:w-1 before:bg-indigo-500 before:top-0 before:bottom-0 before:left-8 before:rounded-full">
        <div className="space-y-8 sm:space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-20 sm:pl-24 flex flex-col sm:flex-row items-start sm:items-center"
            >
              <div className="absolute left-0 top-0 sm:top-2 w-16 h-16 flex items-center justify-center bg-neutral-900 border border-white/20 rounded-full shadow-md">
                {edu.icon}
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition w-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{edu.title}</h3>
                <span className="text-gray-400 text-sm">{edu.institution}</span>
                {edu.duration && (
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{edu.duration}</p>
                )}
                <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
                {edu.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.skills.map((skill, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm">
                        {skill.icon} <span className="ml-1">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default LearningJourney;
