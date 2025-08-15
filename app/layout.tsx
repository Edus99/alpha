import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALPAALE — Servicios Mercantiles",
  description: "Validamos la certeza legal que impulsa tus decisiones financieras.",
  metadataBase: new URL("https://www.alpaale.com.mx"),
  openGraph: {
    title: "ALPAALE — Servicios Mercantiles",
    description: "Gestoría registral, certificados, verificaciones y estudios.",
    url: "https://www.alpaale.com.mx",
    siteName: "ALPAALE",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
