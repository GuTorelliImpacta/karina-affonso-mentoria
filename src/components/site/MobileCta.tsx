import { useEffect, useState } from "react";

/** Barra fixa inferior (mobile): aparece após o hero e some no formulário. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("triagem");
    let formVisible = false;

    const io = form
      ? new IntersectionObserver(
          ([entry]) => {
            formVisible = !!entry?.isIntersecting;
            update();
          },
          { threshold: 0 },
        )
      : null;
    io?.observe(form!);

    function update() {
      setVisible(window.scrollY > window.innerHeight * 0.8 && !formVisible);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      } transition-[transform,opacity] duration-300`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href="#triagem"
        className="flex h-14 w-full items-center justify-center gap-3 bg-ink text-[0.76rem] uppercase tracking-[0.18em] text-cream"
      >
        Agendar minha triagem →
      </a>
    </div>
  );
}
