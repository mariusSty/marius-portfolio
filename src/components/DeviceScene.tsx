import {
  ContactShadows,
  Environment,
  Float,
  Html,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import ProjectsPanel from "./ProjectsPanel";

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
      <Float
        scale={isViewMode ? viewModeScale : viewport.width / 2}
        position-y={isViewMode ? viewModePosY : -1}
        position-x={isViewMode ? viewModePosX : 0}
        rotationIntensity={0.4}
        rotation={rotation}
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
        {isViewMode && (
          <Html
            transform
            wrapperClass={isMobileVersion ? "phone-screen" : "computer-screen"}
            distanceFactor={isMobileVersion ? 1.21 : 1.17}
            position={position}
            rotation-x={isMobileVersion ? 0 : -0.256}
          >
            <iframe src="https://cube-galaxy.vercel.app/" />
          </Html>
        )}
      </Float>
      {isViewMode && (
        <Html
          fullscreen
          occlude="blending"
          position={[-1, -1, -2]}
          zIndexRange={[5, 0]}
        >
          <ProjectsPanel isWidthBiggerThanHeight={isWidthBiggerThanHeight} />
        </Html>
      )}
      <ContactShadows
        position-y={isMobileVersion ? -2.9 : -2.4}
        opacity={1}
        scale={10}
        blur={2.4}
      />
    </>
  );
}
