import { useEffect, useState } from "react";
import { CtaButton } from "./primitives";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Transformações", href: "#transformacoes" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-cream/85 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <a
          href="#top"
          className="min-w-0 font-display text-lg leading-none tracking-[0.14em] text-ink uppercase sm:text-xl"
        >
          Karina&nbsp;Affonso
          <span className="mt-1 block font-sans text-[0.58rem] tracking-[0.24em] text-bronze">
            Nutrição funcional
          </span>
        </a>

        <div className="flex items-center gap-8">
          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-[44px] items-center text-[0.72rem] uppercase tracking-[0.16em] text-ink/80 transition-colors hover:text-bronze"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <CtaButton className="px-5 text-[0.7rem]">Começar</CtaButton>
        </div>
      </div>
    </header>
  );
}
