import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import Icon from "./Icon";
import Typography from "./Typography";

export default function PresentationSection() {
  return (
    <div className="flex flex-col justify-evenly items-center col-span-2 md:col-span-1">
      <div className="flex flex-col gap-3">
        <Typography variant="h1" isGradient>
          Marius STEPHANY
        </Typography>
        <Typography variant="h2" isGradient>
          Web and mobile developer
        </Typography>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <Typography variant="h1" isGradient>
            7+
          </Typography>
          <Typography variant="p" isGradient>
            Years of experience
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Typography variant="h1" isGradient>
            10+
          </Typography>
          <Typography variant="p" isGradient>
            Projects worked
          </Typography>
        </div>
      </div>
      <div className="bg-gradient-to-r from-secondary to-secondary-variant p-1 rounded-lg">
        <div className="flex justify-center items-center gap-4 p-4 bg-primary rounded-lg">
          <Icon
            link="mailto:marius.stephany@gmail.com"
            component={GrMail}
            className="hover:rotate-12 hover:scale-110"
            sizeLabel="lg"
            color="secondary"
          />
          <Icon
            link="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
            component={GrLinkedin}
            className="hover:rotate-12 hover:scale-110"
            sizeLabel="lg"
            color="secondary"
          />
          <Icon
            link="https://github.com/mariusSty"
            component={GrGithub}
            className="hover:rotate-12 hover:scale-110"
            sizeLabel="lg"
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
}
