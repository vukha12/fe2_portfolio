import { Canvas } from "@react-three/fiber";
import { Conmputer } from "./Computer";
import { OrbitControls, Environment } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import ComputerLights from "./ComputerLights";
import * as THREE from "three";

const Home3D = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 35 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <ComputerLights />
      <group scale={isMobile ? 0.7 : 1}>
        <Conmputer />
      </group>
    </Canvas>
  );
};

export default Home3D;
