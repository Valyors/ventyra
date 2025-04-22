// app/layout.tsx

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import { GA_TRACKING_ID } from './lib/gtag'
import SchemaMarkup from './components/SchemaMarkup';

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ventyra | Formation en Cybersécurité pour Entreprises",
  description: "Formation certifiée Qualiopi en cybersécurité pour sensibiliser vos collaborateurs aux risques cyber. 7 modules pratiques pour réduire les menaces informatiques.",
  keywords: "formation cybersécurité, sensibilisation cyber, sécurité informatique, formation qualiopi, risques cyber, phishing, OSINT, mots de passe, sécurité à distance, formation présentiel cybersécurité, formation présentielle",
  authors: [{ name: "Ventyra" }],
  creator: "Ventyra",
  publisher: "Ventyra",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Ventyra | Formation en Cybersécurité pour Entreprises",
    description: "Formation certifiée Qualiopi en cybersécurité pour sensibiliser vos collaborateurs aux risques cyber. 7 modules pratiques pour réduire les menaces informatiques.",
    url: "https://ventyra.fr",
    siteName: "Ventyra",
    locale: "fr_FR",
    type: "website",
    images: [{
      url: '/ventyra-og-image.jpg',
      width: 1200,
      height: 630,
      alt: "Ventyra Formation Cybersécurité"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventyra | Formation en Cybersécurité pour Entreprises",
    description: "Formation certifiée Qualiopi en cybersécurité pour sensibiliser vos collaborateurs aux risques cyber.",
    images: ['/ventyra-twitter-image.jpg'],
  },
  icons: {
    icon: '/ventyra-logo.png',
    apple: '/ventyra-apple-icon.png',
  },
  alternates: {
    canonical: "https://ventyra.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
        <SchemaMarkup />
      </head>
      <body className={`${sora.variable} bg-[#032720] text-white`}>
        {children}
      </body>
    </html>
  );
}
