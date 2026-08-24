import heroPortrait from "@/assets/hero-portrait.jpg";
import { CtaButton } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative bg-cream pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="section-shell grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="fade-up max-w-xl">
          <p className="eyebrow">Nutricionista Funcional e Oncológica</p>
          <h1 className="display-xl mt-6 text-foreground">
            <strong className="font-semibold">Seu corpo.</strong>{" "}
            <strong className="font-semibold">Sua história.</strong>{" "}
            <strong className="font-semibold">Suas escolhas.</strong>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Uma mentoria de nutrição feminina para mulheres que querem cuidar do
            corpo com ciência, acolhimento e escolhas conscientes — respeitando a
            fase de vida, a rotina e a história de cada uma.
          </p>
          <div className="mt-9">
            <CtaButton>Quero começar minha transformação</CtaButton>
          </div>
          <p className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-bronze">
            Body • Mind • Spirit — @ka.affonso
          </p>
        </div>

        <div className="relative">
          <figure className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-sm bg-ink shadow-editorial">
            <img
              src={heroPortrait}
              alt="Retrato editorial de Karina Affonso, nutricionista funcional e oncológica"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
