import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: 3 },
    { label: "Projects Completed", value: 25 },
    { label: "Happy Clients", value: 15 },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 bg-neutral-950 text-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold mb-6">
              About <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              I’m a passionate web developer focused on crafting clean, user-friendly, and visually engaging digital experiences. 
              My goal is to transform complex ideas into intuitive solutions that look great and work even better.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a blend of creative design and efficient coding practices, I help brands and businesses make a 
              memorable impact online. Every project is an opportunity to innovate and deliver value.
            </p>
          </motion.div>

          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg w-full"
              >
                <h3 className="text-4xl font-bold text-indigo-400">
                  {stat.value}+
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
