import { Divider } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream">
      <div className="section-shell text-center">
        <p className="font-display text-2xl tracking-[0.14em] uppercase">
          Karina Affonso
        </p>
        <p className="mt-3 text-[0.72rem] uppercase tracking-[0.2em] text-cream/70">
          Nutricionista Funcional e Oncológica
        </p>

        <div className="my-8 opacity-70">
          <Divider />
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.72rem] uppercase tracking-[0.16em] text-cream/80">
            <li>
              <a className="inline-flex min-h-[44px] items-center hover:text-bronze" href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-[44px] items-center hover:text-bronze" href="#mentoria">
                Mentoria
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-[44px] items-center hover:text-bronze" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-[44px] items-center hover:text-bronze" href="#triagem">
                Começar
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-6 text-[0.72rem] uppercase tracking-[0.2em] text-cream/60">
          Body • Mind • Spirit — @ka.affonso
        </p>
        <p className="mt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} Karina Affonso. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
