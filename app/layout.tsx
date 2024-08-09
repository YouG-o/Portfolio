
import type { Metadata } from "next";

import "@/Sass/globals.scss";


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
      <body>
        {children}
      </body>
    </html>
  );
}
