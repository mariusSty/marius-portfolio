import Typography from "./Typography";

type SlideProps = {
  title: string;
  content: string;
  footer: React.ReactNode;
};

export default function Slide({ title, content, footer }: SlideProps) {
  return (
    <div className="flex flex-col justify-around items-center h-full mx-2 pb-10">
      <Typography variant="h1" isGradient>
        {title}
      </Typography>
      <Typography>{content}</Typography>
      {footer}
    </div>
  );
}
