import { ReactElement } from "react";
import Typography from "./Typography";

type ButtonProps = {
  link: string;
  text: string;
  icon?: ReactElement;
};

export default function Button({ link, text, icon }: ButtonProps) {
  return (
    <a
      className="flex justify-center items-center gap-3 w-full sm:w-auto rounded-lg hover:bg-gradient-to-l bg-gradient-to-r from-secondary to-secondary-variant px-4 sm:px-6 py-2 sm:py-3"
      href={link}
      target="_blank"
    >
      <Typography colorVariant="primary">{text}</Typography>
      {icon && icon}
    </a>
  );
}
