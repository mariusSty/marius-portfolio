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
      className="flex justify-center items-center gap-3 w-full sm:w-auto rounded-lg hover:opacity-80 hover:bg-[100%_0] transition-all duration-700 bg-[length:300%_100%] bg-gradient-to-r from-secondary via-secondary-variant to-secondary px-2 sm:px-6 py-2 sm:py-3"
      href={link}
      target="_blank"
    >
      <Typography colorVariant="primary">{text}</Typography>
      {icon && icon}
    </a>
  );
}
