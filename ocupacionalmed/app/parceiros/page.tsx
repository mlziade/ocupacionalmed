import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Parceiros — OcupacionalMED",
  description:
    "Conheça os parceiros da rede OcupacionalMED — consultoria, engenharia e medicina do trabalho.",
};

const partners = [
  {
    name: "Owner Consulting",
    description: "Consultoria e Desenvolvimento de Software",
    logo: "/images/ownerconsulting.gif",
    logoWidth: 359,
    logoHeight: 75,
  },
  {
    name: "Associação Médica do Meyer LTDA",
    description: "Engenharia de Segurança e Medicina do Trabalho",
    logo: "/images/parceiro_meyer.gif",
    logoWidth: 296,
    logoHeight: 42,
  },
];

export default function ParceirosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <h1
            className="text-3xl font-black text-on-primary"
            style={{ fontFamily: "Lato, Arial, sans-serif" }}
          >
            Parceiros
          </h1>
          <p className="text-sm text-on-primary/80 mt-2">
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
                         hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="bg-secondary px-5 py-3">
                <h2
                  className="text-sm font-bold text-on-secondary"
                  style={{ fontFamily: "Lato, Arial, sans-serif" }}
                >
                  {partner.name}
                </h2>
              </div>
              <div className="px-5 py-6 flex flex-col items-center gap-4 flex-1">
                <div className="flex-1 flex items-end justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.logoWidth}
                    height={partner.logoHeight}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-[13px] text-on-surface-variant text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
