import { Section, SectionHeading, Divider } from "./primitives";
import { CycleIcon, HeartIcon, LeafIcon, SparkIcon } from "./icons";

const cards = [
  {
    icon: LeafIcon,
    title: "Busca resultados, mas não quer viver de dieta.",
    text: "Coma o que você gosta, na quantidade certa e no horário certo. Sem radicalismos, sem terrorismo alimentar.",
  },
  {
    icon: SparkIcon,
    title: "Quer entender o seu corpo e as suas escolhas.",
    text: "Você aprende o porquê de cada alimento e ganha autonomia para cuidar de si em qualquer situação.",
  },
  {
    icon: CycleIcon,
    title: "Quer uma boa relação com a comida, a mente e o corpo.",
    text: "Alimentação não é só caloria: é prazer, cultura, memória, afeto e saúde.",
  },
  {
    icon: HeartIcon,
    title: "Gosta de sentir os benefícios de se alimentar bem.",
    text: "Mais energia, mais disposição, melhor digestão, mais força e mais confiança.",
  },
];

export function ForYou() {
  return (
    <Section id="para-voce" tone="sand">
      <SectionHeading eyebrow="Isso é para você?" title="A mentoria é para você que..." />
      <div className="mt-6">
        <Divider />
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {cards.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="rounded-sm bg-card p-7 shadow-soft transition-transform duration-300 will-change-transform hover:-translate-y-1"
          >
            <span className="icon-badge">
              <Icon />
            </span>
            <h3 className="mt-5 font-display text-xl leading-snug text-foreground">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-3xl rounded-sm border border-bronze/30 bg-sand px-7 py-8 text-center">
        <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
          Conhecimento também{" "}
          <strong className="font-semibold">faz parte do tratamento.</strong>
        </p>
      </div>
    </Section>
  );
}
