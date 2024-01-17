import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function DeviceScene({
  isMobileVersion = false,
  isViewMode = false,
}) {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  const model = isMobileVersion ? phone : computer;
  const polar: [number, number] = isMobileVersion ? [0, 0] : [-0.4, 0.2];
  const azimuth: [number, number] = isMobileVersion ? [-1, 0.5] : [-1, 0.75];
  const rotation: [number, number, number] = isMobileVersion
    ? [-0.1, -0.3, 0]
    : [0.13, 0.1, 0];
  const position: [number, number, number] = isMobileVersion
    ? [0.16, 1.36, 0.08]
    : [0, 1.56, -1.4];
  const { viewport } = useThree();
  const ratio = viewport.width / viewport.height;
  const isWidthBiggerThanHeight = ratio > 1;
  const viewModeScale = isWidthBiggerThanHeight
    ? viewport.width / 8
    : viewport.height / 6;
  const viewModePosX = isWidthBiggerThanHeight ? viewport.width / 4 : 0;
  const viewModePosY = isWidthBiggerThanHeight ? -1 : -viewport.height / 2;

  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={rotation}
        polar={polar}
        azimuth={azimuth}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float
          scale={isViewMode ? viewModeScale : viewport.width / 2}
          position-y={viewModePosY}
          position-x={viewModePosX}
          rotationIntensity={0.4}
        >
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#151e3f"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive object={model.scene} />
          <Html
            transform
            wrapperClass={isMobileVersion ? "phone-screen" : "computer-screen"}
            distanceFactor={isMobileVersion ? 1.21 : 1.17}
            position={position}
            rotation-x={isMobileVersion ? 0 : -0.256}
          >
            {isViewMode ? (
              <iframe src="https://cube-galaxy.vercel.app/" />
            ) : (
              <div>Click please...</div>
            )}
          </Html>
        </Float>
      </PresentationControls>
      {isViewMode && (
        <Html fullscreen zIndexRange={[0, -1]}>
          <div
            className={`${
              isWidthBiggerThanHeight
                ? "w-[50%] h-full gap-4"
                : "w-full h-[35%] gap-2"
            } flex flex-col justify-center p-8`}
          >
            <h1 className="text-3xl">Cube Galaxy</h1>
            <a href="https://cube-galaxy.vercel.app/" target="_blank">
              <h2>https://cube-galaxy.vercel.app/</h2>
            </a>
            <p className={`${isWidthBiggerThanHeight ? "text-xl" : "text-sm"}`}>
              Speedcubing is a competitive sport that involves solving a variety
              of combination puzzles, the most well-known of which is the 3x3x3
              puzzle (also known as the Rubik's cube), as quickly as possible.
              This timer helps speedcubers to tracks their solves and vizualise
              their stats.
            </p>
            <p>Made with NextJS, React, Tailwind, ThreeJS, TypeScript</p>
          </div>
        </Html>
      )}
      <ContactShadows
        position-y={isMobileVersion ? -2.9 : -2.4}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />
    </>
  );
}
