import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OcupacionalMED — Rede de Segurança e Medicina Ocupacional",
  description:
    "Portal de Segurança e Medicina Ocupacional com gerenciamento integrado das áreas de medicina e segurança do trabalho, administrativo-financeira, em tempo real, pela internet.",
  keywords: [
    "medicina ocupacional",
    "saúde ocupacional",
    "PPRA",
    "PCMSO",
    "ASO",
    "segurança do trabalho",
  ],
  icons: {
    icon: "/logo_ocupacionalmed_transparente.png",
    apple: "/logo_ocupacionalmed_transparente.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
