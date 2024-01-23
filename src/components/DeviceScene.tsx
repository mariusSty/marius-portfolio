import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "./Button";
import Icon from "./Icons";
import SkillIcon from "./SkillIcon";
import Typography from "./Typography";

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
          position-y={isViewMode ? viewModePosY : -1}
          position-x={isViewMode ? viewModePosX : 0}
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
          {isViewMode && (
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
          )}
        </Float>
      </PresentationControls>
      {isViewMode && (
        <Html
          fullscreen
          occlude="blending"
          position={[-1, -1, -2]}
          zIndexRange={[5, 0]}
        >
          <div
            className={`${
              isWidthBiggerThanHeight
                ? "flex-col w-[70%] h-full gap-4"
                : "w-full h-[50%] gap-2"
            } flex justify-center`}
          >
            <div
              className={`flex flex-col justify-between items-start bg-primary-variant shadow-[15px_20px_10px_rgba(0,0,0,0.2)]
            ${
              isWidthBiggerThanHeight
                ? "rounded-r-3xl h-[75%] w-full pl-28 pr-52 py-16 xl:py-24"
                : "rounded-b-3xl h-full w-[80%] px-6 sm:px-12 pt-4 sm:pt-8 pb-28"
            }`}
            >
              <div className="flex flex-col gap-2 sm:gap-6">
                <Typography variant="h1">Cube Galaxy</Typography>
                <Typography>
                  Speedcubing is a competitive sport that involves solving a
                  variety of combination puzzles, the most well-known of which
                  is the 3x3x3 puzzle (also known as the Rubik's cube), as
                  quickly as possible. This timer helps speedcubers to tracks
                  their solves and vizualise their stats.
                </Typography>
              </div>
              <div className="mb-2">
                <Typography className="block mb-1 sm:mb-3">
                  Made with :
                </Typography>
                <div className="flex gap-2">
                  <SkillIcon
                    skill="react"
                    skillAlt="React Icon"
                    link="https://reactjs.org/"
                  />
                  <SkillIcon
                    skill="nextjs"
                    skillAlt="Next.js Icon"
                    link="https://nextjs.org/"
                  />
                  <SkillIcon
                    skill="typescript"
                    skillAlt="Typescript Icon"
                    link="https://www.typescriptlang.org/"
                  />
                  <SkillIcon
                    skill="tailwind"
                    skillAlt="Tailwind Icon"
                    link="https://tailwindcss.com/"
                  />
                  <SkillIcon
                    skill="threejs"
                    skillAlt="Three.js Icon"
                    link="https://threejs.org/"
                  />
                </div>
              </div>

              <Button
                link="https://cube-galaxy.vercel.app/"
                text="Go to the website"
                icon={<Icon component={FaExternalLinkAlt} />}
              />
            </div>
          </div>
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
