import { Cloud, Clouds, Float, Html, useGLTF } from "@react-three/drei";

export default function Computer() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Float position-y={-1.5} rotationIntensity={0.3}>
        <directionalLight position={[-3, 2, 4]} intensity={1} />
        <directionalLight position={[3, 2, 4]} intensity={1} />
        <rectAreaLight
          width={2.5}
          height={1.8}
          intensity={65}
          color={"#ffffff"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 1.6, -1.15]}
        />
        <primitive object={computer.scene} />
        <Html transform distanceFactor={2.2} position={[0, 1.9, 0]}>
          <div className="w-96">
            <h1 className="text-3xl mb-3">Hi ! Welcome on my portfolio</h1>
            <h2 className="text-xl">
              I'm Marius STEPHANY, web and mobile developer
            </h2>
          </div>
        </Html>
      </Float>
      <Clouds>
        <Cloud
          segments={15}
          seed={1}
          scale={1}
          bounds={[10, 3, 4]}
          color="orange"
          fade={50}
          speed={0.05}
        />
        <Cloud segments={6} seed={2} scale={1} color="hotpink" fade={100} />
      </Clouds>
    </>
  );
}
