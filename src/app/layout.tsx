import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Olívia Lourenço | Dev FullStack",
  description:
    "Portfólio de Olívia Lourenço, Desenvolvedora FullStack focada em sistemas robustos e interfaces de alta performance.",
  openGraph: {
    title: "Olívia Lourenço | Dev FullStack",
    description:
      "Portfólio de Olívia Lourenço com foco em Next.js, TypeScript e C# para criar sistemas robustos e interfaces de alta performance.",
    type: "website",
    locale: "pt_BR",
    siteName: "Olívia Portfólio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Olívia Lourenço | Dev FullStack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olívia Lourenço | Dev FullStack",
    description:
      "Portfólio de Olívia Lourenço com foco em Next.js, TypeScript e C#.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
