"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { Group, MathUtils } from "three";

const rings = Array.from({ length: 22 }, (_, i) => {
  const latitude = (i / 21) * Math.PI;
  const radius = Math.sin(latitude) * 1.88;
  return Array.from({ length: 97 }, (_, j): [number, number, number] => {
    const angle = (j / 96) * Math.PI * 2;
    return [Math.cos(angle) * radius, Math.cos(latitude) * 1.88, Math.sin(angle) * radius];
  });
});
const meridians = Array.from({ length: 18 }, (_, i) => {
  const angle = (i / 18) * Math.PI;
  return Array.from({ length: 97 }, (_, j): [number, number, number] => {
    const t = (j / 96) * Math.PI * 2;
    return [Math.cos(t) * Math.cos(angle) * 1.89, Math.sin(t) * 1.89, Math.cos(t) * Math.sin(angle) * 1.89];
  });
});
const orbit = Array.from({ length: 129 }, (_, i): [number, number, number] => {
  const t = (i / 128) * Math.PI * 2;
  return [Math.cos(t) * 2.6, Math.sin(t) * 2.6, 0];
});
function MarketGlobe() {
  const globe = useRef<Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!globe.current) return;
    globe.current.rotation.y = MathUtils.damp(globe.current.rotation.y, pointer.x * 0.26 + 0.3, 2.5, delta);
    globe.current.rotation.x = MathUtils.damp(globe.current.rotation.x, -pointer.y * 0.15 + 0.18, 2.5, delta);
  });
  return <group ref={globe} rotation={[0.18, 0.3, -0.3]}>
    <mesh><sphereGeometry args={[1.86, 40, 32]} /><meshStandardMaterial color="#11190b" roughness={0.6} metalness={0.5} /></mesh>
    {rings.map((points, i) => <Line key={`r${i}`} points={points} color="#b9d878" lineWidth={0.65} transparent opacity={0.33} />)}
    {meridians.map((points, i) => <Line key={`m${i}`} points={points} color="#b9d878" lineWidth={0.6} transparent opacity={0.3} />)}
    <group rotation={[1.08, 0.25, 0]}><Line points={orbit} color="#d6f893" lineWidth={1} transparent opacity={0.7} /><mesh position={[2.6, 0, 0]}><sphereGeometry args={[0.055, 12, 12]} /><meshBasicMaterial color="#e2ffaf" /></mesh></group>
    <group rotation={[0.5, 0.9, 0.7]}><Line points={orbit} color="#b5c993" lineWidth={0.7} transparent opacity={0.22} /></group>
    {[[0.8, 0.7, 1.52], [-1.2, 0.3, 1.43], [0.3, -1.2, 1.43], [-0.5, 1.6, 0.92], [1.6, -0.2, 0.99]].map((p, i) => <group key={i} position={p as [number, number, number]}><mesh><sphereGeometry args={[0.043, 12, 12]} /><meshBasicMaterial color="#e5ffb6" /></mesh><mesh><sphereGeometry args={[0.09, 12, 12]} /><meshBasicMaterial color="#d5ff98" transparent opacity={0.16} /></mesh></group>)}
  </group>;
}
export default function MarketScene({ active }: { active: boolean }) {
  return <Canvas dpr={[1, 1.5]} frameloop={active ? "always" : "never"} camera={{ position: [0, 0, 7.7], fov: 43 }} gl={{ antialias: true, alpha: true, powerPreference: "low-power" }} aria-hidden="true"><ambientLight intensity={0.6} /><directionalLight position={[3, 4, 5]} intensity={3} color="#d0ed9f" /><pointLight position={[-3, -2, 3]} intensity={6} color="#719346" /><MarketGlobe /></Canvas>;
}
