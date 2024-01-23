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
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import screenFragmentShader from "../shaders/screen/fragment.glsl";
import screenVertexShader from "../shaders/screen/vertex.glsl";
import Button from "./Button";
import CompanyLogo from "./CompanyLogo";
import Fireflies from "./Fireflies";
import Icon from "./Icons";
import LevitatingIcons from "./LevitatingIcons";
import Slide from "./Slide";
import amiltoneLogo from "/images/amiltoneLogo.png";
import astekLogo from "/images/astekLogo.png";
import grandLyonLogo from "/images/grandLyonLogo.png";
import masteosLogo from "/images/masteosLogo.png";
import sncfLogo from "/images/sncfLogo.png";
import sopraSteriaLogo from "/images/sopraSteriaLogo.png";

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
        rotation-y={-1}
        position-x={isViewMode ? viewModePosX : 0}
        position-y={isViewMode ? viewModePosY : 0}
        position-z={isViewMode ? viewModePosZ : 0}
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
        {isViewMode && <LevitatingIcons />}
      </group>
      {isViewMode && (
        <Html occlude="blending" fullscreen zIndexRange={[5, 0]}>
          <div
            className={`absolute ${
              isWidthBiggerThanHeight
                ? "w-[40%] h-full top-0 right-0"
                : "w-full h-[45%] bottom-0 left-0"
            } flex justify-center items-center`}
          >
            <div
              className={`flex flex-col justify-between items-start bg-primary-variant shadow-[15px_20px_10px_rgba(0,0,0,0.2)]
            ${
              isWidthBiggerThanHeight
                ? "rounded-l-3xl h-[75%] w-full"
                : "rounded-t-3xl h-full w-[80%]"
            }`}
            >
              <Swiper
                className="w-[80%] my-4 sm:my-10 flex justify-center items-center h-full"
                modules={[Pagination]}
                pagination={{ clickable: true }}
                style={{
                  "--swiper-pagination-color": "#FF715B",
                  "--swiper-pagination-bullet-inactive-color": "#FFBA08",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "16px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                }}
              >
                <SwiperSlide>
                  <Slide
                    title="Companies"
                    content="I worked for 7 years as a fullstack developer for many
                  companies like SNCF, Scouts d'Europe, Grand Lyon, InExtenso
                and Masteos."
                    footer={
                      <div className="grid grid-cols-3 auto-rows-[40px] md:auto-rows-[70px] gap-2 sm:gap-3">
                        <CompanyLogo
                          logo={sopraSteriaLogo}
                          logoAlt="Logo Sopra Steria"
                        />
                        <CompanyLogo logo={sncfLogo} logoAlt="Logo SNCF" />
                        <CompanyLogo logo={astekLogo} logoAlt="Logo Astek" />
                        <CompanyLogo
                          logo={grandLyonLogo}
                          logoAlt="Logo Grand Lyon"
                        />
                        <CompanyLogo
                          logo={amiltoneLogo}
                          logoAlt="Logo Amiltone"
                        />
                        <CompanyLogo
                          logo={masteosLogo}
                          logoAlt="Logo Masteos"
                        />
                      </div>
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Slide
                    title="Skills"
                    content="I make websites, webapps, mobile apps and desktop apps with
                  lots of languages and frameworks. But now, I'm specialized
                  in React, NodeJS and Three.js since 4 years."
                    footer={
                      <>
                        <img
                          className="hidden sm:block"
                          src="https://skillicons.dev/icons?i=react,nodejs,threejs,next,nest,typescript,tailwind,sass,graphql,docker,github,vite,jest,mongodb,mysql&perline=5"
                        />
                        <img
                          className="sm:hidden"
                          src="https://skillicons.dev/icons?i=react,nodejs,threejs,next,nest,typescript,tailwind,sass,graphql,docker&perline=5"
                        />
                      </>
                    }
                  />
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-around items-center pb-10">
                  <Slide
                    title="Links"
                    content="
                    If you want to know more about my skills, you can check my
                    LinkedIn profile. My projects on GitHub and CodePen are also
                    available."
                    footer={
                      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
                        <Button
                          link="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
                          text="Visit my profile on LinkedIn"
                          icon={<Icon component={FaLinkedin} />}
                        />
                        <Button
                          link="https://github.com/mariusSty/"
                          text="See my projects on GitHub"
                          icon={<Icon component={FaGithub} />}
                        />
                      </div>
                    }
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Html>
      )}
    </>
  );
}
