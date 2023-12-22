import {
  Center,
  Environment,
  Float,
  Html,
  Sparkles,
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
import cypressIcon from "/images/cypress.png";
import githubIcon from "/images/github.png";
import graphqlIcon from "/images/graphql.png";
import jestIcon from "/images/jest.png";
import mongodbIcon from "/images/mongodb.png";
import nestIcon from "/images/nest.png";
import nextIcon from "/images/next.png";
import nodeIcon from "/images/node.png";
import reactIcon from "/images/react.png";
import tailwindIcon from "/images/tailwind.png";
import threeIcon from "/images/three.png";
import typescriptIcon from "/images/typescript.png";
import viteIcon from "/images/vite.png";
import vscodeIcon from "/images/vscode.png";

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

const icons = [
  {
    src: cypressIcon,
    position: [-1.7, -0.5, 0],
    rotation: [0, -0.3, 0],
    scale: 0.3,
  },
  {
    src: githubIcon,
    position: [-0.9, -0.5, 0],
    rotation: [0, -1.3, 0],
    scale: 0.4,
  },
  {
    src: graphqlIcon,
    position: [0.3, 2, 0],
    rotation: [0, 2, 0],
    scale: 0.4,
  },
  {
    src: jestIcon,
    position: [1.5, 2, 1],
    rotation: [0, -0.5, 0],
    scale: 0.3,
  },
  {
    src: mongodbIcon,
    position: [0, 0, 2],
    rotation: [0, -1, 0],
    scale: 0.5,
  },
  {
    src: nestIcon,
    position: [-0.5, 0, 1],
    rotation: [0, -0.4, 0],
    scale: 0.5,
  },
  {
    src: nextIcon,
    position: [2, 1.2, 0],
    rotation: [0, -1.4, 0],
    scale: 0.5,
  },
  {
    src: nodeIcon,
    position: [0, 1.5, -2],
    rotation: [0, 0, 0],
    scale: 0.4,
  },
  {
    src: reactIcon,
    position: [-2, 1, 0],
    rotation: [0, 0.2, 0],
    scale: 0.5,
  },
  {
    src: tailwindIcon,
    position: [-1, 2, 2.5],
    rotation: [0, -2, 0],
    scale: 0.4,
  },
  {
    src: threeIcon,
    position: [-1.9, 1, 1.8],
    rotation: [0, -0.3, 0],
    scale: 0.4,
  },
  {
    src: typescriptIcon,
    position: [-1, 1, -0.5],
    rotation: [0, 0, 0],
    scale: 0.4,
  },
  {
    src: viteIcon,
    position: [-1.5, 1.5, -1],
    rotation: [0, 0, 0],
    scale: 0.4,
  },
  {
    src: vscodeIcon,
    position: [0, 2, -0.5],
    rotation: [0, -1.3, 0],
    scale: 0.4,
  },
];

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
      <Center>
        <Sparkles
          size={6}
          scale={[4, 4, 4]}
          position-y={1}
          speed={0.2}
          count={40}
          color={0xffcc00}
        />
      </Center>

      {icons.map(({ src, position, rotation, scale }) => (
        <Float>
          <Html transform scale={scale} position={position} rotation={rotation}>
            <img src={src} width={40} height={40} />
          </Html>
        </Float>
      ))}
    </>
  );
}
