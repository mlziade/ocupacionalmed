import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OcupacionalMED — Rede de Segurança e Medicina Ocupacional",
  description:
    "Primeiro site de Segurança e Medicina Ocupacional a disponibilizar informações e gerenciamento das áreas de medicina e segurança do trabalho de forma totalmente integrada, em tempo real, pela internet.",
  keywords: [
    "medicina ocupacional",
    "saúde ocupacional",
    "PPRA",
    "PCMSO",
    "ASO",
    "segurança do trabalho",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
