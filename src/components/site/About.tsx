import { Section, PlaceholderNote } from "./primitives";
import { PortraitPlaceholder } from "./PortraitPlaceholder";

const credenciais = [
  "Nutrição funcional e oncológica",
  "Atendimento Brasil 🇧🇷 e EUA 🇺🇸",
  "Parceira do @nucleoatp",
];

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16">
        <PortraitPlaceholder
          className="mx-auto max-w-sm"
          label="Foto da Karina — inserir imagem real (P&B)"
        />

        <div>
          <p className="eyebrow">Sobre Karina</p>
          <h2 className="display-lg mt-4 text-foreground">
            Quem é <strong className="font-semibold">Karina Affonso</strong>?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Nutricionista funcional e oncológica, Karina une ciência, escuta e
              estratégia para construir uma alimentação que caiba na sua vida — e
              transforme a sua saúde. Atendendo entre Brasil e Estados Unidos, ela
              acredita que corpo, mente e espírito caminham juntos, e que cuidar
              da alimentação não significa abrir mão de viver.
            </p>
          </div>

          <blockquote className="mt-8 border-l border-bronze/50 pl-5 text-2xl leading-snug text-foreground">
            “Para mim, o alimento é sagrado.”
          </blockquote>

          <ul className="mt-8 space-y-3 border-t border-bronze/30 pt-6 text-sm text-muted-foreground">
            {credenciais.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-bronze" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <PlaceholderNote>
              inserir CRN, formação acadêmica e especializações exatas — confirmar
              com a Karina
            </PlaceholderNote>
          </div>
        </div>
      </div>
    </Section>
  );
}
