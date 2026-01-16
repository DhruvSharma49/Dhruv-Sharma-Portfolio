// import React, { useEffect, useState } from "react";
// import Container from "../Components/Container";
// import Button from "../Components/Button";

// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   const counters = [
//     { label: "Years Experience", target: 3, suffix: "+" },
//     { label: "Projects Completed", target: 25, suffix: "+" },
//     { label: "Happy Clients", target: 50, suffix: "+" },
//   ];

//   const [counts, setCounts] = useState(counters.map(() => 0));

//   // Mounted state for HeroCanvas
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // Ensure top scroll
//     window.scrollTo(0, 0);

//     // Small delay to let DOM paint → avoid white screen
//     const timer = setTimeout(() => setMounted(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const duration = 2000;
//     const intervalTime = 20;
//     const steps = duration / intervalTime;
//     const increments = counters.map(c => c.target / steps);

//     const interval = setInterval(() => {
//       setCounts(prev => {
//         const next = prev.map((val, i) => {
//           const inc = increments[i];
//           if (val + inc >= counters[i].target) return counters[i].target;
//           return val + inc;
//         });
//         if (next.every((val, i) => val >= counters[i].target)) clearInterval(interval);
//         return next;
//       });
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative isolate bg-neutral-950 pt-28 text-white min-h-screen">
//       {/* Background fallback to avoid white screen */}
//       <div className="absolute inset-0  z-0 gap-1.5" />


//       <Container className="relative z-20 grid items-center gap-10 py-16 md:grid-cols-2">
//         {/* Left Text */}
//         <div>
//           <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
//             Building elegant, performant web experiences
//           </h1>
//           <p className="mt-4 text-white/100">
//             I’m a front‑end developer crafting product‑grade UIs with motion and 3D flourishes—focused on accessibility and speed.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             <Button as="a" href="#projects" className="bg-white text-neutral-900 hover:opacity-90">
//               View projects
//             </Button>
        
//           </div>

//           {/* Animated Counters */}
//           <div className="mt-10 flex flex-wrap gap-6">
//             {counters.map((counter, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <span className="text-3xl font-bold">
//                   {Math.floor(counts[i])}{counter.suffix}
//                 </span>
//                 <span className="mt-1 text-white/70">{counter.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Profile Image */}
//         {/* <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
//           <img src={ProfilePicture} alt="Profile" className="w-full h-full object-cover" />
      
//         </div> */}
  
//           <div className="relative group">
//            <div className="absolute inset-0 rounded-3xl  opacity-0  transition" />
//           <div className="lg:col-span-5 flex justify-center lg:justify-end">
//             <img
//               src={ProfilePicture}
//               alt="Profile"
//               className="w-[260px] sm:w-[320px] lg:w-[380px] object-contain translate-y-6 group-hover:scale-105 "
//             />
//           </div>
//          </div>
//       </Container>
//     </section>
//   );
// }


// import React from "react";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen bg-neutral-950 text-white overflow-hidden flex items-center">

//       {/* Soft background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

//       <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-7 space-y-8">
//           <p className="text-sm uppercase tracking-widest text-white/50">
//             Hello, I’m Dhruv Sharma
//           </p>

//           <h1 className="text-[3rem] sm:text-[4rem] lg:text-[4.8rem] font-extrabold leading-[1.05]">
//             I build scalable <br />
//             web experiences <br />
//             that feel effortless.
//           </h1>

//           <p className="text-lg text-white/65 max-w-xl">
//             A full-stack developer focused on crafting clean user interfaces,
//             writing strong logic, and building modern web applications that
//             perform reliably in real-world use.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-8 py-3 text-lg hover:opacity-90"
//           >
//             View Projects
//           </Button>
//         </div>

//         {/* RIGHT IMAGE (NO BOX) */}
//         <div className="lg:col-span-5 flex justify-center lg:justify-end">
//           <img
//             src={ProfilePicture}
//             alt="Dhruv Sharma"
//             className="w-[260px] sm:w-[320px] lg:w-[380px] object-contain translate-y-6"
//           />
//         </div>

//       </Container>
//     </section>
//   );
// }


// import React, { useEffect } from "react";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   const [text] = useTypewriter({
//     words: [
//       "Frontend Developer",
//       "Backend Developer",
//       "MERN Stack Developer",
//       "Building interactive web apps",
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative isolate min-h-screen bg-neutral-950 text-white overflow-hidden"
//     >
//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-[120px]" />
//       </div>

//       <Container className="grid md:grid-cols-2 gap-12 items-center pt-32 pb-20">
//         {/* LEFT */}
//         <div className="space-y-6">
//           {/* Badge */}
//           <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-indigo-400">
//             👋 Hello, I’m Dhruv Sharma
//           </span>

//           <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
//             Crafting{" "}
//             <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
//               modern & scalable
//             </span>{" "}
//             web experiences
//           </h1>

//           {/* Typing */}
//           <p className="text-2xl sm:text-3xl font-semibold text-white/90">
//             {text}
//             <Cursor cursorStyle="|" />
//           </p>

//           <p className="max-w-xl text-white/70 text-lg">
//             I focus on clean UI, smooth interactions, and strong logic to build
//             reliable web applications using modern technologies.
//           </p>

//           <div className="flex gap-4 pt-4">
//             <Button
//               as="a"
//               href="#projects"
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90"
//             >
//               View Projects
//             </Button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative group">
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
//           <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
//             <img
//               src={ProfilePicture}
//               alt="Profile"
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   return (
//     <section id="home" className="relative min-h-screen bg-neutral-950 text-white overflow-hidden flex items-center">
//       {/* background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

//       <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">

//         {/* LEFT TEXT */}
//         <motion.div
//           className="lg:col-span-4 space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xs tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Web <br /> Developer
//           </h1>

//           <p className="text-white/60 max-w-sm">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-7 py-3 text-sm"
//           >
//             View Projects
//           </Button>
//         </motion.div>

 
//         {/* CENTER IMAGE — PREVIEW-LIKE SCALE */}
// <motion.div
//   className="lg:col-span-5
//     flex
//     justify-center
//     items-end
//     relative
//     pt-28
//   "
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.9, ease: "easeOut" }}
//   viewport={{ once: true }}
// >
//   <img
//     src={ProfilePicture}
//     alt="Dhruv Sharma"
//     className="
//       h-[88vh]
//       lg:h-[92vh]
//       w-auto
//       max-w-none
//       object-contain
//       object-top
//       pointer-events-none
//       select-none
//     "
//   />
// </motion.div>


//         {/* RIGHT EMPTY SPACE (BALANCE) */}
//         <div className="hidden lg:block lg:col-span-4" />
//       </Container>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-screen bg-neutral-950 text-white overflow-hidden flex items-center"
//     >
//       {/* background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

//       <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">

//         {/* LEFT TEXT */}
//         <motion.div
//           className="lg:col-span-4 space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
          
//         >
//           <p className="text-xs tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Web <br /> Developer
//           </h1>

//           <p className="text-white/60 max-w-sm">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-7 py-3 text-sm"
//           >
//             View Projects
//           </Button>
//         </motion.div>

//          {/* CENTER IMAGE — PREVIEW-LIKE SCALE */}
// <motion.div
//   className="lg:col-span-5
//     flex
//     justify-center
//     items-end
//     relative
//     pt-40
//   "
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.9, ease: "easeOut" }}
//   viewport={{ once: true }}
// >
//   <img
//     src={ProfilePicture}
//     alt="Dhruv Sharma"
//     className="
//       h-[50vh]
//       lg:h-[92vh]
//       w-auto
//       max-w-none
//       object-contain
//       object-top
//       pointer-events-none
//       select-none
//     "
//   />
// </motion.div>
//         {/* RIGHT EMPTY SPACE */}
//         <div className="hidden lg:block lg:col-span-3" />
//       </Container>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   return (
//     // <section
//     //   id="home"
//     //   className="relative h-screen bg-neutral-950 text-white overflow-hidden flex items-center"
//     // >
//     <section
//   id="home"
//   className="
//     relative
//     min-h-[100svh]   /* mobile safe viewport */
//     md:h-screen      /* desktop unchanged */
//     bg-neutral-950
//     text-white
//     overflow-hidden
//     flex
//     items-center
//     pt-20 md:pt-0    /* navbar space ONLY mobile */
//   "
// >

//       {/* background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

//       <Container className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-6">

//         {/* LEFT TEXT */}
//         <motion.div
//           className="md:col-span-6 lg:col-span-5 space-y-4 md:space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             Web <br /> Developer
//           </h1>

//           <p className="text-white/60 sm:text-sm md:text-base lg:text-lg">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-6 sm:px-7 py-2 sm:py-3 text-sm sm:text-base"
//           >
//             View Projects
//           </Button>
//         </motion.div>

//         {/* CENTER IMAGE */}
//         <motion.div
//           // className="md:col-span-6 lg:col-span-5 flex justify-center items-end relative pt-20 sm:pt-28 lg:pt-40"
//             className="
//     md:col-span-6 lg:col-span-5
//     flex justify-center items-end
//     relative
//     pt-10 sm:pt-19
//     md:pt-0 lg:pt-40
//   "
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <img
//             src={ProfilePicture}
//             alt="Dhruv Sharma"
//             className="
//               h-[50vh]
//               sm:h-[65vh]
//               md:h-[75vh]
//               lg:h-[90vh]
//               w-auto
//               max-w-none
//               object-contain
//               object-top
//               pointer-events-none
//               select-none
//             "
//           />

//           {/* soft glow behind image */}
//           <div className="absolute bottom-12 w-[75%] h-[55%] bg-white/10 blur-3xl rounded-full -z-10" />
//         </motion.div>

//         {/* RIGHT EMPTY SPACE */}
//         <div className="hidden lg:block lg:col-span-2" />
//       </Container>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         min-h-[100svh] md:h-screen
//         bg-neutral-950 text-white
//         overflow-hidden
//         flex items-center
//         pt-20 md:pt-0
//       "
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

//       <Container className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-6">

//         {/* LEFT TEXT */}
//         <motion.div
//           className="
//             md:col-span-6 lg:col-span-5
//             space-y-4 md:space-y-6
//             text-center md:text-left
//             flex flex-col
//             items-center md:items-start
//           "
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             Web <br /> Developer
//           </h1>

//           <p className="text-white/60 sm:text-sm md:text-base lg:text-lg max-w-sm">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-6 sm:px-7 py-2 sm:py-3 text-sm sm:text-base mx-auto md:mx-0"
//           >
//             View Projects
//           </Button>
//         </motion.div>

//         {/* CENTER IMAGE */}
//         <motion.div
//           className="
//             md:col-span-6 lg:col-span-5
//             flex justify-center items-end
//             relative
//             pt-8 sm:pt-12
//             md:pt-0 lg:pt-40
//           "
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <img
//             src={ProfilePicture}
//             alt="Dhruv Sharma"
//             className="
//               h-[42vh]
//               sm:h-[55vh]
//               md:h-[75vh]
//               lg:h-[90vh]
//               w-auto
//               max-w-none
//               object-contain
//               object-top
//               pointer-events-none
//               select-none
//             "
//           />

//           {/* Soft glow */}
//           <div className="absolute bottom-10 w-[70%] h-[50%] bg-white/10 blur-3xl rounded-full -z-10" />
//         </motion.div>

//         {/* RIGHT SPACE (Desktop balance) */}
//         <div className="hidden lg:block lg:col-span-2" />
//       </Container>
//     </section>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         h-[100svh]
//         bg-neutral-950 text-white
//         overflow-hidden
//       "
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black z-0" />

//       {/* TEXT CONTENT */}
//       <Container className="relative z-20 h-full grid grid-cols-1 md:grid-cols-12 items-center gap-6">
        
//         {/* LEFT TEXT — untouched */}
//               <motion.div
//           className="md:col-span-6 lg:col-span-5 space-y-4 md:space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             Web <br /> Developer
//           </h1>

//           <p className="text-white/60 sm:text-sm md:text-base lg:text-lg">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-6 sm:px-7 py-2 sm:py-3 text-sm sm:text-base"
//           >
//             View Projects
//           </Button>
//         </motion.div>

//         <div className="hidden lg:block lg:col-span-7" />
//       </Container>

//       {/* IMAGE — ABSOLUTE BOTTOM (THIS FIXES EVERYTHING) */}
//       <motion.div
//         className="
//           absolute
//           bottom-0
//           left-1/2
//           -translate-x-1/2
//           z-10
//           flex
//           justify-center
//           w-full
//           pointer-events-none
      
//         "
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <img
//           src={ProfilePicture}
//           alt="Dhruv Sharma"
//           className="
//             h-[40vh]
//             sm:h-[58vh]
//             md:h-[78vh]
//             lg:h-[90vh]
//             w-auto
//             object-contain
//             select-none
//             items-center
//             justify-center
//           "
//         />
//       </motion.div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [text] = useTypewriter({
//     words: [
//       "FullStack Developer",
//       "Backend Developer",
//       "MERN Stack Developer",
//       "Building interactive web apps",
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });
//   const [code] = useTypewriter({
//     words: [
//       `function buildExperience() {\n  const ui = "clean";\n  const logic = "scalable";\n\n  return ui + " UI & " + logic + " logic";\n}`,
//     ],
//     loop: 1,
//     typeSpeed: 28,
//     deleteSpeed: 0,
//     delaySpeed: 1000,
//   });
//   return (
//     // <section
//     //   id="home"
//     //   className="
//     //     relative
//     //     h-screen
//     //     bg-gradient-to-br from-neutral-900 via-neutral-950 to-black z-0
//     //      text-white
    
//     //     overflow-hidden
//     //   "
//     // >
//     <section
//   id="home"
//   className="
//     relative
//     h-screen
//     bg-gradient-to-br from-neutral-900 via-neutral-950 to-black
//     text-white
//     overflow-hidden
//     pb-[40vh] sm:pb-[50vh] md:pb-[60vh] lg:pb-[70vh]
//   "
// >

//       {/* Background */}
//       <div className="absolute inset-0 " />

//       {/* TEXT CONTENT */}
//       {/* <Container
//         className="
//           relative z-20
//           h-full
//           grid grid-cols-1 md:grid-cols-12
//         items-center
    
//           pb-[40vh] sm:pb-[48vh] md:pb-0
//         "
//       > */}

// <Container
//   className="
//     relative z-20
//     h-full
//     grid
//     grid-cols-1
//     md:grid-cols-12
//     items-center
//     pt-24
//   "
// >


//         {/* LEFT TEXT */}
//         {/* <motion.div
//           className="md:col-span-6 lg:col-span-5 space-y-4 md:space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         > */}
//         <motion.div
//   className="md:col-span-6 lg:col-span-5 space-y-4 md:space-y-6"
//   initial={{ opacity: 0, x: -40 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
// >

//           <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           {/* Typing */}
//           <p className="text-2xl sm:text-3xl font-semibold text-white/90">
//             {text}
//             <Cursor cursorStyle="|" />
//           </p>


//           <p className="text-white/60 sm:text-sm md:text-base lg:text-lg">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-6 py-3 text-sm sm:text-base"
//           >
//             View Projects
//           </Button>
//             <div className="hidden lg:block lg:col-span-7" />
//         </motion.div>
//  {/* <motion.div
//           className="hidden md:flex md:col-span-4 justify-evenly"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//         >
//           <div
//             className="
//               w-full max-w-md
//               bg-neutral-900/80
//               border border-white/10
//               rounded-xl
//               shadow-2xl
//               backdrop-blur
//               p-4
//               font-mono text-sm text-emerald-400
//             "
//           > */}

// <motion.div
//   className="
//     hidden md:flex
//     md:col-span-6 lg:col-span-7
//     justify-end
//     mt-12
//   "
//   initial={{ opacity: 0, x: 40 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.9 }}
//   viewport={{ once: true }}
// >

//   <div
//     className="
//       w-full max-w-md
//       bg-neutral-900/80
//       border border-white/10
//       rounded-xl
//       shadow-2xl
//       backdrop-blur
//       p-4
//       font-mono
//       text-sm
//       text-emerald-400
//     "
//   >

//             {/* Editor header */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="w-3 h-3 rounded-full bg-red-500" />
//               <span className="w-3 h-3 rounded-full bg-yellow-400" />
//               <span className="w-3 h-3 rounded-full bg-green-500" />
//               <span className="ml-3 text-xs text-white/40">
//                 hero.js
//               </span>
//             </div>

//             {/* Code typing */}
//             <pre className="leading-relaxed whitespace-pre-wrap">
//               {code}
//               <Cursor cursorStyle="▋" />
//             </pre>
//           </div>
//         </motion.div>
      
//       </Container>

//       {/* IMAGE — FIXED BOTTOM */}
//       <motion.div
//         className="
//           absolute
//           bottom-0
//           // left-1/2
//           // -translate-x-1/2
//           z-10
//           w-full
//           flex
//           justify-center
//           pointer-events-none
         
//         "
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <img
//           src={ProfilePicture}
//           alt="Dhruv Sharma"
//           className="
//             h-[40vh]
//             sm:h-[50vh]
//             md:h-[70vh]
//             lg:h-[90vh]
//             lg:pt-5
//             w-auto
//             object-contain
//             select-none
//           "
//         />
//       </motion.div>
      
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [text] = useTypewriter({
//     words: [
//       "FullStack Developer",
//       "Backend Developer",
//       "MERN Stack Developer",
//       "Building interactive web apps",
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });

//   const [code] = useTypewriter({
//     words: [
//       `function buildExperience() {
//   const ui = "clean";
//   const logic = "scalable";

//   return ui + " UI & " + logic + " logic";
// }`,
//     ],
//     loop: 1,
//     typeSpeed: 28,
//     deleteSpeed: 0,
//     delaySpeed: 1000,
//   });

//   return (
//     <section
//       id="home"
//       className="
//         relative
//         h-screen
//         bg-gradient-to-br from-neutral-900 via-neutral-950 to-black
//         text-white
//         overflow-hidden
      
//       "
//     >
//       <Container
//         className="
//           relative z-20
//           h-full
//           grid grid-cols-1 md:grid-cols-12
//           items-center
//           gap-6
//         "
//       >
//         {/* LEFT SECTION */}
//         <motion.div
//      className="md:col-span-6 lg:col-span-5 space-y-4 md:space-y-6 ml-[10%]"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           <p className="text-2xl sm:text-3xl font-semibold text-white/90">
//             {text}
//             <Cursor cursorStyle="|" />
//           </p>

//           <p className="text-white/60 sm:text-sm md:text-base lg:text-lg">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-6 py-3 text-sm sm:text-base"
//           >
//             View Projects
//           </Button>
//         </motion.div>

//         {/* RIGHT SECTION */}
//         <motion.div
//       className="hidden md:flex md:col-span-6 lg:col-span-7 justify-end  "
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
          
//         >
//           <div
//             className="
//               w-full max-w-md
//               bg-neutral-900/80
//               border border-white/10
//               rounded-xl
//               shadow-2xl
//               backdrop-blur
//               p-4
//               font-mono text-sm
//               text-emerald-400
//               ml-[40%]
//             "
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <span className="w-3 h-3 rounded-full bg-red-500" />
//               <span className="w-3 h-3 rounded-full bg-yellow-400" />
//               <span className="w-3 h-3 rounded-full bg-green-500" />
//               <span className="ml-3 text-xs text-white/40">hero.js</span>
//             </div>

//             <pre className="leading-relaxed whitespace-pre-wrap">
//               {code}
//               <Cursor cursorStyle="▋" />
//             </pre>
//           </div>
//         </motion.div>
//       </Container>

//       {/* IMAGE (UNCHANGED) */}
//       <motion.div
//         className="
//           absolute bottom-0
//           w-full
//           flex justify-center
//           z-10
//           pointer-events-none
//         "
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: 'easeOut' }}
//         viewport={{ once: true }}
//       >
//         <img
//           src={ProfilePicture}
//           alt="Dhruv Sharma"
//           className="
//             h-[42vh]
//             sm:h-[50vh]
//             md:h-[65vh]
//             lg:h-[85vh]
//             w-auto
//             object-contain
//             select-none
//           "
//         />
//       </motion.div>
//     </section>
//   );
// }
// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [text] = useTypewriter({
//     words: [
//       "FullStack Developer",
//       "Backend Developer",
//       "MERN Stack Developer",
//       "Building interactive web apps",
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });

//   const [code] = useTypewriter({
//     words: [
//       `function buildExperience() {
//   const ui = "clean";
//   const logic = "scalable";

//   return ui + " UI & " + logic + " logic";
// }`,
//     ],
//     loop: 1,
//     typeSpeed: 28,
//     deleteSpeed: 0,
//     delaySpeed: 1000,
//   });

//   return (
//     <section
//       id="home"
//       className="relative h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white overflow-hidden"
//     >
//       <Container className="relative z-20 h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-16 md:pt-0 px-6 lg:px-16">

//         {/* LEFT SECTION */}
//         <motion.div
//           className="w-full md:w-6/12 space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {/* Name / Intro */}
//           <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//             I’m Dhruv Sharma
//           </p>

//           {/* Typewriter main */}
//           <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90">
//             {text}
//             <Cursor cursorStyle="|" />
//           </p>

//           {/* Description */}
//           <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl">
//             I design and build modern, scalable web experiences with clean UI
//             and solid logic.
//           </p>

//           {/* View Projects Button */}
//           <Button
//             as="a"
//             href="#projects"
//             className="bg-white text-neutral-900 px-6 py-3 text-sm sm:text-base md:text-base lg:text-lg"
//           >
//             View Projects
//           </Button>

//           {/* Typewriter Box (Right section integrated below left section) */}
//           <motion.div
//             className="w-full mt-6"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//           >
//             <div
//               className="
//                 w-full max-w-md
//                 bg-neutral-900/80
//                 border border-white/10
//                 rounded-xl
//                 shadow-2xl
//                 backdrop-blur
//                 p-4
//                 font-mono text-sm md:text-base lg:text-lg
//                 text-emerald-400
//               "
//             >
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="w-3 h-3 rounded-full bg-red-500" />
//                 <span className="w-3 h-3 rounded-full bg-yellow-400" />
//                 <span className="w-3 h-3 rounded-full bg-green-500" />
//                 <span className="ml-3 text-xs md:text-sm lg:text-base text-white/40">hero.js</span>
//               </div>

//               <pre className="leading-relaxed whitespace-pre-wrap">
//                 {code}
//                 <Cursor cursorStyle="▋" />
//               </pre>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* IMAGE (RIGHT side on desktop, bottom fixed on mobile) */}
//         <motion.div
//           className="absolute md:relative bottom-0 md:bottom-auto right-0 md:right-0 w-full md:w-auto flex justify-center md:justify-end z-10 pointer-events-none"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: 'easeOut' }}
//           viewport={{ once: true }}
//         >
//           <img
//             src={ProfilePicture}
//             alt="Dhruv Sharma"
//             className="
//               h-[40vh]
//               sm:h-[50vh]
//               md:h-[65vh]
//               lg:h-[85vh]
//               w-auto
//               object-contain
//               select-none
//             "
//           />
//         </motion.div>
//       </Container>
//     </section>
//   );
// }












// import { motion } from "framer-motion";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.png";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [text] = useTypewriter({
//     words: [
//       "FullStack Developer",
//       "Backend Developer",
//       "MERN Stack Developer",
//       "Building interactive web apps",
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });

//   const [code] = useTypewriter({
//     words: [
//       `function buildExperience() {
//   const ui = "clean";
//   const logic = "scalable";

//   return ui + " UI & " + logic + " logic";
// }`,
//     ],
//     loop: 1,
//     typeSpeed: 28,
//     deleteSpeed: 0,
//     delaySpeed: 1000,
//   });

//   return (
//     <section className="relative h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white overflow-hidden">

//       {/* LEFT SECTION CONTAINER */}
//       <Container className="relative z-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pt-24 px-6 lg:px-16">

//   {/* LEFT CONTENT */}
//   <motion.div
//     className="flex flex-col gap-4 md:w-6/12 lg:w-5/12 md:mt-16" // <-- thoda chhota kiya md/lg screen pe
//     initial={{ opacity: 0, x: -40 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.8 }}
//     viewport={{ once: true }}
//   >
//     <p className="text-xs sm:text-sm tracking-widest text-white/50 uppercase">
//       I’m Dhruv Sharma
//     </p>

//     <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
//       {text}
//       <Cursor cursorStyle="|" />
//     </p>

//     <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl">
//       I design and build modern, scalable web experiences with clean UI
//       and solid logic.
//     </p>

//     <Button
//       as="a"
//       href="#projects"
//       className="bg-white text-neutral-900 px-6 py-3 text-sm sm:text-base"
//     >
//       View Projects
//     </Button>

//     {/* VS CODE BOX */}
//     <motion.div
//       className="mt-4 w-full max-w-md"
//       initial={{ opacity: 0, x: 40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.9 }}
//       viewport={{ once: true }}
//     >
//       <div className="w-full bg-neutral-900/80 border border-white/10 rounded-xl shadow-2xl backdrop-blur p-2 sm:p-3 font-mono text-xs sm:text-sm md:text-sm lg:text-base text-emerald-400">
//         <div className="flex items-center gap-2 mb-2">
//           <span className="w-3 h-3 rounded-full bg-red-500" />
//           <span className="w-3 h-3 rounded-full bg-yellow-400" />
//           <span className="w-3 h-3 rounded-full bg-green-500" />
//           <span className="ml-2 text-xs md:text-sm text-white/40">hero.js</span>
//         </div>

//         <pre className="leading-relaxed whitespace-pre-wrap">
//           {code}
//           <Cursor cursorStyle="▋" />
//         </pre>
//       </div>
//     </motion.div>
//   </motion.div>
// </Container>

// {/* RIGHT IMAGE */}
// <motion.div
//   className="absolute bottom-0 right-4 md:right-8 lg:right-12 xl:right-16 w-auto flex justify-end z-10 pointer-events-none"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.9, ease: 'easeOut' }}
//   viewport={{ once: true }}
// >
//   <img
//     src={ProfilePicture}
//     alt="Dhruv Sharma"
//     className="h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] w-auto object-contain select-none"
//   />
// </motion.div>


//     </section>
//   );
// }


import { motion } from "framer-motion";
import Container from "../Components/Container";
import Button from "../Components/Button";
import ProfilePicture from "../assets/ProfilePicture.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "Building interactive web apps",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

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

  return (
    <section className="relative h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white overflow-hidden">

      <Container className="relative z-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pt-24 px-6 lg:px-16">

        {/* LEFT SECTION */}
        <motion.div
          className="
            flex flex-col gap-4
            md:w-6/12 lg:w-5/12
            md:mt-16
            lg:-ml-8 xl:-ml-32"
            
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-widest text-white/50 uppercase">
            I’m Dhruv Sharma
          </p>

          {/* ✅ FIXED HEIGHT TYPEWRITER (NO JUMP) */}
          <div className="min-h-[3.5rem] sm:min-h-[4rem]">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 whitespace-nowrap">
              {text}
              <Cursor cursorStyle="|" />
            </p>
          </div>

          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-lg">
            I design and build modern, scalable web experiences with clean UI
            and solid logic.
          </p>

          {/* ✅ COMPACT BUTTON */}
          <Button
            as="a"
            href="#projects"
            className="
              bg-white text-neutral-900
              px-5 py-2
              text-sm font-medium
              w-fit
            "
          >
            View Projects
          </Button>

          {/* CODE BOX */}
          <motion.div
            className="mt-4 w-full max-w-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-900/80 border border-white/10 rounded-xl shadow-2xl backdrop-blur p-3 font-mono text-xs text-emerald-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-white/40">
                  hero.js
                </span>
              </div>

              <pre className="leading-relaxed whitespace-pre-wrap">
                {code}
                <Cursor cursorStyle="▋" />
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* RIGHT IMAGE */}
      <motion.div
        className="absolute bottom-0 right-4 md:right-8 lg:right-12 xl:right-16 w-auto flex justify-end z-10 pointer-events-none"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={ProfilePicture}
          alt="Dhruv Sharma"
          className="h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] w-auto object-contain select-none"
        />
      </motion.div>

    </section>
  );
}
