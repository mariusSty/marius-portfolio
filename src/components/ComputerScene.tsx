import {
  Environment,
  Html,
  shaderMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { geometry } from "maath";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import screenFragmentShader from "../shaders/screen/fragment.glsl";
import screenVertexShader from "../shaders/screen/vertex.glsl";
import Fireflies from "./Fireflies";
import LevtitatingIcons from "./LevitatingIcons";

type GLTFResult = GLTF & {
  nodes: {
    LightC: THREE.Mesh;
    LightA: THREE.Mesh;
    LightB: THREE.Mesh;
    Screen: THREE.Mesh;
    baked: THREE.Mesh;
  };
};

const ScreenMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color(0x090909),
    uColorEnd: new THREE.Color(0xffcc00),
  },
  screenVertexShader,
  screenFragmentShader
);

extend({ ScreenMaterial });
extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });

export default function ComputerScene({ isViewMode = false }) {
  const screenRef = useRef();
  const { nodes } = useGLTF(
    "/models/computer-scene.glb"
  ) as unknown as GLTFResult;
  const skillsTexture = useTexture("./textures/baked.jpg");

  useFrame((_, delta) => {
    screenRef.current.uTime += delta;
  });
  const { viewport } = useThree();
  const ratio = viewport.width / viewport.height;
  const isWidthBiggerThanHeight = ratio > 1;
  const viewModeScale = isWidthBiggerThanHeight
    ? viewport.width / 9
    : viewport.height / 8;
  const viewModePosX = isWidthBiggerThanHeight ? -viewport.width / 8 : 0;
  const viewModePosY = isWidthBiggerThanHeight ? 0 : viewport.height / 7;
  const viewModePosZ = isWidthBiggerThanHeight ? -viewport.width / 6 : 0;

  return (
    <>
      <Environment preset="city" />
      <group
        dispose={null}
        rotation-y={-1}
        position-x={viewModePosX}
        position-y={viewModePosY}
        position-z={viewModePosZ}
        scale={isViewMode ? viewModeScale : viewport.width / 2}
      >
        <mesh
          geometry={nodes.LightC.geometry}
          position={[1.174, 0.976, 0.373]}
          rotation={[0, -0.453, 0]}
        >
          <meshBasicMaterial color={0xffba08} />
        </mesh>

        <mesh
          geometry={nodes.LightA.geometry}
          position={[-1.08, 0.976, -0.257]}
          rotation={[-Math.PI, 0.179, -Math.PI]}
        >
          <meshBasicMaterial color={0xffba08} />
        </mesh>
        <mesh
          geometry={nodes.LightB.geometry}
          position={[0.29, 0.976, -1.026]}
          rotation={[0, 1.004, 0]}
        >
          <meshBasicMaterial color={0xffba08} />
        </mesh>
        <mesh
          geometry={nodes.Screen.geometry}
          material={nodes.Screen.material}
          position={[0.13, 0.967, -0.407]}
          rotation={[-2.051, 0, 0]}
        >
          <screenMaterial ref={screenRef} />
        </mesh>
        <mesh
          geometry={nodes.baked.geometry}
          material={nodes.baked.material}
          position={[1.651, 0, -0.895]}
          rotation={[Math.PI, -0.067, Math.PI]}
        >
          <meshBasicMaterial map={skillsTexture} map-flipY={false} />
        </mesh>

        <Fireflies />
        <LevtitatingIcons />
      </group>
      {isViewMode && (
        <Html fullscreen zIndexRange={[0, -1]}>
          <div
            className={`absolute ${
              isWidthBiggerThanHeight
                ? "w-[40%] h-full top-0 right-0"
                : "w-full h-[45%] bottom-0 left-0"
            } flex justify-center items-center`}
          ></div>
        </Html>
      )}
    </>
  );
}
