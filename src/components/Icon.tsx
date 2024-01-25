import { IconType } from "react-icons";

type IconProps = {
  sizeLabel?: "sm" | "lg";
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "primary-variant"
    | "secondary-variant";
  className?: string;
  link?: string;
  component: IconType;
};

const sizes = new Map([
  ["sm", 24],
  ["lg", 32],
]);

const colors = new Map([
  ["primary", "text-primary"],
  ["secondary", "text-secondary"],
  ["primary-variant", "text-primary-variant"],
  ["secondary-variant", "text-secondary-variant"],
  ["white", "text-white"],
]);

export default function Icon({
  sizeLabel = "sm",
  color = "white",
  className = "",
  link,
  component: IconComponent,
}: IconProps) {
  const size = sizes.get(sizeLabel);
  const colorClass = colors.get(color);

  if (link) {
    return (
      <a href={link} target="_blank">
        <IconComponent size={size} className={`${colorClass} ${className}`} />
      </a>
    );
  }

  return <IconComponent size={size} className={`${colorClass} ${className}`} />;
}
