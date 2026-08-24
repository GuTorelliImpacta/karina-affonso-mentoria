import aboutPhoto from "@/assets/about-karina.jpg";
import { Section, PlaceholderNote } from "./primitives";

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16">
        <figure className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-sm shadow-editorial">
          <img
            src={aboutPhoto}
            alt="Karina Affonso em retrato preto e branco"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover grayscale"
          />
        </figure>

        <div>
          <p className="eyebrow">Sobre Karina</p>
          <h2 className="display-lg mt-4 text-foreground">
            Nutrição como um encontro entre ciência e escuta
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Atuo com nutrição funcional e oncológica, acompanhando mulheres em
              diferentes momentos da vida. Meu trabalho parte de uma escuta
              cuidadosa da história de cada pessoa antes de qualquer conduta.
            </p>
            <p>
              A proposta é simples e exigente ao mesmo tempo: construir escolhas
              alimentares sustentáveis, alinhadas ao corpo, à rotina e aos
              valores de quem chega — sem imposições e sem promessas rápidas.
            </p>
          </div>

          <div className="mt-8 border-t border-bronze/30 pt-6">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bronze">
              Formação e registro
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex flex-wrap items-center gap-3">
                <PlaceholderNote>Inserir CRN</PlaceholderNote>
                <span>Registro profissional a ser preenchido.</span>
              </li>
              <li className="flex flex-wrap items-center gap-3">
                <PlaceholderNote>Inserir formação</PlaceholderNote>
                <span>Graduação, especializações e cursos.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
