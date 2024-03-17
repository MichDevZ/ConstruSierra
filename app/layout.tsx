import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jsonLD = 
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.construsierra.es",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "Reformas integrales en Madrid",
    "query-input": "required name=search_term_string"
  },
  "logo": "logo.png"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <body className={inter.className} style={{margin: 0}}>{children}</body>
    </html>
  );
}
