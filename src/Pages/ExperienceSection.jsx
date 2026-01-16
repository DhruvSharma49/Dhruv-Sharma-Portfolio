// import React from "react";
// import Container from "./Container";

// const items = [
//   { role: "Senior Front‑End Engineer", at: "Studio XYZ", time: "2023 — Present", points: ["Led design‑system rebuild", "Cut LCP by 35%", "Integrated 3D hero"] },
//   { role: "UI Engineer", at: "Acme Co.", time: "2021 — 2023", points: ["Built analytics suite", "Mentored devs", "Improved a11y score"] },
// ];

// export default function ExperienceSection() {
//   return (
//     <section id="experience" className="relative bg-neutral-950 py-16 text-white overflow-hidden">
      
//       {/* Top Half Background Image */}
// <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
//   <img
//     src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=2070&q=80"
//     alt="Developer Background"
//     className="w-full h-full object-cover"
//   />
//   {/* Gradient fade to bottom */}
//   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
// </div>


//       {/* Content */}
//       <Container className="relative z-10">
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
//         <div className="mt-8 space-y-6">
//           {items.map((it) => (
//             <div key={it.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <div className="flex flex-wrap items-baseline justify-between gap-2">
//                 <h3 className="text-lg font-semibold">{it.role} • <span className="text-white/70">{it.at}</span></h3>
//                 <span className="text-sm text-white/60">{it.time}</span>
//               </div>
//               <ul className="mt-3 list-inside list-disc text-sm text-white/80">
//                 {it.points.map((p) => <li key={p}>{p}</li>)}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

import Container from "../Components/Container";

const items = [
  {
    role: "Front-End Developer (Project Experience)",
    at: "Personal & Academic Projects",
    time: "2023 — Present",
    points: [
      "Built responsive React applications using Tailwind CSS",
      "Implemented smooth animations with Framer Motion",
      "Focused on performance, accessibility, and clean UI structure",
    ],
  },
  {
    role: "JavaScript Developer (Hands-On Practice)",
    at: "Self-Learning",
    time: "2022 — 2023",
    points: [
      "Created projects like Weather App and Typing Speed Tester",
      "Worked with REST APIs and async JavaScript patterns",
      "Improved problem-solving through real-world UI scenarios",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-neutral-950 py-16 text-white overflow-hidden"
    >
      {/* Background image — KEPT */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=2070&q=80"
          alt="Developer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
      </div>

      <Container className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Project Experience
        </h2>

        <div className="mt-8 space-y-6">
          {items.map((it) => (
            <div
              key={it.role}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {it.role} •{" "}
                  <span className="text-white/70">{it.at}</span>
                </h3>
                <span className="text-sm text-white/60">{it.time}</span>
              </div>

              <ul className="mt-3 list-inside list-disc text-sm text-white/80">
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
