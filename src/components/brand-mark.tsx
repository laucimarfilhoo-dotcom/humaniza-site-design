export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 text-primary">
      <span className="relative grid size-9 place-items-center rounded-full border border-primary/35 font-display text-xl font-semibold" aria-hidden="true">
        H
      </span>
      {!compact && <span className="font-display text-2xl font-semibold">Humaniza</span>}
    </span>
  );
}