import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ForYou } from "@/components/site/ForYou";
import { About } from "@/components/site/About";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Stories } from "@/components/site/Stories";
import { Faq } from "@/components/site/Faq";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";

const title =
  "Karina Affonso | Nutricionista Funcional e Oncológica — Mentoria de Nutrição";
const description =
  "Mentoria de nutrição feminina com Karina Affonso, nutricionista funcional e oncológica. Cuidado individualizado, com ciência e acolhimento.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Karina Affonso — Nutrição Funcional e Oncológica",
          description,
          areaServed: "BR",
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
        <ForYou />
        <About />
        <HowItWorks />
        <Stories />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
