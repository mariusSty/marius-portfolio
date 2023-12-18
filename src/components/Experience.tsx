import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Canvas
        className="touch-none"
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-5, 5, 5],
        }}
      >
        <Environment preset="city" />
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={"#151e3f"}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />

            <primitive object={computer.scene} />
            <Html
              transform
              wrapperClass="computer-screen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://cube-galaxy.vercel.app/" />
            </Html>
          </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Canvas>
    </>
  );
}
