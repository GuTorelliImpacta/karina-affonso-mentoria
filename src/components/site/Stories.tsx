import { Section, SectionHeading } from "./primitives";

type Story = { quote: string; author: string };

const stories: Story[] = [
  {
    quote:
      "Pela primeira vez sigo um acompanhamento sem sentir que estou de dieta. Aprendi a comer — e isso mudou tudo.",
    author: "M., 41",
  },
  {
    quote:
      "Minha rotina é corrida e eu achava impossível me organizar. Hoje faço escolhas mais tranquilas no dia a dia e tenho muito mais energia à tarde.",
    author: "R., 34",
  },
  {
    quote:
      "O que mais mudou foi a constância. Entendi o porquê de cada escolha e passei a cuidar de mim com autonomia, sem culpa.",
    author: "A., 52",
  },
];

export function Stories() {
  return (
    <Section id="transformacoes" tone="sand">
      <SectionHeading eyebrow="Transformações" title="Histórias reais." />

      <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.16em] text-bronze">
        Exemplos ilustrativos — substituir por depoimentos reais autorizados
      </p>

      <div
        className="mt-10 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
        role="region"
        aria-label="Depoimentos"
        tabIndex={0}
      >
        {stories.map((story, i) => (
          <article
            key={i}
            className="min-w-[280px] max-w-[340px] flex-1 shrink-0 snap-start rounded-sm bg-card p-8 shadow-soft"
          >
            <span className="font-display text-4xl leading-none text-bronze" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {story.quote}
            </p>
            <p className="mt-5 text-[0.7rem] uppercase tracking-[0.18em] text-bronze">
              — {story.author}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Arraste para o lado para ver mais.
      </p>
    </Section>
  );
}
