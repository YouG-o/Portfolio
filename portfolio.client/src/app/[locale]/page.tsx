// page.tsx
import Image from "next/image";
import PSLogo from "@/public/images/playstation_logo.png";
import PageTransition from "@/src/components/PageTransition";
import initTranslations from "@/src/i18n";
import { PageParams } from "@/src/types/Types";

interface HomePageProps {
  params: PageParams;
}

const HomePage = async ({ params: { locale } }: HomePageProps) => {
  const { t } = await initTranslations(locale, ["HomePage"]);

  return (
    <PageTransition href="/about?Card=0" duration={30}>
      <p className="absolute top-1/4 text-center">{t("welcomeMessage")}</p>
      <Image src={PSLogo} width={300} height={300} alt="Playstation Logo" />
    </PageTransition>
  );
};

export default HomePage;