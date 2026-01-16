import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function SpinningLogo() {
  const ref = useRef();
  const [scale, setScale] = useState(1); // default desktop scale

  // Set scale based on window width
  useEffect(() => {
    const updateScale = () => {
        // Scale for mobile vs desktop
      setScale(window.innerWidth < 768 ? 0.6 : 1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.x += d * 0.4;
    ref.current.rotation.y += d * 0.6;
  });

  return (
    <Float floatIntensity={1.2} 
    rotationIntensity={0.6} 
    speed={1.1}>
      <mesh ref={ref} castShadow receiveShadow scale={[scale, scale, scale]}>
        <icosahedronGeometry args={[1.05, 0]} /> {/* Original size preserved */}
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          color="#8b5cf6"
        />
      </mesh>
    </Float>
  );
}
