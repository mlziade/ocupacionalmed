"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "parceiros",
    title: "Parceiros",
    items: [
      "Despesa apenas quando utilizar o sistema",
      "Maior utilização, menor custo relativo",
      "Suporte de médicos do trabalho",
      "Credenciamento de médicos de qualquer localidade do país, com acesso ao prontuário médico-ocupacional único, on-line",
      "Atualização e geração de documentos on-line (PPRA, PCMSO, Prontuários etc.)",
      "Médico Coordenador sem custo adicional (opcional)",
      "Documentos emitidos com a sua logomarca",
      "Relatórios de ativo, passivo, faturas etc.",
      "Integração instantânea: PPRA – PCMSO – RA – PPP",
      "Emissão de documentos atualizados em tempo real, on-line",
    ],
  },
  {
    id: "empresas",
    title: "Empresas",
    items: [
      "E-mails automáticos com antecedência sobre vencimentos de exames",
      "Consulta a exames vencidos e a vencer, on-line",
      "Consulta e emissão de documentos em tempo real (PPRA, PCMSO, ASOs, RA, PPP), com quadro funcional ativo e inativo",
      "Atualização de dados cadastrais on-line",
    ],
  },
  {
    id: "recursos",
    title: "Recursos do Sistema",
    items: [
      "Monitoramento e controle de lançamento de informações: prontuário médico, cadastros, agendamentos etc.",
      "Integração total entre: PPRA, PCMSO, RA e PPP",
      "Estatísticas: exames realizados, a vencer e vencidos; número de funcionários ativos e inativos por empresa",
      "Relatórios administrativos e financeiros: controle automático de faturas pagas e em aberto, despesas e tipos de exames realizados",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center">
        {/* Background image */}
        <Image
          src="/images/hero_banner.webp"
          alt="Portal OcupacionalMED"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Doctor cut-out — right side */}
        <div className="absolute bottom-0 right-0 h-full hidden lg:block pointer-events-none select-none">
          <Image
            src="/images/medica-em-pe-transparente.png"
            alt=""
            width={360}
            height={520}
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>

        {/* Hero text */}
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
              <a
                href="#servicos"
                className="font-bold text-sm px-6 py-3 bg-primary text-on-primary rounded-lg
                           hover:bg-primary-container hover:text-on-primary-container
                           transition-colors duration-150"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Conheça os Serviços
              </a>
              <a
                href="/contato"
                className="font-bold text-sm px-6 py-3 bg-white/20 text-white border border-white/40 rounded-lg
                           hover:bg-white/30 transition-colors duration-150 backdrop-blur-sm"
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                Entre em Contato
              </a>
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

      {/* ── Services ── */}
      <section id="servicos" className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-primary mb-8"
          style={{ fontFamily: "Lato, Arial, sans-serif" }}
        >
          O que oferecemos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-surface border border-outline-variant rounded-xl overflow-hidden
                         shadow-sm hover:shadow-md hover:bg-primary-container
                         transition-all duration-200"
            >
              {/* Card header */}
              <div className="bg-secondary px-5 py-3">
                <h3
                  className="text-sm font-bold text-on-secondary"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Card body */}
              <ul className="px-5 py-4 space-y-2">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[13px] text-on-surface leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
