import { Section, SectionHeading, Divider, PlaceholderNote } from "./primitives";
import { CycleIcon, HeartIcon, LeafIcon, SparkIcon } from "./icons";

const cards = [
  { icon: LeafIcon, title: "Busca emagrecimento sustentável" },
  { icon: SparkIcon, title: "Quer melhorar sua relação com a comida" },
  { icon: CycleIcon, title: "Quer mais energia e disposição" },
  { icon: HeartIcon, title: "Busca saúde, prevenção ou acompanhamento oncológico" },
];

export function ForYou() {
  return (
    <Section id="para-voce" tone="sand">
      <SectionHeading eyebrow="Isso é para você?" title="A mentoria é para você que..." />
      <div className="mt-6">
        <Divider />
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {cards.map(({ icon: Icon, title }) => (
          <li
            key={title}
            className="rounded-sm bg-card p-7 shadow-soft transition-transform duration-300 will-change-transform hover:-translate-y-1"
          >
            <span className="icon-badge">
              <Icon />
            </span>
            <h3 className="mt-5 text-xl leading-snug text-foreground">{title}</h3>
            <div className="mt-4">
              <PlaceholderNote>inserir texto completo do card — briefing</PlaceholderNote>
            </div>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-3xl rounded-sm border border-bronze/30 bg-sand px-7 py-8 text-center">
        <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
          Conhecimento também{" "}
          <strong className="font-semibold">faz parte do tratamento.</strong>
        </p>
      </div>
    </Section>
  );
}
