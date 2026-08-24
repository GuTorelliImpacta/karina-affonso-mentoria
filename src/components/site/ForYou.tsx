import { Section, SectionHeading, Divider } from "./primitives";
import { CycleIcon, HeartIcon, LeafIcon, SparkIcon } from "./icons";

const cards = [
  {
    icon: LeafIcon,
    title: "Você quer cuidar do corpo com ciência",
    text: "Cansou de dietas genéricas e quer um cuidado individualizado, com base em nutrição funcional e escuta atenta.",
  },
  {
    icon: CycleIcon,
    title: "Você vive uma fase de transição",
    text: "Ciclos, gestação, pós-parto, climatério: fases em que o corpo pede outro tipo de atenção e de linguagem.",
  },
  {
    icon: HeartIcon,
    title: "Você atravessa ou atravessou um tratamento",
    text: "Busca suporte nutricional durante ou após o tratamento oncológico, com respeito ao seu tempo e à sua história.",
  },
  {
    icon: SparkIcon,
    title: "Você quer uma relação leve com a comida",
    text: "Deseja sair do ciclo de culpa e construir escolhas conscientes que caibam na sua rotina real.",
  },
];

export function ForYou() {
  return (
    <Section id="para-voce" tone="sand">
      <SectionHeading
        eyebrow="Isso é para você?"
        title="Se você se reconhece aqui, estamos no mesmo caminho"
      />
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
            <h3 className="mt-5 text-xl leading-snug text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
