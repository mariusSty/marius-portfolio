import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import Icon from "./Icons";
import Typography from "./Typography";

export default function PresentationSection() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Typography variant="h1">Marius STEPHANY</Typography>
        <Typography variant="h2">I'm web and mobile developer</Typography>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Icon
          link="mailto:marius.stephany@gmail.com"
          component={GrMail}
          className="hover:rotate-12 hover:scale-110"
          sizeLabel="lg"
        />
        <Icon
          link="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
          component={GrLinkedin}
          className="hover:rotate-12 hover:scale-110"
          sizeLabel="lg"
        />
        <Icon
          link="https://github.com/mariusSty"
          component={GrGithub}
          className="hover:rotate-12 hover:scale-110"
          sizeLabel="lg"
        />
      </div>
    </>
  );
}
