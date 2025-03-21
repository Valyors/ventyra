// app/layout.tsx

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import { GA_TRACKING_ID } from './lib/gtag'

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ventyra",
  description: "Consulting cybersecurity",
  icons: {
    icon: '/ventyra-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </head>
      <body className={`${sora.variable} bg-[#032720] text-white`}>
        {children}
      </body>
    </html>
  );
}
