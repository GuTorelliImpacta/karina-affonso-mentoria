/**
 * Placeholder neutro de retrato 4:5 (escuro/quente).
 * Substituir por <img> com a foto real da Karina quando ela for fornecida.
 */
export function PortraitPlaceholder({
  className = "",
  label = "Foto da Karina — inserir imagem real",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <figure
      className={`relative aspect-4/5 w-full overflow-hidden rounded-sm shadow-editorial ${className}`}
      style={{
        background:
          "linear-gradient(160deg, color-mix(in oklab, var(--ink) 88%, var(--bronze)) 0%, color-mix(in oklab, var(--bronze) 55%, var(--ink)) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-sm border border-dashed border-cream/25"
      />
      <figcaption className="absolute inset-0 grid place-items-center p-8 text-center">
        <span className="max-w-[16rem] text-[0.68rem] uppercase leading-relaxed tracking-[0.18em] text-cream/80">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}
