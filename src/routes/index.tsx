import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { ForYou } from "@/components/site/ForYou";
import { NotForYou } from "@/components/site/NotForYou";
import { About } from "@/components/site/About";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Stories } from "@/components/site/Stories";
import { Faq } from "@/components/site/Faq";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

const SITE_URL = "https://project--ae8d08f8-2746-42fa-b386-cee8dd9a4288.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const INSTAGRAM = "https://www.instagram.com/ka.affonso";

const title =
  "Karina Affonso | Nutricionista Funcional e Oncológica — Mentoria de Nutrição";
const description =
  "Mentoria de nutrição feminina com Karina Affonso, nutricionista funcional e oncológica: acompanhamento personalizado, humano e transformador.";

const faq = [
  {
    q: "A mentoria é online ou presencial?",
    a: "O acompanhamento é ao vivo e online, com encontros presenciais periódicos da comunidade.",
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
    a: "Preenchendo o formulário de triagem abaixo. Em seguida, eu entro em contato com você pelo WhatsApp.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Karina Affonso",
          jobTitle: "Nutricionista Funcional e Oncológica",
          url: `${SITE_URL}/`,
          image: OG_IMAGE,
          sameAs: [INSTAGRAM],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Karina Affonso — Nutrição Funcional e Oncológica",
          description,
          url: `${SITE_URL}/`,
          image: OG_IMAGE,
          areaServed: ["São Paulo", "Brasil", "Estados Unidos"],
          sameAs: [INSTAGRAM],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ForYou />
        <NotForYou />
        <About />
        <HowItWorks />
        <Stories />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
