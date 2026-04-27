"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const MAP_SRC =
  "https://maps.google.com/maps?q=Rua+Vilela+Tavares,+55,+M%C3%A9ier,+Rio+de+Janeiro,+RJ,+20725-220,+Brasil&output=embed&z=16&hl=pt-BR";

function LockIcon({ unlocked }: { unlocked: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 flex-shrink-0"
    >
      {/* Shackle — rendered behind the body so the body edge masks the legs cleanly */}
      <motion.g
        animate={{ rotate: unlocked ? -45 : 0 }}
        style={{ transformOrigin: "8px 11px" }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      >
        <path d="M8 11V7a4 4 0 018 0v4" />
      </motion.g>
      {/* Body — rendered on top so it naturally cuts the shackle at the boundary */}
      <rect x="3" y="11" width="18" height="11" rx="2" />
    </svg>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    form.nome.trim().length > 0 &&
    EMAIL_RE.test(form.email) &&
    form.mensagem.trim().length > 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up real form submission
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <h1
            className="text-3xl font-black text-on-primary"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Fale Conosco
          </h1>
          <p className="text-sm text-on-primary/80 mt-2">
            Estamos prontos para atendê-lo. Entre em contato por telefone, Whatsapp ou pelo formulário abaixo.
          </p>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-10">
        <div className="rounded-xl overflow-hidden border border-outline-variant shadow-sm h-72 lg:h-96">
          <iframe
            src={MAP_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização OcupacionalMED — Rua Vilela Tavares, 55, Méier, Rio de Janeiro"
          />
        </div>

        {/* "Open in Maps" link */}
        <div className="mt-2 flex justify-end">
          <a
            href="https://maps.google.com/?q=Rua+Vilela+Tavares,+55,+M%C3%A9ier,+Rio+de+Janeiro,+RJ,+20725-220,+Brasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-150 flex items-center gap-1"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Abrir no Google Maps
          </a>
        </div>
      </section>

      {/* ── Info + Form ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Contact info */}
          <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="bg-secondary px-5 py-3">
              <h2
                className="text-sm font-bold text-on-secondary"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Nos encontre aqui
              </h2>
            </div>
            <div className="px-5 py-5 space-y-5 text-[14px] text-on-surface leading-relaxed">
              <div className="flex gap-3">
                <span className="mt-0.5 text-secondary flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-on-surface-variant text-xs uppercase tracking-wide mb-1"
                     style={{ fontFamily: "Lato, Arial, sans-serif" }}>
                    Endereço
                  </p>
                  <p>Rua Vilela Tavares, nº 55</p>
                  <p>Méier &mdash; Rio de Janeiro / RJ</p>
                  <p>CEP 20275-220</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="mt-0.5 text-secondary flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-on-surface-variant text-xs uppercase tracking-wide mb-1"
                     style={{ fontFamily: "Lato, Arial, sans-serif" }}>
                    Telefone
                  </p>
                  <p>Tel: (21) 2289-3249</p>
                  <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 font-bold text-[13px] text-[#25D366]
                               hover:text-[#1ebe5d] transition-colors duration-150"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="bg-secondary px-5 py-3">
              <h2
                className="text-sm font-bold text-on-secondary"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Envie uma mensagem
              </h2>
            </div>

            {submitted ? (
              <div className="px-5 py-10 text-center">
                <p
                  className="text-primary font-bold text-base"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  Mensagem enviada com sucesso!
                </p>
                <p className="text-[13px] text-on-surface mt-2">
                  Entraremos em contato em breve.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
                  }}
                  className="mt-5 text-sm font-bold text-primary underline underline-offset-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
                {[
                  { id: "nome",     label: "Nome",     type: "text",  placeholder: "Seu nome completo",   required: true  },
                  { id: "email",    label: "E-mail",   type: "email", placeholder: "seu@email.com",       required: true  },
                  { id: "telefone", label: "Telefone", type: "tel",   placeholder: "(21) 99999-9999",     required: false },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id} className="flex flex-col gap-1">
                    <label
                      htmlFor={id}
                      className="text-xs font-bold text-on-surface-variant uppercase tracking-wide"
                      style={{ fontFamily: "Lato, Arial, sans-serif" }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required={required}
                      value={form[id as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="border border-outline-variant rounded bg-surface text-[13px] text-on-surface
                                 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                                 transition-colors placeholder:text-on-surface-variant/50"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="mensagem"
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-wide"
                    style={{ fontFamily: "Lato, Arial, sans-serif" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Como podemos ajudá-lo?"
                    className="border border-outline-variant rounded bg-surface text-[13px] text-on-surface
                               px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                               transition-colors placeholder:text-on-surface-variant/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bold text-sm px-6 py-3 bg-primary text-on-primary rounded-lg
                             hover:bg-primary-container hover:text-on-primary-container
                             transition-colors duration-150 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  <LockIcon unlocked={isValid} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
