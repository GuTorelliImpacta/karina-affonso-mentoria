import type { ReactNode } from "react";

export function Section({
  id,
  children,
  tone = "cream",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "cream" | "sand" | "white";
  className?: string;
}) {
  const bg =
    tone === "sand" ? "bg-sand" : tone === "white" ? "bg-card" : "bg-cream";
  return (
    <section id={id} className={`${bg} py-20 md:py-28 ${className}`}>
      <div className="section-shell">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <header className={align === "center" ? "text-center" : ""}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-lg mt-4 text-foreground">{title}</h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px w-16 bg-bronze/45 sm:w-24" />
      <span className="h-1 w-1 rounded-full bg-bronze" />
      <span className="h-px w-16 bg-bronze/45 sm:w-24" />
    </div>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return <span className="placeholder-note">{children}</span>;
}

export function CtaButton({
  children,
  variant = "solid",
  className = "",
  href = "#triagem",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  href?: string;
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-[background-color,color,transform] duration-300 will-change-transform hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-ink text-cream hover:bg-bronze"
      : "border border-bronze/60 text-ink hover:bg-sand";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
