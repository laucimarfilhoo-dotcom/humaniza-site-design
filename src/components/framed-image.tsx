export function FramedImage({
  src,
  alt,
  className,
  imgClassName,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  imgClassName?: string;
}) {
  return (
    <div className={`bg-sage-soft p-3 rounded-[2rem] shadow-sm ${className || ""}`}>
      <img
        src={src}
        alt={alt}
        className={`rounded-2xl object-cover ${imgClassName || ""}`}
        {...props}
      />
    </div>
  );
}
