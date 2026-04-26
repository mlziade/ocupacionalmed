import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
  { label: "Acesso ao Sistema", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-on-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p
              className="text-lg font-black leading-tight"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              OcupacionalMED
            </p>
            <p className="text-sm text-on-secondary/80 leading-relaxed">
              Rede de Segurança &amp; Medicina Ocupacional
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-1 w-8 h-8 flex items-center justify-center rounded bg-on-secondary/10
                         hover:bg-on-secondary/20 transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest text-on-secondary/60 mb-4"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              Links Rápidos
            </p>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-on-secondary/80 hover:text-on-secondary transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest text-on-secondary/60 mb-4"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              Contato
            </p>
            <address className="not-italic text-sm text-on-secondary/80 space-y-1 leading-relaxed">
              <p>Rua Vilela Tavares, nº 55</p>
              <p>Méier — Rio de Janeiro / RJ</p>
              <p>CEP 20275-220</p>
              <p className="pt-1">Tel: (21) 2289-3249</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-on-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-on-secondary/60">
          <p>
            &copy; {year} OcupacionalMED. Todos os direitos reservados.
          </p>
          <p>Desenvolvido com foco em saúde e segurança ocupacional.</p>
        </div>
      </div>
    </footer>
  );
}
