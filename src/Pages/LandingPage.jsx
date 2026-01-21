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
      "MERN Stack Developer",
      "Building interactive web apps",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });


  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-950 text-white overflow-hidden pb-[16rem] lg:pb-0"
    >
      {/* background effect (lightweight) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

      <Container className="relative z-20 pt-32 lg:pt-40 px-6 lg:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          {/* Text Content */}
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

       <div>
  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200">
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
              <span className="text-amber-200 font-medium">solid logic</span>. I
              focus on usability, performance, and maintainable code.
            </p>

            <ol className="text-white/80 list-decimal list-inside space-y-2 ml-2">
              <li>Focused on clean code, modern UI, and real-world performance.</li>
              <li>Driven by simplicity, scalability, and user experience.</li>
            </ol>

            {/* <Button
              as="a"
              href="#projects"
              className="bg-rose-400/80 hover:bg-rose-400 text-white px-5 py-2 text-sm font-medium w-fit transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button> */}
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

      {/* LCP IMAGE — OUTSIDE FRAMER MOTION */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
        <div className="mx-auto max-w-[1200px] relative flex justify-end pr-6 lg:pr-16">
          <img
            src={ProfilePicture}
            alt="Dhruv Sharma"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="600"
            height="800"
            className="h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] w-auto object-contain select-none"
          />
        </div>
      </div>
    </section>
  );
}

