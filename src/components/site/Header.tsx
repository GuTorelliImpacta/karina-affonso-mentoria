import { useEffect, useRef, useState } from "react";
import { CtaButton } from "./primitives";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Transformações", href: "#transformacoes" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do body e habilita Esc enquanto o drawer está aberto.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    burgerRef.current?.focus();
  }

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
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
          <span className="mt-1 block font-sans text-[0.58rem] tracking-[0.24em] text-bronze-ink">
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
                    className="inline-flex min-h-[44px] items-center text-[0.72rem] uppercase tracking-[0.16em] text-ink/80 transition-colors hover:text-bronze-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <CtaButton className="hidden px-5 text-[0.7rem] md:inline-flex">
            Começar
          </CtaButton>

          <button
            ref={burgerRef}
            type="button"
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center text-ink md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.25}
              strokeLinecap="round"
              aria-hidden="true"
              className="h-6 w-6"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

    </header>
    {/* Drawer fullscreen mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 top-0 z-40 bg-cream md:hidden"
      >
        <nav
          aria-label="Navegação mobile"
          className="fade-up flex h-full flex-col justify-center gap-2 px-8 pb-20"
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={l.href}
              onClick={close}
              className="flex min-h-[56px] items-center font-display text-3xl text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#triagem"
            onClick={close}
            className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-7 text-[0.74rem] uppercase tracking-[0.18em] text-cream"
          >
            Começar agora
          </a>
        </nav>
      </div>
    </>
  );
}
