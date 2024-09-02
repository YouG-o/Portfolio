import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/src/Sass/globals.scss";
import Header from "@/src/components/Layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-screen">
      <body className={`m-auto font-sans overflow-auto bg-custom-gradient animate-gradient bg-[length:400%_400%] bg-fixed px-10 py-6 h-full ${inter.className}`}>
        <Header />
        <main className="h-full">
          {children}
        </main>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </body>
    </html>
  );
}
