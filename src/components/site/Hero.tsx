import { CtaButton } from "./primitives";
import { PortraitPlaceholder } from "./PortraitPlaceholder";

export function Hero() {
  return (
    <section id="top" className="relative bg-cream pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="section-shell grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="fade-up max-w-xl">
          <p className="eyebrow">NUTRICIONISTA FUNCIONAL E ONCOLÓGICA</p>
          <h1 className="display-xl mt-6 text-foreground">
            Seu corpo. Sua história.{" "}
            <strong className="font-semibold">Suas escolhas.</strong>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Mais do que uma dieta: um acompanhamento personalizado, humano e
            transformador — para você que busca resultados, mas não quer viver de
            dieta.
          </p>
          <div className="mt-9">
            <CtaButton>Quero começar minha transformação</CtaButton>
          </div>
          <p className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-bronze">
            Body • Mind • Spirit — @ka.affonso
          </p>
        </div>

        <div className="relative">
          <PortraitPlaceholder className="mx-auto max-w-md" />
        </div>
      </div>
    </section>
  );
}
