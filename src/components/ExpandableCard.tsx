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
    <div className="relative flex justify-center items-center min-h-0 min-w-0 overflow-hidden rounded-xl">
      {!isViewOpened && (
        <span className="absolute bottom-5 left-5 text-4xl text-primary-variant uppercase z-10">
          {title}
        </span>
      )}
      <div
        onClick={handleOpenView}
        className={`h-full w-full bg-primary
        ${
          isViewOpened
            ? ""
            : "hover:scale-110 hover:brightness-100 brightness-75 transition-all cursor-pointer"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
