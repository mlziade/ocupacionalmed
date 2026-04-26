"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(
      now.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    );
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-outline-variant shadow-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Brand + nav */}
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo_ocupacionalmed_transparente.png"
              alt="OcupacionalMED"
              width={140}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-bold transition-colors duration-150 ${
                  pathname === href
                    ? "text-primary"
                    : "text-on-background hover:text-primary"
                }`}
                style={{ fontFamily: "Lato, Arial, sans-serif" }}
              >
                {label}
              </Link>
            ))}
            <a
              href="#"
              className="text-sm font-bold px-4 py-2 bg-primary text-on-primary rounded-lg
                         hover:bg-primary-container hover:text-on-primary-container
                         transition-colors duration-150"
              style={{ fontFamily: "Lato, Arial, sans-serif" }}
            >
              Acesso ao Sistema
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-background p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Date welcome bar */}
        {date && (
          <div className="py-1 border-t border-outline-variant text-[11px] text-on-surface-variant">
            {date} &mdash; Bem-vindo ao Portal OcupacionalMED
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-bold ${
                pathname === href ? "text-primary" : "text-on-background"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="#"
            className="text-sm font-bold px-4 py-2 bg-primary text-on-primary rounded-lg text-center
                       hover:bg-primary-container hover:text-on-primary-container transition-colors duration-150"
          >
            Acesso ao Sistema
          </a>
        </div>
      )}
    </header>
  );
}
