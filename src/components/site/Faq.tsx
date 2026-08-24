import { useState } from "react";
import { Section, SectionHeading } from "./primitives";
import { PlusIcon } from "./icons";

const items = [
  {
    q: "A mentoria é online ou presencial?",
    a: "O acompanhamento é ao vivo e online, com encontros presenciais periódicos da comunidade. [confirmar formato exato]",
  },
  {
    q: "Vou precisar cortar tudo o que gosto?",
    a: "Não. Aqui não existe terrorismo alimentar: você come o que gosta, na medida e no horário certos.",
  },
  {
    q: "A dieta será sempre a mesma?",
    a: "Não. Seu corpo, sua rotina e seus objetivos mudam — e a estratégia evolui junto, com ajustes constantes.",
  },
  {
    q: "Para quem é a mentoria?",
    a: "Para mulheres que querem resultados duradouros, entender o próprio corpo e construir uma relação leve com a comida.",
  },
  {
    q: "Como começo?",
    a: "Preenchendo o formulário de triagem abaixo. Em seguida, a equipe da Karina entra em contato pelo WhatsApp.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-bronze/25 border-y border-bronze/25">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex min-h-[56px] w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-foreground sm:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={`icon-badge h-9 w-9 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <PlusIcon />
                  </span>
                </button>
              </h3>
              <div id={`faq-panel-${i}`} hidden={!isOpen} className="pb-6">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
