type PortraitProps = {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  grayscale?: boolean;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
};

/** Retrato editorial 4:5 com enquadramento elegante e carregamento lazy. */
export function Portrait({
  src,
  alt,
  className = "",
  objectPosition = "center 25%",
  grayscale = false,
  caption,
  width,
  height,
  priority = false,
}: PortraitProps) {
  return (
    <figure
      className={`relative aspect-4/5 w-full overflow-hidden rounded-sm bg-sand shadow-editorial ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={`h-full w-full object-cover transition-transform duration-700 will-change-transform hover:scale-[1.02] ${
          grayscale ? "grayscale" : ""
        }`}
        style={{ objectPosition }}
      />
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/70 to-transparent p-5 text-[0.68rem] uppercase tracking-[0.18em] text-cream/90">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
