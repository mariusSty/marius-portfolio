import Typography from "./Typography";

type ExpandableCardProps = {
  title: string;
  children: React.ReactNode;
  isViewOpened: boolean;
  handleOpenView: () => void;
};

export default function ExpandableCard({
  children,
  title,
  isViewOpened,
  handleOpenView,
}: ExpandableCardProps) {
  return (
    <div
      onClick={handleOpenView}
      className={`group relative flex justify-center items-center min-h-0 min-w-0 overflow-hidden
       ${
         isViewOpened
           ? "bg-radial-gradient-variant-to-primary"
           : "bg-primary rounded-xl cursor-pointer"
       }`}
    >
      {!isViewOpened && (
        <Typography
          variant="h2"
          className="absolute bottom-5 left-5 uppercase z-10"
        >
          {title}
        </Typography>
      )}
      <div
        className={`h-full w-full
        ${isViewOpened ? "" : "group-hover:scale-110 transition-all"}`}
      >
        {children}
      </div>
    </div>
  );
}
