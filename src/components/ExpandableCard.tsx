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
    <div className={`flex justify-center items-center transition-all`}>
      <div
        onClick={handleOpenView}
        className={`h-full w-full bg-[#041F1E] transition-all 
        ${isViewOpened ? "" : "cursor-pointer rounded-xl"}`}
      >
        {children}
      </div>
    </div>
  );
}
