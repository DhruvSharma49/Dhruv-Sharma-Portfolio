// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Container from "../Components/Container";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function AboutSection() {
//   const [code] = useTypewriter({
//     words: [
//       `function buildExperience() {
//     const ui = "clean";
//     const logic = "scalable";

//     return ui + " UI & " + logic + " logic";
//   }`,
//     ],
//     loop: 1,
//     typeSpeed: 28,
//     deleteSpeed: 0,
//     delaySpeed: 1000,
//   });

//   const workFlow = [
//     { title: "Understand the Problem", desc: "Analyze requirements and identify key challenges" },
//     { title: "Plan the Solution", desc: "Break the problem into smaller logical steps" },
//     { title: "Implement Carefully", desc: "Write clean, readable, and efficient code" },
//     { title: "Build & Optimize", desc: "Clean React components with performance in mind" },
//   ];

//   const currentFocus = [
//     "Algorithm & Logic Thinking",
//     "Debugging & Optimization",
//     "Clean Code Practices",
//     "Problem Decomposition",
//     "Responsive-first layouts",
//   ];

//   const leftHighlights = [
//     "💡 Critical Thinking",
//     "⚡ Quick Prototyping",
//     "🔍 Debugging Intuition",
//     "📈 Learning & Adapting",
//   ];

//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const isLeftInView = useInView(leftRef, { margin: "-50% 0px -50% 0px" });
//   const isRightInView = useInView(rightRef, { margin: "-50% 0px -50% 0px" });

//   const itemVariants = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
//     >
//       <Container>
//         <div className="mb-16 text-center">
//           <h2 className="text-5xl font-extrabold">
//             About{" "}
//             <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
//               Me
//             </span>
//           </h2>
//           <p className="mt-4 text-white/60 max-w-2xl mx-auto">
//             A developer who enjoys turning complex problems into simple, efficient, and maintainable solutions.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-14">
//           {/* LEFT: About + Highlights */}
//           <motion.div ref={leftRef} className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.6 }}
//               className="text-gray-300 leading-relaxed text-lg"
//             >
//               I’m a passionate web developer focused on{" "}
//               <span className="font-semibold text-indigo-400">problem-solving</span> with efficient, logical solutions. I aim to understand problems deeply, plan step-by-step solutions, and implement clean, maintainable code.
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-gray-400 leading-relaxed text-lg"
//             >
//               I enjoy taking challenging problems and turning them into simple, functional solutions that work reliably.
//             </motion.div>

//             <div className="flex flex-wrap gap-2 mt-2">
//               {leftHighlights.map((item, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-gray-400 mt-4 text-lg"
//             >
//               I’m eager to tackle real-world challenges and grow as a developer, turning ideas into practical solutions.

//               <motion.div
//                 className="mt-4 w-full max-w-md"
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.9 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="bg-neutral-900/80 border border-white/10 rounded-xl shadow-2xl p-3 font-mono text-xs text-emerald-400">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className="w-3 h-3 rounded-full bg-red-500" />
//                     <span className="w-3 h-3 rounded-full bg-yellow-400" />
//                     <span className="w-3 h-3 rounded-full bg-green-500" />
//                     <span className="ml-2 text-xs text-white/40">hero.js</span>
//                   </div>
//                   <pre className="leading-relaxed whitespace-pre-wrap">
//                     {code}
//                     <Cursor cursorStyle="▋" />
//                   </pre>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT: WorkFlow + Focus */}
//           <motion.div ref={rightRef} className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-indigo-400">How I Work</h3>
//               <div className="space-y-3">
//                 {workFlow.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate={isRightInView ? "visible" : "hidden"}
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

//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-purple-400">Currently Focused On</h3>
//               <div className="flex flex-wrap gap-2">
//                 {currentFocus.map((focus, index) => (
//                   <motion.span
//                     key={index}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate={isRightInView ? "visible" : "hidden"}
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

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../Components/Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function AboutSection() {
  const [code] = useTypewriter({
    words: [
      `function buildExperience() {
    const ui = "clean";
    const logic = "scalable";

    return ui + " UI & " + logic + " logic";
  }`,
    ],
    loop: 1,
    typeSpeed: 28,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  const workFlow = [
    { title: "Understand the Problem", desc: "Analyze requirements and identify key challenges" },
    { title: "Plan the Solution", desc: "Break the problem into smaller logical steps" },
    { title: "Implement Carefully", desc: "Write clean, readable, and efficient code" },
    { title: "Build & Optimize", desc: "Clean React components with performance in mind" },
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

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Scroll par baar-baar animation trigger karne ke liye once: false
  const isLeftInView = useInView(leftRef, { once: false, amount: 0.3 });
  const isRightInView = useInView(rightRef, { once: false, amount: 0.3 });

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A developer who enjoys turning complex problems into simple, efficient, and maintainable solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* LEFT: About + Highlights */}
          <div ref={leftRef} className="space-y-4">
            <motion.div
              initial="hidden"
              animate={isLeftInView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              I’m a passionate web developer focused on{" "}
              <span className="font-semibold text-indigo-400">problem-solving</span> with efficient, logical solutions. I aim to understand problems deeply, plan step-by-step solutions, and implement clean, maintainable code.
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLeftInView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 leading-relaxed text-lg"
            >
              I enjoy taking challenging problems and turning them into simple, functional solutions that work reliably.
            </motion.div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mt-2">
              {leftHighlights.map((item, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate={isLeftInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Code Snippet */}
            <motion.div
              initial="hidden"
              animate={isLeftInView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-4 w-full max-w-md"
            >
              <div className="bg-neutral-900/80 border border-white/10 rounded-xl shadow-2xl p-3 font-mono text-xs text-emerald-400">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-white/40">hero.js</span>
                </div>
                <pre className="leading-relaxed whitespace-pre-wrap">
                  {code}
                  <Cursor cursorStyle="▋" />
                </pre>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: WorkFlow + Focus */}
          <div ref={rightRef} className="space-y-8">

            {/* WorkFlow */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">How I Work</h3>
              <div className="space-y-3">
                {workFlow.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={isRightInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-white/10 bg-white/5"
                  >
                    <h4 className="font-semibold">{index + 1}. {step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Currently Focused On</h3>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((focus, index) => (
                  <motion.span
                    key={index}
                    initial="hidden"
                    animate={isRightInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="px-3 py-1 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
