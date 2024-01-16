import { Cloud, Clouds, Float, Stars, useGLTF } from "@react-three/drei";

export default function Device({ isMobileVersion = false }) {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  return (
    <>
      <Float position-y={-1.5} rotationIntensity={0.3}>
        <directionalLight position={[-3, 2, 4]} intensity={1} />
        {!isMobileVersion && (
          <rectAreaLight
            width={2.5}
            height={1.8}
            intensity={65}
            color="#ffffff"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 1.6, -1.15]}
          />
        )}
        <primitive object={isMobileVersion ? phone.scene : computer.scene} />
      </Float>
      {isMobileVersion ? (
        <Clouds>
          <Cloud
            segments={15}
            seed={1}
            scale={1}
            bounds={[10, 3, 4]}
            color="white"
            fade={50}
            speed={0.05}
          />
        </Clouds>
      ) : (
        <Stars count={2000} />
      )}
    </>
  );
}
