import { Section, SectionHeading, PlaceholderNote } from "./primitives";

const slots = [1, 2, 3];

export function Stories() {
  return (
    <Section id="transformacoes" tone="sand">
      <SectionHeading
        eyebrow="Histórias reais"
        title="Transformações contadas por quem viveu"
        intro="Este espaço é reservado para depoimentos reais e autorizados de pacientes. Nada aqui é fictício."
      />

      <div
        className="mt-12 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
        role="region"
        aria-label="Depoimentos"
        tabIndex={0}
      >
        {slots.map((n) => (
          <article
            key={n}
            className="min-w-[280px] max-w-[340px] flex-1 shrink-0 snap-start rounded-sm bg-card p-8 shadow-soft"
          >
            <span className="font-display text-4xl leading-none text-bronze" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Espaço reservado para o depoimento autorizado da paciente {n}.
            </p>
            <div className="mt-6 border-t border-bronze/30 pt-4">
              <PlaceholderNote>Inserir depoimento real</PlaceholderNote>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Arraste para o lado para ver mais.
      </p>
    </Section>
  );
}
