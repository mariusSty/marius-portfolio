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
  src: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};

const levitatingIcons: LevitatingIcons[] = [
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

export default function LevitatingIcons() {
  return (
    <>
      {levitatingIcons.map(({ src, position, rotation, scale }) => (
        <Float>
          <Html transform scale={scale} position={position} rotation={rotation}>
            <img src={src} width={40} height={40} />
          </Html>
        </Float>
      ))}
    </>
  );
}
