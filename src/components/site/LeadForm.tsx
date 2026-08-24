import { useState } from "react";
import { PlaceholderNote } from "./primitives";
import { ArrowIcon, LockIcon } from "./icons";

/**
 * Substitua SEUNUMERO pelo WhatsApp com DDI + DDD (ex.: 5511999999999).
 * Nenhum backend é necessário: o lead é enviado via WhatsApp.
 */
const WHATSAPP_NUMBER = "SEUNUMERO";

/**
 * Opcional: para persistir leads (Lovable Cloud / webhook), implemente aqui.
 * Não ativado por falta de dados de destino.
 */
// async function persistLead(data: FormState) {}

type FormState = {
  nome: string;
  whatsapp: string;
  email: string;
  objetivo: string;
  momento: string;
  mensagem: string;
};

const objetivos = [
  "Nutrição funcional e saúde geral",
  "Suporte nutricional oncológico",
  "Fase de transição (ciclos, gestação, climatério)",
  "Relação com a comida e escolhas conscientes",
];

const momentos = [
  "Quero começar agora",
  "Estou avaliando",
  "Já fiz acompanhamento antes",
];

const empty: FormState = {
  nome: "",
  whatsapp: "",
  email: "",
  objetivo: "",
  momento: "",
  mensagem: "",
};

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const fieldClass =
  "min-h-[48px] w-full rounded-sm border border-input bg-cream/40 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-bronze";

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function validateStep1() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (data.nome.trim().length < 2) e.nome = "Informe seu nome completo.";
    if (data.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "Informe um WhatsApp válido com DDD.";
    if (!/^\S+@\S+\.\S+$/.test(data.email.trim()))
      e.email = "Informe um e-mail válido.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.objetivo) e.objetivo = "Selecione seu objetivo principal.";
    if (!data.momento) e.momento = "Selecione seu momento atual.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (step === 1) {
      if (validateStep1()) setStep(2);
      return;
    }
    if (!validateStep2()) return;

    setSent(true);
    const text = encodeURIComponent(
      `Olá, Karina! Meu nome é ${data.nome.trim()} e meu objetivo é: ${data.objetivo}.`,
    );
    window.setTimeout(() => {
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    }, 1500);
  }

  const progress = sent ? 100 : step === 1 ? 50 : 90;

  return (
    <section id="triagem" className="bg-sand py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto w-full max-w-[560px] rounded-sm bg-card p-7 shadow-editorial sm:p-10">
          <p className="eyebrow">Triagem</p>
          <h2 className="display-lg mt-3 text-[2rem] leading-tight text-foreground">
            Vamos entender o seu momento
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Duas etapas rápidas. Suas respostas são lidas antes de qualquer
            conversa.
          </p>

          <div className="mt-7" aria-hidden="true">
            <div className="h-[3px] w-full rounded-full bg-sand">
              <div
                className="h-[3px] rounded-full bg-bronze transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-bronze">
              {sent ? "Concluído" : `Etapa ${step} de 2`}
            </p>
          </div>

          {sent ? (
            <div className="mt-8" role="status" aria-live="polite">
              <h3 className="text-2xl text-foreground">Recebido, {data.nome.split(" ")[0]}!</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Estamos te levando ao WhatsApp para finalizar a triagem. Se nada
                acontecer, toque no botão abaixo.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Olá, Karina! Meu nome é ${data.nome.trim()} e meu objetivo é: ${data.objetivo}.`,
                )}`}
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-7 text-[0.78rem] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-bronze"
              >
                Abrir WhatsApp
              </a>
              <div className="mt-6">
                <PlaceholderNote>Configurar número do WhatsApp</PlaceholderNote>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              {step === 1 ? (
                <>
                  <Field label="Nome completo" error={errors.nome} htmlFor="nome">
                    <input
                      id="nome"
                      name="nome"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Seu nome"
                      value={data.nome}
                      onChange={(e) => set("nome")(e.target.value)}
                    />
                  </Field>
                  <Field label="WhatsApp" error={errors.whatsapp} htmlFor="whatsapp">
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      inputMode="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="(11) 91234-5678"
                      value={data.whatsapp}
                      onChange={(e) => set("whatsapp")(maskPhone(e.target.value))}
                    />
                  </Field>
                  <Field label="E-mail" error={errors.email} htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="voce@email.com"
                      value={data.email}
                      onChange={(e) => set("email")(e.target.value)}
                    />
                  </Field>
                </>
              ) : (
                <>
                  <Field label="Objetivo principal" error={errors.objetivo} htmlFor="objetivo">
                    <select
                      id="objetivo"
                      name="objetivo"
                      className={fieldClass}
                      value={data.objetivo}
                      onChange={(e) => set("objetivo")(e.target.value)}
                    >
                      <option value="">Selecione</option>
                      {objetivos.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Momento atual" error={errors.momento} htmlFor="momento">
                    <select
                      id="momento"
                      name="momento"
                      className={fieldClass}
                      value={data.momento}
                      onChange={(e) => set("momento")(e.target.value)}
                    >
                      <option value="">Selecione</option>
                      {momentos.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    label="Quer contar algo mais? (opcional)"
                    htmlFor="mensagem"
                  >
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      maxLength={1000}
                      className={`${fieldClass} min-h-[112px] py-3`}
                      placeholder="Escreva livremente"
                      value={data.mensagem}
                      onChange={(e) => set("mensagem")(e.target.value)}
                    />
                  </Field>
                </>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {step === 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex min-h-[48px] items-center rounded-full border border-bronze/60 px-6 text-[0.74rem] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-sand"
                  >
                    Voltar
                  </button>
                ) : null}
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-3 rounded-full bg-ink px-7 text-[0.74rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bronze"
                >
                  {step === 1 ? "Continuar" : "Enviar triagem"}
                  <ArrowIcon />
                </button>
              </div>

              <p className="flex items-start gap-2 pt-2 text-xs leading-relaxed text-muted-foreground">
                <LockIcon className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
                Suas informações são confidenciais e usadas apenas para avaliar
                seu caso. Nada é compartilhado com terceiros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-ink/70"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
