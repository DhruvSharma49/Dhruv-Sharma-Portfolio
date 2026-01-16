// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";

// export default function AboutSection() {
//   const stats = [
//     { label: "Years Experience", value: 3 },
//     { label: "Projects Completed", value: 25 },
//     { label: "Happy Clients", value: 15 },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
//     >
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />

//       <Container>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-5xl font-extrabold mb-6">
//               About <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Me</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-8 text-lg">
//               I’m a passionate web developer focused on crafting clean, user-friendly, and visually engaging digital experiences.
//               My goal is to transform complex ideas into intuitive solutions that look great and work even better.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               With a blend of creative design and efficient coding practices, I help brands and businesses make a
//               memorable impact online. Every project is an opportunity to innovate and deliver value.
//             </p>
//           </motion.div>

//           {/* Stats / Highlights */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-start gap-8"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg w-full"
//               >
//                 <h3 className="text-4xl font-bold text-indigo-400">
//                   {stat.value}+
//                 </h3>
//                 <p className="text-gray-300">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";

// export default function AboutSection() {
//   const workFlow = [
//     {
//       title: "Understand the Problem",
//       desc: "Break requirements into clear UI and logic goals",
//     },
//     {
//       title: "Design & Structure",
//       desc: "Wireframe layouts with proper spacing and hierarchy",
//     },
//     {
//       title: "Build & Optimize",
//       desc: "Clean React components with performance in mind",
//     },
//     {
//       title: "Refine & Polish",
//       desc: "Animations, responsiveness, and final UX touch",
//     },
//   ];

//   const currentFocus = [
//     "Advanced React patterns",
//     "UI animations & micro-interactions",
//     "Clean component architecture",
//     "Responsive-first layouts",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
//     >
//       {/* Subtle background */}
//       <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />

//       <Container>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* LEFT: About Text (unchanged) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-5xl font-extrabold mb-6">
//               About{" "}
//               <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
//                 Me
//               </span>
//             </h2>

//             <p className="text-gray-300 leading-relaxed mb-8 text-lg">
//               I’m a passionate web developer focused on crafting clean,
//               user-friendly, and visually engaging digital experiences. My goal
//               is to transform complex ideas into intuitive solutions that look
//               great and work even better.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               With a blend of creative design and efficient coding practices, I
//               help brands and businesses make a memorable impact online. Every
//               project is an opportunity to innovate and deliver value.
//             </p>
//           </motion.div>

//           {/* RIGHT: New Professional Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-10"
//           >
//             {/* How I Work */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
//                 How I Work
//               </h3>

//               <div className="space-y-4">
//                 {workFlow.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.03 }}
//                     className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg"
//                   >
//                     <h4 className="font-semibold text-lg mb-1">
//                       {index + 1}. {item.title}
//                     </h4>
//                     <p className="text-gray-400 text-sm">{item.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Current Focus */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                 Currently Focused On
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {currentFocus.map((focus, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5 text-gray-300"
//                   >
//                     {focus}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";

// export default function AboutSection() {
//   const problemSolvingSteps = [
//     {
//       title: "Understand the Problem",
//       desc: "Analyze requirements and identify key challenges",
//     },
//     {
//       title: "Plan the Solution",
//       desc: "Break the problem into smaller logical steps",
//     },
//     {
//       title: "Implement Carefully",
//       desc: "Write clean, readable, and efficient code",
//     },
//     {
//       title: "Test & Improve",
//       desc: "Debug, optimize, and refine for better outcomes",
//     },
//   ];

//   const focusAreas = [
//     "Algorithm & Logic Thinking",
//     "Debugging & Optimization",
//     "Clean Code Practices",
//     "Problem Decomposition",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
//     >
//       <Container>
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* LEFT: About Text */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-5xl font-extrabold mb-6">
//               About{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
//                 Me
//               </span>
//             </h2>

//             <p className="text-gray-300 leading-relaxed mb-8 text-lg">
//               I’m a passionate web developer focused on solving complex problems
//               with efficient, logical solutions. My goal is to understand a
//               problem deeply, plan it step by step, and implement it with clean,
//               maintainable code.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               I enjoy taking challenging problems and turning them into simple,
//               functional solutions that work reliably.
//             </p>
//           </motion.div>

//           {/* RIGHT: Problem-Solving Focus */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Problem-Solving Steps */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
//                 Problem-Solving Approach
//               </h3>

//               <div className="space-y-3">
//                 {problemSolvingSteps.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.02 }}
//                     className="p-4 rounded-lg border border-white/10 bg-white/5"
//                   >
//                     <h4 className="font-semibold">{index + 1}. {step.title}</h4>
//                     <p className="text-gray-400 text-sm">{step.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Current Focus Areas */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                 Focus Areas
//               </h3>

//               <div className="flex flex-wrap gap-2">
//                 {focusAreas.map((focus, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
//                   >
//                     {focus}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Container from "../Components/Container";

// export default function AboutSection() {
//   const workFlow = [
//     {
//       title: "Understand the Problem",
//       desc: "Analyze requirements and identify key challenges",
//     },
//     {
//       title: "Plan the Solution",
//       desc: "Break the problem into smaller logical steps",
//     },
//     {
//       title: "Implement Carefully",
//       desc: "Write clean, readable, and efficient code",
//     },
//     {
//       title: "Build & Optimize",
//       desc: "Clean React components with performance in mind",
//     },
//   ];

//   const currentFocus = [
//     "Algorithm & Logic Thinking",
//     "Debugging & Optimization",
//     "Clean Code Practices",
//     "Problem Decomposition",
//     "Responsive-first layouts",

//   ];

//   const rightRef = useRef(null);
//   const isInView = useInView(rightRef, { margin: "-50% 0px -50% 0px" });

//   const itemVariants = {
//     hidden: { opacity: 0, x: 40 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
//     >
//       <Container>
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* LEFT: About Text */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-5xl font-extrabold mb-6">
//               About{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
//                 Me
//               </span>
//             </h2>

//             <p className="text-gray-300 leading-relaxed mb-8 text-lg">
//               I’m a passionate web developer focused on solving complex problems
//               with efficient, logical solutions. My goal is to understand a
//               problem deeply, plan it step by step, and implement it with clean,
//               maintainable code.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               I enjoy taking challenging problems and turning them into simple,
//               functional solutions that work reliably.
//             </p>
//           </motion.div>

//           {/* RIGHT: Problem-Solving Focus with repeated scroll animation */}
//           <motion.div
//             ref={rightRef}
//             className="space-y-8"
//           >
//             {/* How I Work */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
//                 How I Work
//               </h3>
//               <div className="space-y-3">
//                 {workFlow.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="p-4 rounded-lg border border-white/10 bg-white/5"
//                   >
//                     <h4 className="font-semibold">{index + 1}. {step.title}</h4>
//                     <p className="text-gray-400 text-sm">{step.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Currently Focused On */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                 Currently Focused On
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {currentFocus.map((focus, index) => (
//                   <motion.span
//                     key={index}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     transition={{ duration: 0.5, delay: index * 0.05 }}
//                     className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
//                   >
//                     {focus}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Container from "../Components/Container";

// export default function AboutSection() {
//   const workFlow = [
//     {
//       title: "Understand the Problem",
//       desc: "Analyze requirements and identify key challenges",
//     },
//     {
//       title: "Plan the Solution",
//       desc: "Break the problem into smaller logical steps",
//     },
//     {
//       title: "Implement Carefully",
//       desc: "Write clean, readable, and efficient code",
//     },
//     {
//       title: "Build & Optimize",
//       desc: "Clean React components with performance in mind",
//     },
//   ];

//   const currentFocus = [
//     "Algorithm & Logic Thinking",
//     "Debugging & Optimization",
//     "Clean Code Practices",
//     "Problem Decomposition",
//     "Responsive-first layouts",
//   ];

//   const miniBullets = [
//     "Problem Decomposition",
//     "Clean Code Practices",
//     "Debugging & Optimization",
//   ];

//   const rightRef = useRef(null);
//   const isInView = useInView(rightRef, { margin: "-50% 0px -50% 0px" });

//   const itemVariants = {
//     hidden: { opacity: 0, x: 40 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
//     >
//       <Container>
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* LEFT: About Text with mini bullets and subtle animation */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false }}
//             className="space-y-4"
//           >
//             <h2 className="text-5xl font-extrabold mb-6">
//               About{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
//                 Me
//               </span>
//             </h2>

//             <p className="text-gray-300 leading-relaxed text-lg">
//               I’m a passionate web developer focused on{" "}
//               <span className="font-semibold text-indigo-400">
//                 problem-solving
//               </span>{" "}
//               with efficient, logical solutions. My goal is to understand a
//               problem deeply, plan it step by step, and implement it with clean,
//               maintainable code.
//             </p>

//             <p className="text-gray-400 leading-relaxed text-lg">
//               I enjoy taking challenging problems and turning them into simple,
//               functional solutions that work reliably.
//             </p>

//             {/* Mini Bullets */}
//             <div className="flex flex-wrap gap-2 mt-2">
//               {miniBullets.map((bullet, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="px-3 py-1 rounded-md border border-white/10 bg-white/5 text-gray-300 text-sm"
//                 >
//                   {bullet}
//                 </motion.span>
//               ))}
//             </div>

//             {/* Callout sentence */}
//             <motion.p
//               initial={{ opacity: 0, y: 5 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-gray-400 mt-4 text-lg"
//             >
//               I’m eager to tackle real-world challenges and grow as a developer,
//               turning ideas into efficient, functional solutions.
//             </motion.p>
//           </motion.div>

//           {/* RIGHT: Problem-Solving Focus with repeated scroll animation */}
//           <motion.div ref={rightRef} className="space-y-8">
//             {/* How I Work */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
//                 How I Work
//               </h3>
//               <div className="space-y-3">
//                 {workFlow.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="p-4 rounded-lg border border-white/10 bg-white/5"
//                   >
//                     <h4 className="font-semibold">
//                       {index + 1}. {step.title}
//                     </h4>
//                     <p className="text-gray-400 text-sm">{step.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Currently Focused On */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                 Currently Focused On
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {currentFocus.map((focus, index) => (
//                   <motion.span
//                     key={index}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     transition={{ duration: 0.5, delay: index * 0.05 }}
//                     className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
//                   >
//                     {focus}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../Components/Container";

export default function AboutSection() {
  const workFlow = [
    {
      title: "Understand the Problem",
      desc: "Analyze requirements and identify key challenges",
    },
    {
      title: "Plan the Solution",
      desc: "Break the problem into smaller logical steps",
    },
    {
      title: "Implement Carefully",
      desc: "Write clean, readable, and efficient code",
    },
    {
      title: "Build & Optimize",
      desc: "Clean React components with performance in mind",
    },
  ];

  const currentFocus = [
    "Algorithm & Logic Thinking",
    "Debugging & Optimization",
    "Clean Code Practices",
    "Problem Decomposition",
    "Responsive-first layouts",
  ];

  const leftHighlights = [
    "💡 Critical Thinking",
    "⚡ Quick Prototyping",
    "🔍 Debugging Intuition",
    "📈 Learning & Adapting",
  ];

  // Refs for scroll-based animations
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { margin: "-50% 0px -50% 0px" });
  const isRightInView = useInView(rightRef, { margin: "-50% 0px -50% 0px" });

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
    >
      <Container>
               <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A developer who enjoys turning complex problems into simple,
            efficient, and maintainable solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT: About + Highlights */}
          <motion.div ref={leftRef} className="space-y-4">
       

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={
                isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.6 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              I’m a passionate web developer focused on{" "}
              <span className="font-semibold text-indigo-400">
                problem-solving
              </span>
              with efficient, logical solutions. I aim to understand problems
              deeply, plan step-by-step solutions, and implement clean,
              maintainable code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={
                isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 leading-relaxed text-lg"
            >
              I enjoy taking challenging problems and turning them into simple,
              functional solutions that work reliably.
            </motion.p>

            {/* Creative Highlights */}
            <div className="flex flex-wrap gap-2 mt-2">
              {leftHighlights.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Callout Sentence */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={
                isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 mt-4 text-lg"
            >
              I’m eager to tackle real-world challenges and grow as a developer,
              turning ideas into practical solutions.
              {/* Developer Status */}


            </motion.p>

          </motion.div>
          

          {/* RIGHT: Problem-Solving Focus */}
          <motion.div ref={rightRef} className="space-y-8">
            {/* How I Work */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                How I Work
              </h3>
              <div className="space-y-3">
                {workFlow.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isRightInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-white/10 bg-white/5"
                  >
                    <h4 className="font-semibold">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Currently Focused On */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                Currently Focused On
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((focus, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isRightInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

