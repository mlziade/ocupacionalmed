"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "parceiros",
    title: "Parceiros",
    summary:
      "Integre-se à rede com custo variável, suporte médico especializado e geração automática de documentos como PPRA, PCMSO e prontuários com a sua logomarca.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "empresas",
    title: "Empresas",
    summary:
      "Acompanhe vencimentos de exames, acesse e emita documentos em tempo real e mantenha o quadro funcional sempre atualizado, de qualquer lugar.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "recursos",
    title: "Recursos do Sistema",
    summary:
      "Monitoramento centralizado, integração total entre PPRA, PCMSO, RA e PPP, com estatísticas e relatórios administrativos e financeiros completos.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  const [doctorReady, setDoctorReady] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center">
        <Image
          src="/images/hero_banner.webp"
          alt="Portal OcupacionalMED"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Doctor cut-out */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={doctorReady ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute bottom-0 right-0 h-full hidden lg:block pointer-events-none select-none"
        >
          <Image
            src="/images/medica-em-pe-transparente.png"
            alt=""
            width={360}
            height={520}
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
            priority
            onLoad={() => setDoctorReady(true)}
          />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="max-w-xl"
          >
            <h1
              className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              Saúde e Segurança Ocupacional integradas, em tempo real
            </h1>
            <p className="text-base text-white/90 leading-relaxed mb-8">
              Profissionais e empresas têm acesso a consultas, emissão de documentos
              e relatórios de qualquer lugar, a qualquer hora. Venha fazer parte da
              nossa rede.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/servicos"
                className="font-bold text-sm px-6 py-3 bg-primary text-on-primary rounded-lg
                           hover:bg-primary-container hover:text-on-primary-container
                           transition-colors duration-150"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Conheça os Serviços
              </Link>
              <Link
                href="/contato"
                className="font-bold text-sm px-6 py-3 bg-white/20 text-white border border-white/40 rounded-lg
                           hover:bg-white/30 transition-colors duration-150 backdrop-blur-sm"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5">
          <p className="text-sm text-on-primary/90 leading-relaxed text-center">
            Bem-vindo ao Portal OcupacionalMED — gerenciamento integrado das áreas de medicina e
            segurança do trabalho, com acesso administrativo-financeiro totalmente on-line.
          </p>
        </div>
      </section>

      {/* ── Services overview ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2
            className="text-2xl font-bold text-primary"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            O que oferecemos
          </h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Uma plataforma completa para parceiros e empresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-surface border border-outline-variant rounded-xl p-6
                         shadow-sm hover:shadow-md hover:bg-primary-container
                         transition-all duration-200 flex flex-col gap-4"
            >
              <span className="text-secondary">{service.icon}</span>
              <div>
                <h3
                  className="text-sm font-bold text-on-surface mb-1"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[13px] text-on-surface leading-relaxed">
                  {service.summary}
                </p>
              </div>
              <Link
                href="/servicos"
                className="mt-auto text-xs font-bold text-primary hover:text-secondary transition-colors duration-150 flex items-center gap-1"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Ver detalhes
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2
              className="text-xl font-black text-on-primary"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              Pronto para integrar a sua gestão de saúde ocupacional?
            </h2>
            <p className="text-sm text-on-primary/80 mt-1">
              Fale com a nossa equipe e descubra como fazer parte da rede OcupacionalMED.
            </p>
          </div>
          <Link
            href="/contato"
            className="flex-shrink-0 font-bold text-sm px-8 py-3 bg-on-primary text-primary rounded-lg
                       hover:bg-primary-container transition-colors duration-150"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </>
  );
}
