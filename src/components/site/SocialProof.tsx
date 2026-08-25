const items = [
  { value: "+29 mil", label: "acompanham no Instagram" },
  { value: "🇧🇷 · 🇺🇸", label: "mentorias em dois países" },
  { value: "CRN3-96902", label: "nutricionista registrada" },
  { value: "Funcional & Oncológica", label: "especialização" },
];

export function SocialProof() {
  return (
    <section aria-label="Credibilidade" className="bg-sand py-7">
      <div className="section-shell">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 text-center md:flex md:items-center md:justify-between md:gap-8 md:text-left">
          {items.map((item) => (
            <li key={item.label}>
              <p className="font-display text-lg leading-tight text-bronze-ink sm:text-xl">
                {item.value}
              </p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
