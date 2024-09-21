
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Resource } from 'i18next';

import "@/src/Sass/globals.scss";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import TranslationsProvider from "@/src/components/TranslationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
  resources
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
  resources: Resource;
}>) {
  const i18nNamespaces = ["Header"];

  return (
    <html lang={locale} className="h-screen">
      <body className={`m-auto font-sans overflow-auto bg-custom-gradient animate-gradient bg-[length:400%_400%] bg-fixed sm:px-10 px-5 py-6 h-full ${inter.className}`}>
        <TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
          <Header />
          <main className="h-full">
            {children}
          </main>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}