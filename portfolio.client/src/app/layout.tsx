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
        <div className="wave fixed w-[200%] h-48 bg-white/25 rounded-t-[1000%_1000%_0_0] animate-wave opacity-80 bottom-0 left-0 -z-10"></div>
        <div className="wave fixed w-[200%] h-48 bg-white/25 rounded-t-[1000%_1000%_0_0] animate-waveReverse opacity-80 bottom-[-1.25em] left-0 -z-10"></div>
        <div className="wave fixed w-[200%] h-48 bg-white/25 rounded-t-[1000%_1000%_0_0] animate-waveReverseDelayed opacity-90 bottom-[-2.5em] left-0 -z-10"></div>
      </body>
    </html>
  );
}
