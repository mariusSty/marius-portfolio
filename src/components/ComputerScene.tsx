import {
  Environment,
  shaderMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
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

export default function ComputerScene() {
  const screenRef = useRef();
  const { nodes } = useGLTF(
    "/models/computer-scene.glb"
  ) as unknown as GLTFResult;
  const skillsTexture = useTexture("./textures/baked.jpg");

  useFrame((_, delta) => {
    screenRef.current.uTime += delta;
  });

  return (
    <>
      <Environment preset="city" />
      <group dispose={null} rotation-y={-1}>
        <mesh
          geometry={nodes.LightC.geometry}
          position={[1.174, 0.976, 0.373]}
          rotation={[0, -0.453, 0]}
        >
          <meshBasicMaterial color={0xffff44} />
        </mesh>

        <mesh
          geometry={nodes.LightA.geometry}
          position={[-1.08, 0.976, -0.257]}
          rotation={[-Math.PI, 0.179, -Math.PI]}
        >
          <meshBasicMaterial color={0xffff44} />
        </mesh>
        <mesh
          geometry={nodes.LightB.geometry}
          position={[0.29, 0.976, -1.026]}
          rotation={[0, 1.004, 0]}
        >
          <meshBasicMaterial color={0xffff44} />
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
      </group>

      <Fireflies />
      <LevtitatingIcons />
    </>
  );
}
