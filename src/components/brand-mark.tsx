import logoAsset from "@/assets/humaniza-logo.png.asset.json";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <img
        src={logoAsset.url}
        alt="Humaniza Odontologia"
        width={1624}
        height={656}
        className={compact ? "h-9 w-auto" : "h-10 w-auto md:h-12"}
      />
    </span>
  );
}