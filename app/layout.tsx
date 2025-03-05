// app/layout.tsx

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
      <body className={`${sora.variable} bg-[#032720] text-white`}>
        {children}
      </body>
    </html>
  );
}
