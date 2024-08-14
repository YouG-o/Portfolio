
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/src/Sass/globals.scss";
import Header from "@/src/components/Layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Thomas",
  description: "Mon Portfolio personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-screen">
      <body className={`bg-customBg px-10 py-6 h-full ${inter.className}`}>
        <Header />
        <main className="h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
