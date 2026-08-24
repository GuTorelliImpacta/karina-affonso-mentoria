import { Section, SectionHeading, CtaButton } from "./primitives";

const steps = [
  {
    title: "Triagem",
    text: "Você preenche o formulário com seu momento atual e objetivo. É a partir dele que entendo se a mentoria faz sentido para você.",
  },
  {
    title: "Conversa inicial",
    text: "Um encontro para escutar sua história, hábitos, exames e o que já foi tentado antes.",
  },
  {
    title: "Plano individualizado",
    text: "Construímos juntas um plano alimentar e de rotina desenhado para a sua fase de vida.",
  },
  {
    title: "Acompanhamento",
    text: "Ajustes contínuos ao longo do processo, com suporte próximo para sustentar as mudanças.",
  },
];

export function HowItWorks() {
  return (
    <Section id="mentoria">
      <SectionHeading
        eyebrow="Como funciona a mentoria"
        title="Quatro etapas, um processo conduzido de perto"
        align="left"
      />

      <ol className="relative mt-14 space-y-10 border-l border-bronze/30 pl-8 md:pl-10">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.05rem] top-1 grid h-4 w-4 place-items-center rounded-full bg-cream md:-left-[2.55rem]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            </span>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze">
              Etapa {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl text-foreground">{step.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <CtaButton variant="outline">Quero começar minha transformação</CtaButton>
      </div>
    </Section>
  );
}
