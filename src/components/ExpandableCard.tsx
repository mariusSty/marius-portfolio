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
    <div className="flex justify-center items-center transition-all min-h-0 min-w-0">
      <div
        onClick={handleOpenView}
        className={`relative h-full w-full bg-[#1C3144] transition-all 
        ${isViewOpened ? "" : "cursor-pointer rounded-xl"}`}
      >
        {!isViewOpened && (
          <span className="absolute top-5 left-5 text-4xl text-[#F87666] uppercase z-10">
            {title}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}
