type TypographyProps = {
  children: string;
  variant?: "h1" | "h2" | "p";
  className?: string;
  colorVariant?:
    | "primary"
    | "secondary"
    | "primary-variant"
    | "secondary-variant";
};

const sizes = new Map([
  ["h1", "text-2xl md:text-6xl"],
  ["h2", "text-4xl"],
  ["p", "text-sm sm:text-xl"],
]);

const colors = new Map([
  ["primary", "text-primary"],
  ["secondary", "text-secondary"],
  ["primary-variant", "text-primary-variant"],
  ["secondary-variant", "text-secondary-variant"],
]);

export default function Typography({
  children,
  variant = "p",
  className = "",
  colorVariant = "primary",
}: TypographyProps) {
  const sizeClass = sizes.get(variant);
  const colorClass = colors.get(colorVariant);

  return (
    <span className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
