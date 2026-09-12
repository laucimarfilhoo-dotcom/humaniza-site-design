import { cn } from "@/lib/utils";

export function FramedImage({
  src,
  alt,
  className,
  imgClassName,
  accent,
  badge,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  imgClassName?: string;
  accent?: boolean;
  badge?: { label: string; value: string };
}) {
  return (
    <div className={cn("group relative", className)}>
      {accent && (
        <>
          <div className="drift absolute -top-8 -right-6 z-0 h-40 w-40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-sage-soft/60 opacity-70 md:h-56 md:w-56" />
          <div className="float-slow absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-sage/10 opacity-80 md:h-44 md:w-44" />
        </>
      )}
      <div className="relative z-10 bg-sage-soft p-3 shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl rounded-[2rem]">
        <img
          src={src}
          alt={alt}
          className={cn(
            "rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imgClassName
          )}
          {...props}
        />
      </div>
      {badge && (
        <div className="absolute -bottom-4 right-4 z-20 rounded-2xl border border-border bg-background p-4 shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-2 md:-bottom-6 md:right-6 md:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/15">
              <div className="h-2 w-2 animate-ping rounded-full bg-sage" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-earth">{badge.label}</div>
              <div className="text-sm font-semibold text-primary">{badge.value}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
