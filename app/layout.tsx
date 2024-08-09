
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/Sass/globals.scss";
import Header from "@/components/Header/Header";

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
    <html lang="fr">
      <body className={`bg-blue-600 px-10 py-6 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
