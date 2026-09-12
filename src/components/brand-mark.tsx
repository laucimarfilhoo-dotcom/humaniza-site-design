const logoUrl = "/humaniza-logo.png";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <img
        src={logoUrl}
        alt="Humaniza Odontologia"
        width={1624}
        height={656}
        className={compact ? "h-9 w-auto" : "h-10 w-auto md:h-12"}
      />
    </span>
  );
}
