type CompanyLogoProps = {
  logo: string;
  logoAlt: string;
  link: string;
};

export default function CompanyLogo({ logo, logoAlt, link }: CompanyLogoProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg bg-primary-variant flex justify-center items-center p-3 transition-transform hover:scale-110"
    >
      <img src={logo} alt={logoAlt} />
    </a>
  );
}
