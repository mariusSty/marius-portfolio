type TypographyProps = {
  children: string;
  variant?: "h1" | "h2" | "p";
  className?: string;
  colorVariant?:
    | "white"
    | "primary"
    | "secondary"
    | "primary-variant"
    | "secondary-variant";
  isGradient?: boolean;
};

const sizes = new Map([
  ["h1", "text-2xl md:text-6xl"],
  ["h2", "text-xl md:text-4xl"],
  ["p", "text-xs sm:text-xl"],
]);

const colors = new Map([
  ["primary", "text-primary"],
  ["secondary", "text-secondary"],
  ["primary-variant", "text-primary-variant"],
  ["secondary-variant", "text-secondary-variant"],
  ["white", "text-white"],
]);

export default function Typography({
  children,
  variant = "p",
  className = "",
  colorVariant = "white",
  isGradient = false,
}: TypographyProps) {
  const sizeClass = sizes.get(variant);
  const colorClass = colors.get(colorVariant);
  const gradientClasses =
    "bg-gradient-to-r from-secondary to-secondary-variant bg-clip-text text-transparent";

  return (
    <span
      className={`${sizeClass} 
      ${isGradient ? gradientClasses : colorClass} 
      ${className}`}
    >
      {children}
    </span>
  );
}
