type SkillIconProps = {
  skill: string;
  skillAlt: string;
  link: string;
};

export default function SkillIcon({ skill, skillAlt, link }: SkillIconProps) {
  return (
    <a
      className="hover:scale-110 transition-transform"
      href={link}
      target="_blank"
    >
      <img src={`https://skillicons.dev/icons?i=${skill}`} alt={skillAlt} />
    </a>
  );
}
