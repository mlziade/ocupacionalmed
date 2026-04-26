"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "parceiros",
    title: "Parceiros",
    items: [
      "Despesa apenas quando utilizar o sistema",
      "Mais utilização, menor custo relativo",
      "Suporte de médicos do trabalho",
      "Credenciar médicos de qualquer local do País que acessam prontuário médico-ocupacional único, on line",
      "Atualização e geração de documentos on line (PPRA – PCMSO – Prontuários - etc)",
      "Ter um Médico Coordenador sem custo adicional (opcional)",
      "Documentos emitidos com sua logomarca",
      "Relatórios de ativo – passivo – faturas – etc",
      "Integração instantânea PPRA – PCMSO – RA – PPP",
      "Emissão de documentos atualizados em tempo real, on line",
    ],
  },
  {
    id: "empresas",
    title: "Empresas",
    items: [
      "E-mails automáticos com informações antecipadas de vencimentos de exames",
      "Consulta a exames vencidos e a vencer, on line",
      "Consultas e emissão de documentos em tempo real (PPRA PCMSO ASOs RA PPP), quadro funcional ativo e inativo etc",
      "Atualização de dados cadastrais on line",
    ],
  },
  {
    id: "recursos",
    title: "Recursos do Sistema",
    items: [
      "Monitoramento e controle de lançamento de informações: Prontuário médico, cadastros, agendamentos, etc",
      "Integração total entre: PPRA PCMSO RA PPP",
      "Estatísticas: exames realizados, a vencer e vencidos, Nº de funcionários ativos e inativos nas empresas etc",
      "Relatórios administrativo e financeiro (controle automático de faturas pagas e não pagas, despesas, Nº e tipos de exames realizados, etc)",
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
      {/* Hero */}
      <section className="bg-background border-b border-outline-variant">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-2xl font-bold text-primary mb-4 leading-snug">
              Bem-vindo ao Portal OcupacionalMED
            </h1>
            <p className="text-sm leading-relaxed text-on-background">
              Seja bem-vindo ao primeiro site de Segurança e Medicina Ocupacional a
              disponibilizar informações e gerenciamento das áreas de medicina e
              segurança do trabalho, administrativo-financeira, de forma totalmente
              integrada, em tempo real, pela internet. Profissionais e empresas agora
              têm acesso a consultas, atualizações, emissão de documentos e
              relatórios, de qualquer lugar e a qualquer hora. Venha fazer parte de
              nossa rede.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-surface border border-outline-variant rounded-xl overflow-hidden
                         shadow-sm hover:shadow-md hover:bg-primary-container
                         transition-all duration-200 group"
            >
              {/* Card header bar */}
              <div className="bg-secondary px-5 py-3">
                <h2 className="text-sm font-bold text-on-secondary">
                  {service.title}
                </h2>
              </div>

              {/* Card body */}
              <ul className="px-5 py-4 space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[13px] text-on-surface leading-relaxed">
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
