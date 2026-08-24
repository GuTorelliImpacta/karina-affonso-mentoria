import { useState } from "react";
import { Section, SectionHeading } from "./primitives";
import { PlusIcon } from "./icons";

const items = [
  {
    q: "A mentoria é individual?",
    a: "Sim. Todo o processo é conduzido de forma individualizada, a partir da sua história, rotina e objetivo.",
  },
  {
    q: "Os atendimentos são online?",
    a: "Os encontros acontecem de forma remota, o que permite acompanhar mulheres de diferentes cidades.",
  },
  {
    q: "Preciso levar exames?",
    a: "Se você tiver exames recentes, eles ajudam na avaliação. Caso não tenha, isso é conversado na etapa inicial.",
  },
  {
    q: "Atende pacientes em tratamento oncológico?",
    a: "Sim. O suporte nutricional é feito de forma integrada ao tratamento conduzido pela sua equipe médica.",
  },
  {
    q: "Como sei se a mentoria é para mim?",
    a: "O formulário de triagem existe justamente para isso: a partir das suas respostas avaliamos se faz sentido seguirmos juntas.",
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
              <div
                id={`faq-panel-${i}`}
                hidden={!isOpen}
                className="pb-6 text-sm leading-relaxed text-muted-foreground"
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
