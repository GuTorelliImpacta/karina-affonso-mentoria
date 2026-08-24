import { useState } from "react";
import { Section, SectionHeading, PlaceholderNote } from "./primitives";
import { PlusIcon } from "./icons";

const items = [
  { q: "A mentoria é online ou presencial?", note: "inserir resposta exata do briefing [confirmar formato exato]" },
  { q: "Vou precisar cortar tudo o que gosto?", note: "inserir resposta exata do briefing" },
  { q: "A dieta será sempre a mesma?", note: "inserir resposta exata do briefing" },
  { q: "Para quem é a mentoria?", note: "inserir resposta exata do briefing" },
  { q: "Como começo?", note: "inserir resposta exata do briefing" },
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
                <PlaceholderNote>{item.note}</PlaceholderNote>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
