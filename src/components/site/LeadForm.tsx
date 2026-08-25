import { useRef, useState } from "react";
import { ArrowIcon } from "./icons";

/** WhatsApp oficial (DDI + DDD, sem símbolos). */
const WHATSAPP_NUMBER = "5511999708185";

/** Nome do form usado pela captura nativa do deploy (Netlify Forms). */
const FORM_NAME = "triagem";

type FormState = {
  nome: string;
  whatsapp: string;
  idade: string;
  objetivo: string;
  acompanhamentoAnterior: string;
  detalhes: string;
};

const objetivos = [
  "Emagrecimento sustentável",
  "Melhorar minha relação com a comida",
  "Mais energia e disposição",
  "Saúde e prevenção",
  "Acompanhamento nutricional oncológico",
  "Outro",
];

const empty: FormState = {
  nome: "",
  whatsapp: "",
  idade: "",
  objetivo: "",
  acompanhamentoAnterior: "",
  detalhes: "",
};

/** Máscara brasileira (00) 00000-0000 */
function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

function validateField(key: keyof FormState, data: FormState): string | undefined {
  switch (key) {
    case "nome":
      return data.nome.trim().length < 3
        ? "Informe seu nome completo (mínimo 3 caracteres)."
        : undefined;
    case "whatsapp":
      return data.whatsapp.replace(/\D/g, "").length < 11
        ? "Informe um WhatsApp válido com DDD — (00) 00000-0000."
        : undefined;
    case "idade": {
      const idade = Number(data.idade);
      return !data.idade || Number.isNaN(idade) || idade < 14 || idade > 99
        ? "Informe uma idade entre 14 e 99 anos."
        : undefined;
    }
    case "objetivo":
      return data.objetivo ? undefined : "Selecione seu objetivo principal.";
    case "acompanhamentoAnterior":
      return data.acompanhamentoAnterior ? undefined : "Selecione uma opção.";
    default:
      return undefined;
  }
}

const fieldClass =
  "min-h-[48px] w-full rounded-sm border border-input bg-cream/40 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-bronze";

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const honeypot = useRef("");
  const formRef = useRef<HTMLFormElement>(null);

  const set = (key: keyof FormState) => (value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const blur = (key: keyof FormState) => () =>
    setErrors((e) => ({ ...e, [key]: validateField(key, data) }));

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Meu nome é ${data.nome.trim()} e meu objetivo é: ${data.objetivo}.${
      data.detalhes.trim() ? ` Sobre o meu objetivo: ${data.detalhes.trim()}` : ""
    }`,
  )}`;

  function focusFirstInvalid(keys: (keyof FormState)[]) {
    const first = keys[0];
    if (!first) return;
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus({ preventScroll: true });
  }

  function checkStep(keys: (keyof FormState)[]) {
    const e: Partial<Record<keyof FormState, string>> = {};
    const invalid: (keyof FormState)[] = [];
    for (const key of keys) {
      const message = validateField(key, data);
      if (message) {
        e[key] = message;
        invalid.push(key);
      }
    }
    setErrors(e);
    if (invalid.length) focusFirstInvalid(invalid);
    return invalid.length === 0;
  }

  async function persistLead() {
    // Captura nativa do deploy (Netlify Forms) — sem backend próprio.
    const body = encode({
      "form-name": FORM_NAME,
      nome: data.nome.trim(),
      whatsapp: data.whatsapp,
      idade: data.idade,
      objetivo: data.objetivo,
      acompanhamentoAnterior: data.acompanhamentoAnterior,
      detalhes: data.detalhes.trim(),
      "bot-field": "",
    });
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (submitting) return;

    if (step === 1) {
      if (checkStep(["nome", "whatsapp", "idade"])) setStep(2);
      return;
    }
    if (!checkStep(["objetivo", "acompanhamentoAnterior"])) return;

    // Honeypot: descarta silenciosamente envios automatizados.
    if (honeypot.current.trim()) {
      setSent(true);
      return;
    }

    setSubmitting(true);
    const link = waLink;
    try {
      await persistLead();
    } catch (error) {
      console.error("Falha ao registrar lead na Netlify:", error);
      // O contato importa mais que o registro: segue para o WhatsApp.
    }
    setSent(true);
    window.setTimeout(() => {
      window.location.href = link;
    }, 1500);
  }

  const progress = sent ? 100 : step === 1 ? 50 : 90;

  return (
    <section id="triagem" className="bg-sand py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto w-full max-w-[560px] rounded-sm bg-card p-7 shadow-editorial sm:p-10">
          <p className="eyebrow">Triagem</p>
          <h2 className="display-lg mt-3 text-[1.9rem] leading-tight text-foreground">
            Se você se identificou, talvez seja o momento de começar.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Preencha a triagem abaixo — leva menos de 2 minutos. Suas respostas
            me ajudam a entender se a mentoria é para você.
          </p>

          <div className="mt-7" aria-hidden="true">
            <div className="h-[3px] w-full rounded-full bg-sand">
              <div
                className="h-[3px] rounded-full bg-bronze transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-bronze-ink">
              {sent ? "Concluído" : `Etapa ${step} de 2`}
            </p>
          </div>

          {sent ? (
            <div className="mt-8" role="status" aria-live="polite">
              <h3 className="text-2xl leading-snug text-foreground">
                Recebido! Vamos te redirecionar para o WhatsApp...
              </h3>
              <a
                href={waLink}
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-7 text-[0.78rem] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-bronze"
              >
                Abrir WhatsApp
              </a>
            </div>
          ) : (
            <form
              ref={formRef}
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-5"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden" aria-hidden="true">
                <label>
                  Não preencha este campo
                  <input
                    type="text"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={(e) => (honeypot.current = e.target.value)}
                  />
                </label>
              </p>

              {step === 1 ? (
                <>
                  <Field label="Nome completo" error={errors.nome} htmlFor="nome">
                    <input
                      id="nome"
                      name="nome"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Seu nome"
                      aria-invalid={!!errors.nome}
                      value={data.nome}
                      onChange={(e) => set("nome")(e.target.value)}
                      onBlur={blur("nome")}
                    />
                  </Field>
                  <Field label="WhatsApp" error={errors.whatsapp} htmlFor="whatsapp">
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      inputMode="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="(00) 00000-0000"
                      aria-invalid={!!errors.whatsapp}
                      value={data.whatsapp}
                      onChange={(e) => set("whatsapp")(maskPhone(e.target.value))}
                      onBlur={blur("whatsapp")}
                    />
                  </Field>
                  <Field label="Idade" error={errors.idade} htmlFor="idade">
                    <input
                      id="idade"
                      name="idade"
                      inputMode="numeric"
                      className={fieldClass}
                      placeholder="00"
                      aria-invalid={!!errors.idade}
                      value={data.idade}
                      onChange={(e) =>
                        set("idade")(e.target.value.replace(/\D/g, "").slice(0, 3))
                      }
                      onBlur={blur("idade")}
                    />
                  </Field>
                </>
              ) : (
                <>
                  <p className="rounded-sm bg-sand/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    Ao enviar, você será direcionada ao WhatsApp da equipe para
                    continuar a conversa.
                  </p>

                  <Field
                    label="Qual é o seu objetivo principal?"
                    error={errors.objetivo}
                    htmlFor="objetivo"
                  >
                    <select
                      id="objetivo"
                      name="objetivo"
                      className={fieldClass}
                      aria-invalid={!!errors.objetivo}
                      value={data.objetivo}
                      onChange={(e) => set("objetivo")(e.target.value)}
                      onBlur={blur("objetivo")}
                    >
                      <option value="">Selecione</option>
                      {objetivos.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <fieldset>
                    <legend className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-ink/70">
                      Já fez acompanhamento nutricional antes?
                    </legend>
                    <div className="flex gap-3">
                      {["Sim", "Não"].map((opt) => (
                        <label
                          key={opt}
                          className={`inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm border px-4 text-sm transition-colors ${
                            data.acompanhamentoAnterior === opt
                              ? "border-bronze bg-sand"
                              : "border-input bg-cream/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="acompanhamentoAnterior"
                            value={opt}
                            checked={data.acompanhamentoAnterior === opt}
                            onChange={() => set("acompanhamentoAnterior")(opt)}
                            className="accent-bronze"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                    {errors.acompanhamentoAnterior ? (
                      <p className="mt-2 text-xs text-bronze-ink" role="alert">
                        {errors.acompanhamentoAnterior}
                      </p>
                    ) : null}
                  </fieldset>

                  <Field
                    label="Quer contar um pouco mais sobre seu objetivo com a mentoria? (opcional)"
                    htmlFor="detalhes"
                  >
                    <textarea
                      id="detalhes"
                      name="detalhes"
                      rows={4}
                      className={`${fieldClass} min-h-[120px] resize-y py-3 leading-relaxed`}
                      placeholder="Fique à vontade para escrever com suas palavras — o que você sente hoje e o que gostaria de mudar."
                      value={data.detalhes}
                      onChange={(e) => set("detalhes")(e.target.value)}
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
                  disabled={submitting}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-3 rounded-full bg-ink px-7 text-[0.74rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bronze disabled:opacity-70"
                >
                  {submitting
                    ? "Enviando..."
                    : step === 1
                      ? "Continuar"
                      : "Enviar e falar com a equipe"}
                  <ArrowIcon />
                </button>
              </div>

              <p className="pt-2 text-xs leading-relaxed text-muted-foreground">
                🔒 Seus dados são confidenciais e usados apenas para o contato da
                equipe.
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
        <p className="mt-2 text-xs text-bronze-ink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
