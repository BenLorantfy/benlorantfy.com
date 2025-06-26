import type { Metadata } from "next";
import { Albert_Sans, Baloo_2, Montserrat } from "next/font/google";
import "./globals.css";

import { styleSheet } from "~/css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500"]
});

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  weight: ["400"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "benlorantfy.com",
  description: "Hey, I'm Ben 👋.  I build good software, and okay wooden furniture.  It's easy to use, accessible, maintainable, and reliable (The software, not the furniture).I also teach others how to do the same",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: styleSheet() }} />
      </head>
      <body className={`${albertSans.variable} ${baloo2.variable} ${montserrat.variable}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
