import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience({ isMobileVersion = false }) {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  const model = isMobileVersion ? phone : computer;
  const polar: [number, number] = isMobileVersion ? [0, 0] : [-0.4, 0.2];
  const azimuth: [number, number] = isMobileVersion ? [-0.5, 0.5] : [-1, 0.75];
  const rotation: [number, number, number] = isMobileVersion
    ? [0.1, -1.5, 0.17]
    : [0.13, 0.1, 0];
  const position: [number, number, number] = isMobileVersion
    ? [0.16, 1.36, 0.08]
    : [0, 1.56, -1.4];

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
          rotation={rotation}
          polar={polar}
          azimuth={azimuth}
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

            <primitive object={model.scene} />
            <Html
              transform
              wrapperClass={
                isMobileVersion ? "phone-screen" : "computer-screen"
              }
              distanceFactor={isMobileVersion ? 1.21 : 1.17}
              position={position}
              rotation-x={isMobileVersion ? 0 : -0.256}
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
