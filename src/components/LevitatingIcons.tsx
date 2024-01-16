import { Float, Html } from "@react-three/drei";
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

type LevitatingIcons = {
  id: string;
  src: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  url: string;
};

const levitatingIcons: LevitatingIcons[] = [
  {
    id: "cypress",
    src: cypressIcon,
    position: [-1.7, -0.5, 0],
    rotation: [0, -0.3, 0],
    scale: 0.3,
    url: "https://www.cypress.io/",
  },
  {
    id: "github",
    src: githubIcon,
    position: [-0.9, -0.5, 0],
    rotation: [0, -1.3, 0],
    scale: 0.4,
    url: "https://github.com/",
  },
  {
    id: "graphql",
    src: graphqlIcon,
    position: [0.3, 2, 0],
    rotation: [0, 2, 0],
    scale: 0.4,
    url: "https://graphql.org/",
  },
  {
    id: "jest",
    src: jestIcon,
    position: [1.5, 2, 1],
    rotation: [0, -0.5, 0],
    scale: 0.3,
    url: "https://jestjs.io/",
  },
  {
    id: "mongodb",
    src: mongodbIcon,
    position: [0, 0, 2],
    rotation: [0, -1, 0],
    scale: 0.5,
    url: "https://www.mongodb.com/",
  },
  {
    id: "nest",
    src: nestIcon,
    position: [-0.5, 0, 1],
    rotation: [0, -0.4, 0],
    scale: 0.5,
    url: "https://nestjs.com/",
  },
  {
    id: "next",
    src: nextIcon,
    position: [2, 1.2, 0],
    rotation: [0, -1.4, 0],
    scale: 0.5,
    url: "https://nextjs.org/",
  },
  {
    id: "node",
    src: nodeIcon,
    position: [0, 1.5, -2],
    rotation: [0, 0, 0],
    scale: 0.4,
    url: "https://nodejs.org/",
  },
  {
    id: "react",
    src: reactIcon,
    position: [-2, 1, 0],
    rotation: [0, 0.2, 0],
    scale: 0.5,
    url: "https://react.dev/",
  },
  {
    id: "tailwind",
    src: tailwindIcon,
    position: [-1, 2, 2.5],
    rotation: [0, -2, 0],
    scale: 0.4,
    url: "https://tailwindcss.com/",
  },
  {
    id: "three",
    src: threeIcon,
    position: [-1.9, 1, 1.8],
    rotation: [0, -0.3, 0],
    scale: 0.4,
    url: "https://threejs.org/",
  },
  {
    id: "typescript",
    src: typescriptIcon,
    position: [-1, 1, -0.5],
    rotation: [0, 0, 0],
    scale: 0.4,
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "vite",
    src: viteIcon,
    position: [-1.5, 1.5, -1],
    rotation: [0, 0, 0],
    scale: 0.4,
    url: "https://vitejs.dev/",
  },
  {
    id: "vscode",
    src: vscodeIcon,
    position: [0, 2, -0.5],
    rotation: [0, -1.3, 0],
    scale: 0.4,
    url: "https://code.visualstudio.com/",
  },
];

export default function LevitatingIcons() {
  return (
    <>
      {levitatingIcons.map(({ id, src, position, rotation, scale, url }) => (
        <Float key={id}>
          <Html transform scale={scale} position={position} rotation={rotation}>
            <img
              src={src}
              width={40}
              height={40}
              className="hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:skew-y-12 hover:scale-125"
              onClick={() => window.open(url, "_blank")}
            />
          </Html>
        </Float>
      ))}
    </>
  );
}
