type CompanyLogoProps = {
  logo: string;
  logoAlt: string;
};

export default function CompanyLogo({ logo, logoAlt }: CompanyLogoProps) {
  return (
    <div className="rounded-lg bg-primary-variant flex justify-center items-center p-3">
      <img src={logo} alt={logoAlt} />
    </div>
  );
}
