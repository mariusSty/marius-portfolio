import Typography from "./Typography";

type SlideProps = {
  title: string;
  content: string;
  footer: React.ReactNode;
};

export default function Slide({ title, content, footer }: SlideProps) {
  return (
    <div className="flex flex-col justify-around items-center h-full pb-10">
      <Typography
        variant="h1"
        className="bg-gradient-to-r from-secondary to-secondary-variant bg-clip-text text-transparent"
      >
        {title}
      </Typography>
      <Typography>{content}</Typography>
      {footer}
    </div>
  );
}
