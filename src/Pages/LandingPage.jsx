// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.webp";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const [text] = useTypewriter({
//     words: [
//       "Full Stack Developer",
//       "Backend Developer",
//       "Frontend Developer",
//       "MERN Stack Developer",
   
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });

//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   return (
//     <section
//       id="home"
//       className="relative h-screen bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-950 text-white overflow-hidden "
//     >
//       {/* background effect (lightweight) */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

//       <Container className="relative z-20 pt-32 lg:pt-40 px-6 lg:px-16">
//         <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
//           {/* Text Content */}
//           <motion.div
//             className="flex flex-col gap-2 md:w-6/12 lg:w-5/12"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
//               Hi, I’m <span className="text-amber-200">Dhruv Sharma</span>
//             </h1>

//             <div className="min-h-[2.2rem] sm:min-h-[4.5rem]">
//               <p className="text-2xl sm:text-3xl md:text-4xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
//                 {mounted && (
//                   <>
//                     {text}
//                     <Cursor cursorStyle="|" />
//                   </>
//                 )}
//               </p>
//             </div>

//             <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
//               Passionate about web development, I craft modern and scalable
//               digital experiences combining{" "}
//               <span className="text-rose-200 font-medium">clean design</span>{" "}
//               with{" "}
//               <span className="text-amber-200 font-medium">solid logic</span>. I
//               focus on usability, performance, and maintainable code.
//             </p>

//             <ol className="text-white/80 list-decimal list-inside space-y-2 ml-2">
//               <li>Focused on clean code, modern UI, and real-world performance.</li>
//               <li>Driven by simplicity, scalability, and user experience.</li>
//             </ol>

//             {/* <Button
//               as="a"
//               href="#projects"
//               className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105"
//             >
//               View Projects
//             </Button> */}
//             <Button
//                           className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105 cursor-pointer"

//   onClick={() => {
//     const section = document.getElementById("projects");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   }}
// >
//   View Projects
// </Button>

//           </motion.div>
//         </div>
//       </Container>

//       {/* LCP IMAGE — OUTSIDE FRAMER MOTION */}
//       <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
//         <div className="mx-auto max-w-[1200px] relative flex justify-end pr-6 lg:pr-16">
//           <img
//             src={ProfilePicture}
//             alt="Dhruv Sharma"
//             loading="eager"
//             fetchPriority="high"
//             decoding="async"
//             width="600"
//             height="800"
//             className="h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] w-auto object-contain select-none"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.webp";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const [text] = useTypewriter({
//     words: [
//       "Full Stack Developer",
//       "Backend Developer",
//       "Frontend Developer",
//       "MERN Stack Developer",
//     ],
//     loop: 0,
//     typeSpeed: 70,
//     deleteSpeed: 50,
//     delaySpeed: 1200,
//   });

//   return (
//     <section
//       id="home"
//       className="relative h-screen bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-950 text-white overflow-hidden"
//     >
//       {/* background effect */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

//       {/* CONTENT */}
//       <Container
//         className="
//     relative z-20
//     h-full
//     pt-24 md:pt-32 lg:pt-40
//     px-6 lg:px-16
//     flex items-start

  
//   "
//       >
//         <div className="max-auto max-w-[1200px] items-start gap-12 w-full">
//           <motion.div
//             className="flex flex-col md:w-8/12 lg:w-4/12"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
//               Hi, I’m <span className="text-amber-200">Dhruv Sharma</span>
//             </h1>

//             <div className="min-h-[2.2rem] sm:min-h-[4.5rem]">
//               <p className="text-2xl sm:text-3xl md:text-4xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
//                 {mounted && (
//                   <>
//                     {text}
//                     <Cursor cursorStyle="|" />
//                   </>
//                 )}
//               </p>
//             </div>

//             <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
//               Passionate about web development, I craft modern and scalable
//               digital experiences combining{" "}
//               <span className="text-rose-200 font-medium">clean design</span>{" "}
//               with{" "}
//               <span className="text-amber-200 font-medium">solid logic</span>.
//             </p>

//             <ol className="text-white/80 list-decimal list-inside space-y-2 ml-2">
//               <li>
//                 Focused on clean code, modern UI, and real-world performance.
//               </li>
//               <li>Driven by simplicity, scalability, and user experience.</li>
//             </ol>

//             <Button
//               className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105"
//               onClick={() => {
//                 document.getElementById("projects")?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//               }}
//             >
//               View Projects
//             </Button>
//           </motion.div>

//           {/* IMAGE — FIXED AT BOTTOM */}
//           <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none flex justify-end max-w-[1200px]">
//             <img
//               src={ProfilePicture}
//               alt="Dhruv Sharma"
//               loading="eager"
//               fetchPriority="high"
//               decoding="async"
//               width="600"
//               height="800"
//               className="h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] w-auto object-contain select-none"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Button from "../Components/Button";
import ProfilePicture from "../assets/ProfilePicture.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
      "MERN Stack Developer",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-950 text-white overflow-hidden"
    >
      {/* background effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

      <Container className="relative z-20 pt-32 lg:pt-40 px-6 lg:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          
          {/* TEXT */}
          <motion.div
            className="flex flex-col gap-2 md:w-6/12 lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
              Hi, I’m <span className="text-amber-200">Dhruv Sharma</span>
            </h1>

            <div className="min-h-[2.2rem] sm:min-h-[4.5rem]">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
                {mounted && (
                  <>
                    {text}
                    <Cursor cursorStyle="|" />
                  </>
                )}
              </p>
            </div>

            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              Passionate about web development, I craft modern and scalable
              digital experiences combining{" "}
              <span className="text-rose-200 font-medium">clean design</span>{" "}
              with{" "}
              <span className="text-amber-200 font-medium">solid logic</span>.
              I focus on usability, performance, and maintainable code.
            </p>

            <ol className="text-white/80 list-decimal list-inside space-y-2 ml-2">
              <li>Focused on clean code, modern UI, and real-world performance.</li>
              <li>Driven by simplicity, scalability, and user experience.</li>
            </ol>

            <Button
              className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* IMAGE — FIXED BOTTOM */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none leading-none">
        <div className="mx-auto max-w-[1200px] relative flex justify-end pr-6 lg:pr-16">
          <img
            src={ProfilePicture}
            alt="Dhruv Sharma"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="600"
            height="800"
            className="block h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] w-auto object-contain select-none"
          />
        </div>
      </div>
    </section>
  );
}
