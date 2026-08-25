import { Section } from "./primitives";
import { Portrait } from "./Portrait";

const credenciais = [

  "Nutrição funcional e oncológica",
  "CRN3-96902",
  "Mentorias online — Brasil 🇧🇷 e EUA 🇺🇸",
  "Atendimento em São Paulo",
  "Parceira do @nucleoatp",
];

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16">
        <Portrait
          src="/karina2.webp"
          alt="Karina Affonso em treino de canoagem, movimento e estilo de vida"
          className="mx-auto max-w-sm"
          objectPosition="center 30%"
          width={449}
          height={459}
          grayscale
        />


        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 className="display-lg mt-4 text-foreground">
            Prazer, eu sou a{" "}
            <strong className="font-semibold">Karina Affonso</strong>.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou nutricionista funcional e oncológica e uno ciência, escuta e
              estratégia para construir com você uma alimentação que caiba na sua
              vida — e transforme a sua saúde. Atendo mulheres do Brasil e dos
              Estados Unidos em mentorias online, porque acredito que corpo,
              mente e espírito caminham juntos, e que cuidar da alimentação não
              significa abrir mão de viver.
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

          <a
            href="https://www.instagram.com/ka.affonso"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[0.74rem] uppercase tracking-[0.16em] text-bronze-ink transition-colors hover:text-ink"
          >
            <InstagramIcon className="h-5 w-5 text-bronze" />
            @ka.affonso
          </a>

        </div>
      </div>
    </Section>
  );
}
