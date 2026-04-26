"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

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
      {/* Page header */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <h1
            className="text-3xl font-black text-on-primary"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Fale Conosco
          </h1>
          <p className="text-sm text-on-primary/80 mt-2">
            Estamos prontos para atendê-lo. Entre em contato por telefone ou pelo formulário abaixo.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left column: info + image */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="bg-secondary px-5 py-3">
                <h2
                  className="text-sm font-bold text-on-secondary"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  Onde estamos
                </h2>
              </div>
              <div className="px-5 py-5 space-y-4 text-[14px] text-on-surface leading-relaxed">
                <div>
                  <p className="font-bold text-on-surface-variant text-xs uppercase tracking-wide mb-1"
                     style={{ fontFamily: "Lato, Arial, sans-serif" }}>
                    Endereço
                  </p>
                  <p>Rua Vilela Tavares, nº 55</p>
                  <p>Méier &mdash; Rio de Janeiro / RJ</p>
                  <p>CEP 20725-220</p>
                </div>
                <div>
                  <p className="font-bold text-on-surface-variant text-xs uppercase tracking-wide mb-1"
                     style={{ fontFamily: "Lato, Arial, sans-serif" }}>
                    Telefone &amp; Fax
                  </p>
                  <p>Tel: (21) 2289-3249</p>
                  <p>Fax: (21) 2593-0557</p>
                </div>
              </div>
            </div>

            {/* Doctor image */}
            <div className="relative rounded-xl overflow-hidden h-64 shadow-sm hidden sm:block">
              <Image
                src="/images/doctor-taking-pressure-desk.webp"
                alt="Atendimento OcupacionalMED"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary/30" />
            </div>
          </div>

          {/* Right column: form */}
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
                <p className="text-primary font-bold text-base" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
                  Mensagem enviada com sucesso!
                </p>
                <p className="text-[13px] text-on-surface mt-2">
                  Entraremos em contato em breve.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nome: "", email: "", telefone: "", mensagem: "" }); }}
                  className="mt-5 text-sm font-bold text-primary underline underline-offset-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
                {[
                  { id: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo", required: true },
                  { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com", required: true },
                  { id: "telefone", label: "Telefone", type: "tel", placeholder: "(21) 99999-9999", required: false },
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
                             transition-colors duration-150"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
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
