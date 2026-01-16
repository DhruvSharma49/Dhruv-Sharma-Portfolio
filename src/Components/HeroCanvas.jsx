
// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, PerspectiveCamera } from "@react-three/drei";
// import SpinningLogo from "./SpiningLogo";
// export default function HeroCanvas() {
//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10">
//       <Canvas dpr={[1, 1.5]} shadows>
//         <color attach="background" args={["#0a0a0a"]} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[3, 3, 3]} intensity={1.2} castShadow />
//         <PerspectiveCamera makeDefault position={[0, 0, 4]} />
//         <SpinningLogo />
//         <Environment preset="city" />
//       </Canvas>
//     </div>
//   );
// }

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import SpinningLogo from "./SpiningLogo";


export default function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20"> {/* z-20 to be above image */}
      <Canvas dpr={[1, 1.5]} shadows>
        <color attach="background" args={["#0a0a0a"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} castShadow />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <SpinningLogo />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}




// import React, { Suspense, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, PerspectiveCamera, Html } from "@react-three/drei";
// import SpinningLogo from "./SpiningLogo";

// export default function HeroCanvas() {
//   const [mounted, setMounted] = useState(false);

//   // Lazy mount Canvas after DOM ready
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="pointer-events-none absolute inset-0 z-20">
//       {/* Background placeholder to hide white flash */}
//       <div className="absolute inset-0 bg-[#0a0a0a]" />

//       {mounted && (
//     <Canvas
//   dpr={[1, 1.5]}
//   shadows
//   gl={{ antialias: true, preserveDrawingBuffer: true }}
//   style={{ background: "#0a0a0a" }}   // 👈 force black background
// >

//           <color attach="background" args={["#0a0a0a"]} />
//           <ambientLight intensity={0.5} />
//           <directionalLight
//             position={[3, 3, 3]}
//             intensity={0.8}
//             castShadow
//             shadow-mapSize-width={256}
//             shadow-mapSize-height={256}
//           />
//           <PerspectiveCamera makeDefault position={[0, 0, 4]} />

//           <Suspense fallback={<Html center style={{ color: "white" }}>Loading 3D...</Html>}>
//             <SpinningLogo />
//           </Suspense>

//           <Environment preset="sunset" background={false} />
//         </Canvas>
//       )}

//       {/* Fade-in CSS */}
//       <style>
//         {`
//           .fade-in-canvas {
//             opacity: 0;
//             animation: fadeIn 0.5s forwards;
//           }
//           @keyframes fadeIn {
//             to { opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }
