import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parceiros — OcupacionalMED",
  description:
    "Conheça os parceiros da rede OcupacionalMED — consultoria, engenharia e medicina do trabalho.",
};

const partners = [
  {
    name: "Owner Consulting",
    description: "Consultoria e Desenvolvimento de Software",
  },
  {
    name: "Associação Médica do Meyer LTDA",
    description: "Engenharia de Segurança e Medicina do Trabalho",
  },
];

export default function ParceirosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-background border-b border-outline-variant">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <h1 className="text-2xl font-bold text-primary">Parceiros</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Empresas que integram a rede OcupacionalMED
          </p>
        </div>
      </section>

      {/* Partners list */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm
                         hover:shadow-md hover:bg-primary-container transition-all duration-200"
            >
              <div className="bg-secondary px-5 py-3">
                <h2 className="text-sm font-bold text-on-secondary">
                  {partner.name}
                </h2>
              </div>
              <p className="px-5 py-4 text-[13px] text-on-surface leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
