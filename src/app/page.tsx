// src/app/page.tsx
import Image from "next/image";
import PSLogo from "@/public/images/playstation_logo.png";
import PageTransition from "@/src/components/PageTransition/PageTransition";

const HomePage = () => {
  return (
    <PageTransition href="/about?Card=0" duration={30}>
      <p className="absolute top-1/4 text-center">Cliquez n&apos;importe où</p>
      <Image src={PSLogo} width={150} height={150} alt="Playstation Logo" />
    </PageTransition>
  );
};

export default HomePage;