import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import Typography from "./Typography";

export default function PresentationSection() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Typography variant="h1">Marius STEPHANY</Typography>
        <Typography variant="h2">I'm web and mobile developer</Typography>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <a href="mailto:marius.stephany@gmail.com">
            <GrMail className="hover:rotate-12 hover:scale-110" size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
            target="_blank"
          >
            <GrLinkedin size={32} className="hover:rotate-12 hover:scale-110" />
          </a>
        </li>
        <li>
          <a href="https://github.com/mariusSty" target="_blank">
            <GrGithub size={32} className="hover:rotate-12 hover:scale-110" />
          </a>
        </li>
      </ul>
    </>
  );
}
