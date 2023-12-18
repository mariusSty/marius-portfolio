import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  return (
    <>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls makeDefault />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </Canvas>
    </>
  );
}
