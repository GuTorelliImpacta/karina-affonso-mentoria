import { Section, SectionHeading } from "./primitives";

const items = [
  "Para quem procura fórmulas milagrosas ou resultados sem processo.",
  "Para quem quer apenas um PDF de dieta, sem acompanhamento.",
  "Para quem não está pronta para olhar para a própria rotina com honestidade.",
];

export function NotForYou() {
  return (
    <Section id="nao-e-para-voce">
      <SectionHeading
        title={
          <>
            E para quem <strong className="font-semibold">não</strong> é?
          </>
        }
      />

      <ul className="mx-auto mt-10 max-w-2xl space-y-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-3 h-px w-6 shrink-0 bg-bronze" />
            <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center font-display text-2xl leading-snug text-foreground">
        A mentoria é um compromisso a dois. Eu me dedico a quem se dedica.
      </p>
    </Section>
  );
}
