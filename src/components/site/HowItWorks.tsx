import { Section, SectionHeading, CtaButton } from "./primitives";

const steps = [
  {
    title: "Triagem e escuta",
    text: "Antes de qualquer plano, eu conheço a sua história, sua rotina e seus objetivos.",
  },
  {
    title: "Estratégia personalizada",
    text: "Um plano que respeita seus gostos, sua realidade e o seu momento. Nada de receita pronta.",
  },
  {
    title: "Acompanhamento próximo",
    text: "Consultas ao vivo, ajustes constantes e suporte contínuo. Seu corpo muda, sua rotina muda — a estratégia também.",
  },
  {
    title: "Comunidade e autonomia",
    text: "Encontros presenciais com mulheres que compartilham os mesmos objetivos. Você sai sabendo cuidar de si. Autonomia também é resultado.",
  },
];

export function HowItWorks() {
  return (
    <Section id="mentoria">
      <SectionHeading
        eyebrow="Como funciona a mentoria"
        title="O que torna meu trabalho diferente?"
        align="left"
      />

      {/* Timeline: vertical no mobile, horizontal no desktop */}
      <ol className="mt-14 space-y-10 border-l border-bronze/30 pl-8 md:grid md:grid-cols-4 md:gap-8 md:space-y-0 md:border-l-0 md:border-t md:pl-0 md:pt-10">
        {steps.map((step, i) => (
          <li key={step.title} className="relative md:pt-0">
            <span
              aria-hidden="true"
              className="absolute -left-[2.05rem] top-1 grid h-4 w-4 place-items-center rounded-full bg-cream md:-left-0 md:-top-[3.05rem]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            </span>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-ink">
              Etapa {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl leading-snug text-foreground md:text-xl">
              {step.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <CtaButton variant="outline">Quero fazer minha triagem</CtaButton>
      </div>
    </Section>
  );
}
