"use client";

import { useState, FormEvent } from "react";

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
      <section className="bg-background border-b border-outline-variant">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <h1 className="text-2xl font-bold text-primary">Contato</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Entre em contato com a nossa equipe
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="bg-secondary px-5 py-3">
              <h2 className="text-sm font-bold text-on-secondary">
                Informações de Contato
              </h2>
            </div>
            <div className="px-5 py-5 space-y-3 text-[13px] text-on-surface leading-relaxed">
              <div>
                <p className="font-bold text-on-surface-variant text-xs uppercase tracking-wide mb-1">
                  Endereço
                </p>
                <p>Rua Vilela Tavares, nº 55</p>
                <p>Méier | Rio de Janeiro - RJ</p>
                <p>CEP 20725-220</p>
              </div>
              <div>
                <p className="font-bold text-on-surface-variant text-xs uppercase tracking-wide mb-1">
                  Telefone
                </p>
                <p>Tel (RJ) 21 2289-3249</p>
                <p>Fax 21 2593-0557</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="bg-secondary px-5 py-3">
              <h2 className="text-sm font-bold text-on-secondary">
                Formulário de Contato
              </h2>
            </div>

            {submitted ? (
              <div className="px-5 py-8 text-center">
                <p className="text-primary font-bold text-sm">
                  Mensagem enviada com sucesso!
                </p>
                <p className="text-[13px] text-on-surface mt-1">
                  Retornaremos em breve.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nome: "", email: "", telefone: "", mensagem: "" }); }}
                  className="mt-4 text-sm font-bold text-primary underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
                {/* Nome */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="nome"
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-wide"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="border border-outline-variant rounded bg-surface text-[13px] text-on-surface
                               px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                               transition-colors placeholder:text-on-surface-variant/50"
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-wide"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="border border-outline-variant rounded bg-surface text-[13px] text-on-surface
                               px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                               transition-colors placeholder:text-on-surface-variant/50"
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="telefone"
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-wide"
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(21) 99999-9999"
                    className="border border-outline-variant rounded bg-surface text-[13px] text-on-surface
                               px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                               transition-colors placeholder:text-on-surface-variant/50"
                  />
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="mensagem"
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-wide"
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
                    placeholder="Sua mensagem..."
                    className="border border-outline-variant rounded bg-surface text-[13px] text-on-surface
                               px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                               transition-colors placeholder:text-on-surface-variant/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bold text-sm px-6 py-2.5 bg-primary text-on-primary rounded-lg
                             hover:bg-primary-container hover:text-on-primary-container
                             transition-colors duration-150"
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
