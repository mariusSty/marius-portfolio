type ExpandableCardProps = {
  children: React.ReactNode;
  isViewOpened: boolean;
  handleOpenView: () => void;
};

export default function ExpandableCard({
  children,
  isViewOpened,
  handleOpenView,
}: ExpandableCardProps) {
  return (
    <div className="flex justify-center items-center transition-all min-h-0 min-w-0">
      <div
        onClick={handleOpenView}
        className={`h-full w-full bg-[#1C3144] transition-all 
        ${isViewOpened ? "" : "cursor-pointer rounded-xl"}`}
      >
        {children}
      </div>
    </div>
  );
}
