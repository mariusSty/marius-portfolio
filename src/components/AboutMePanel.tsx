import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "./Button";
import Icon from "./Icon";
import SkillIcon from "./SkillIcon";
import Typography from "./Typography";

type AboutMePanelProps = {
  isWidthBiggerThanHeight: boolean;
};

export default function AboutMePanel({
  isWidthBiggerThanHeight,
}: AboutMePanelProps) {
  return (
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
            Speedcubing is a competitive sport that involves solving a variety
            of combination puzzles, the most well-known of which is the 3x3x3
            puzzle (also known as the Rubik's cube), as quickly as possible.
            This timer helps speedcubers to tracks their solves and vizualise
            their stats.
          </Typography>
        </div>
        <div className="mb-2">
          <Typography className="block mb-1 sm:mb-3">Made with :</Typography>
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
  );
}
