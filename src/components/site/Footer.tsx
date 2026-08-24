import { Divider } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream">
      <div className="section-shell text-center">
        <p className="font-display text-2xl tracking-[0.14em] uppercase">
          KARINA AFFONSO
        </p>
        <p className="mt-3 text-[0.72rem] uppercase tracking-[0.2em] text-cream/70">
          Nutricionista Funcional e Oncológica
        </p>
        <p className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-cream/70">
          CRN3-96902 · São Paulo · Mentorias online
        </p>

        <div className="my-8 opacity-70">
          <Divider />
        </div>

        <a
          href="https://instagram.com/ka.affonso"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center text-[0.72rem] uppercase tracking-[0.18em] text-cream/85 transition-colors hover:text-bronze"
        >
          Instagram @ka.affonso
        </a>

        <p className="mt-8 text-xs text-cream/50">
          © 2026 Karina Affonso. Todos os direitos reservados. Desenvolvido por
          Toss Lab.
        </p>
      </div>
    </footer>
  );
}
