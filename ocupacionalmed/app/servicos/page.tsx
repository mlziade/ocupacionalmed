import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços — OcupacionalMED",
  description:
    "Conheça todos os serviços da rede OcupacionalMED para parceiros, empresas e recursos do sistema de saúde ocupacional.",
};

type Item = { text: React.ReactNode };

const services: {
  id: string;
  title: string;
  summary: React.ReactNode;
  image: string;
  imageAlt: string;
  items: Item[];
}[] = [
  {
    id: "parceiros",
    title: "Parceiros",
    image: "/images/parceiros.webp",
    imageAlt: "Parceiros OcupacionalMED",
    summary: (
      <>
        Para clínicas e profissionais de medicina do trabalho que desejam integrar a rede com
        custo variável e suporte completo.
      </>
    ),
    items: [
      { text: <>Despesa <strong>apenas quando utilizar</strong> o sistema</> },
      { text: <>Maior utilização, <strong>menor custo relativo</strong></> },
      { text: <>Suporte de <strong>médicos do trabalho</strong></> },
      { text: <>Credenciamento de médicos de qualquer localidade do país, com acesso ao <strong>prontuário médico-ocupacional único</strong>, on-line</> },
      { text: <>Atualização e geração de documentos on-line (<strong><em>PPRA</em></strong>, <strong><em>PCMSO</em></strong>, Prontuários etc.)</> },
      { text: <><strong>Médico Coordenador</strong> sem custo adicional (opcional)</> },
      { text: <>Documentos emitidos com a <strong>sua logomarca</strong></> },
      { text: <>Relatórios de ativo, passivo, faturas etc.</> },
      { text: <>Integração instantânea: <strong><em>PPRA</em> – <em>PCMSO</em> – <em>RA</em> – <em>PPP</em></strong></> },
      { text: <>Emissão de documentos <strong>atualizados em tempo real</strong>, on-line</> },
    ],
  },
  {
    id: "empresas",
    title: "Empresas",
    image: "/images/empresas.webp",
    imageAlt: "Empresas OcupacionalMED",
    summary: (
      <>
        Para departamentos de <strong>RH</strong> e saúde que precisam acompanhar exames, manter
        registros atualizados e emitir documentos com agilidade.
      </>
    ),
    items: [
      { text: <><strong>E-mails automáticos</strong> com antecedência sobre <strong>vencimentos de exames</strong></> },
      { text: <>Consulta a exames <strong>vencidos e a vencer</strong>, on-line</> },
      { text: <>Consulta e emissão de documentos em <strong>tempo real</strong> (<strong><em>PPRA</em></strong>, <strong><em>PCMSO</em></strong>, <strong><em>ASOs</em></strong>, <strong><em>RA</em></strong>, <strong><em>PPP</em></strong>), com quadro funcional ativo e inativo</> },
      { text: <>Atualização de <strong>dados cadastrais</strong> on-line</> },
    ],
  },
  {
    id: "recursos",
    title: "Recursos do Sistema",
    image: "/images/recursos-do-sistema.webp",
    imageAlt: "Recursos do Sistema OcupacionalMED",
    summary: (
      <>
        Uma plataforma integrada com monitoramento, estatísticas e relatórios para gestão
        completa da saúde ocupacional.
      </>
    ),
    items: [
      { text: <>Monitoramento e controle de lançamento de informações: <strong>prontuário médico</strong>, cadastros, agendamentos etc.</> },
      { text: <>Integração total entre: <strong><em>PPRA</em></strong>, <strong><em>PCMSO</em></strong>, <strong><em>RA</em></strong> e <strong><em>PPP</em></strong></> },
      { text: <>Estatísticas: <strong>exames realizados, a vencer e vencidos</strong>; número de funcionários ativos e inativos por empresa</> },
      { text: <>Relatórios <strong>administrativos e financeiros</strong>: controle automático de faturas pagas e em aberto, despesas e tipos de exames realizados</> },
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <h1
            className="text-3xl font-black text-on-primary"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Serviços
          </h1>
          <p className="text-sm text-on-primary/80 mt-2">
            Soluções integradas de saúde e segurança ocupacional para parceiros e empresas.
          </p>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 space-y-12">
        {services.map((service, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={service.id}
              className="rounded-2xl border border-outline-variant bg-surface shadow-sm overflow-hidden"
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  imageLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image — flush against card edge */}
                <div className="relative w-full lg:w-2/5 flex-shrink-0 min-h-72 lg:min-h-[420px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-primary/15" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 p-7 lg:p-10 flex flex-col justify-center">
                  <div
                    className="inline-block self-start bg-secondary text-on-secondary text-lg font-black px-5 py-2 rounded-xl mb-5"
                    style={{ fontFamily: "Lato, Arial, sans-serif" }}
                  >
                    {service.title}
                  </div>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {service.summary}
                  </p>
                  <ul className="space-y-2.5">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[13px] text-on-surface leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-black text-on-primary"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              Pronto para fazer parte da rede?
            </p>
            <p className="text-sm text-on-primary/80 mt-0.5">
              Entre em contato e saiba como integrar a OcupacionalMED ao seu negócio.
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
