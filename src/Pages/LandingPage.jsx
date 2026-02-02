// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Container from "../Components/Container";
// import Button from "../Components/Button";
// import ProfilePicture from "../assets/ProfilePicture.webp";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

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
//       className="relative min-h-screen bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-950 text-white overflow-hidden"
//     >
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

//       {/* ================= MOBILE ================= */}
//       <div className="block lg:hidden">
//         <Container className="relative z-20 pt-24 px-6 pb-16">
//           <div className="mx-auto max-w-[1200px] flex flex-col items-center gap-8">

//             {/* Original Content - Top Section */}
//             <motion.div
//               className="w-full space-y-4"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
//                 Hi, I'm <span className="text-amber-200">Dhruv Sharma</span>
//               </h1>

//               <div className="min-h-[2.5rem] text-center">
//                 <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
//                   {mounted && (<>{text}<Cursor cursorStyle="|" /></>)}
//                 </p>
//               </div>

//               <p className="text-white/70 text-sm text-center leading-relaxed max-w-md mx-auto">
//                 Passionate about web development, I craft modern and scalable digital experiences combining clean design with solid logic. I focus on usability, performance, and maintainable code.
//               </p>

//               <ol className="text-white/80 list-decimal list-inside space-y-1 text-sm text-center max-w-md mx-auto">
//                 <li>Focused on clean code, modern UI, and performance.</li>
//                 <li>Driven by simplicity, scalability, and UX.</li>
//               </ol>

//               <div className="flex justify-center">
//                 <Button
//                   className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
//                   onClick={() =>
//                     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
//                   }
//                 >
//                   View Project
//                 </Button>
//               </div>
//             </motion.div>

//             {/* Simple Professional Image Box */}
//             <motion.div
//               className="w-full max-w-lg mt-6"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3 }}
//             >
//               <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-xl">
//                 <img
//                   src={ProfilePicture}
//                   alt="Dhruv Sharma"
//                   className="w-full h-auto rounded-xl"
//                 />
//               </div>
//             </motion.div>

//           </div>
//         </Container>
//       </div>

//       {/* ================= LARGE SCREEN ================= */}
//       <div className="hidden lg:block">
//         <Container className="relative z-20 pt-32 px-6 lg:px-16 pb-4">
//           <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
//             <motion.div
//               className="flex flex-col gap-2 md:w-6/12 lg:w-5/12"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h1 className="text-5xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
//                 Hi, I'm <span className="text-amber-200">Dhruv Sharma</span>
//               </h1>

//               <div className="min-h-[4.5rem]">
//                 <p className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
//                   {mounted && (<>{text}<Cursor cursorStyle="|" /></>)}
//                 </p>
//               </div>

//                       <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
//                Passionate about web development, I craft modern and scalable
//               digital experiences combining{" "}
//                <span className="text-rose-200 font-medium">clean design</span>{" "}
//              with{" "}
//                <span className="text-amber-200 font-medium">solid logic</span>. I
//                               focus on usability, performance, and maintainable code.
//                                            </p>

//              <ol className="text-white/80 list-decimal list-inside space-y-2 ml-2">
//                <li>Focused on clean code, modern UI, and real-world performance.</li>
//                <li>Driven by simplicity, scalability, and user experience.</li>
//             </ol>

//               <Button
//                 className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105"
//                 onClick={() =>
//                   document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
//                 }
//               >
//                 View Projects
//               </Button>
//             </motion.div>
//           </div>
//         </Container>

//         <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
//           <div className="mx-auto max-w-[1800px] relative flex justify-end pr-6 lg:pr-16">
//             <motion.img
//               src={ProfilePicture}
//               alt="Dhruv Sharma"
//               loading="eager"
//               fetchPriority="high"
//               decoding="async"
//               width="600"
//               height="800"
//               className="h-[80vh] xl:h-[90vh] w-auto object-contain select-none"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               whileHover={{ scale: 1.02 }}
//             />
//           </div>
//         </div>
//       </div>
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
  useEffect(() => setMounted(true), []);

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
      className="relative lg:min-h-screen bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden">
        <Container className="relative z-20 pt-38 px-6 pb-8">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center gap-6">
            {/* Original Content - Top Section */}
            <motion.div
              className="w-full space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
                Hi, I'm <span className="text-amber-200">Dhruv Sharma</span>
              </h1>

              <div className="min-h-[2.5rem] text-center">
                <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
                  {mounted && (
                    <>
                      {text}
                      <Cursor cursorStyle="|" />
                    </>
                  )}
                </p>
              </div>

              <p className="text-white/70 text-sm text-center leading-relaxed max-w-md mx-auto">
                Passionate about web development, I craft modern and scalable
                digital experiences combining clean design with solid logic. I
                focus on usability, performance, and maintainable code.
              </p>

              <ol className="text-white/80 list-decimal list-inside space-y-1 text-sm text-center max-w-md mx-auto">
                <li>Focused on clean code, modern UI, and performance.</li>
                <li>Driven by simplicity, scalability, and UX.</li>
              </ol>

              <div className="flex justify-center">
                <Button
                  className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Project
                </Button>
              </div>
            </motion.div>

            {/* Simple Professional Image Box */}
            <motion.div
              className="w-full max-w-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-xl">
                <img
                  src={ProfilePicture}
                  alt="Dhruv Sharma"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* ================= LARGE SCREEN ================= */}
      <div className="hidden lg:block">
        {/* Text content */}
        <Container className="relative z-20 pt-40 px-6 lg:px-16 pb-4">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              className="flex flex-col gap-2 max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
                Hi, I'm <span className="text-amber-200">Dhruv Sharma</span>
              </h1>

              <div className="min-h-[4.5rem]">
                <p className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
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
                <li>
                  Focused on clean code, modern UI, and real-world performance.
                </li>
                <li>Driven by simplicity, scalability, and user experience.</li>
              </ol>
              <Button
                className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Image - absolute positioned for real desktop (width > 900px) */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none min-[900px]:block hidden">
          <div className="mx-auto max-w-[1800px] relative flex justify-end pr-6 lg:pr-16">
            <motion.img
              src={ProfilePicture}
              alt="Dhruv Sharma"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="600"
              height="800"
              className="h-[80vh] xl:h-[80vh] w-auto object-contain select-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </div>

        {/* Image box for mobile Chrome desktop mode (width < 900px but lg class active) */}
        <div className="min-[900px]:hidden block">
          <Container className="relative z-20 pb-16 px-6">
            <div className="mx-auto max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-xl">
                  <img
                    src={ProfilePicture}
                    alt="Dhruv Sharma"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
