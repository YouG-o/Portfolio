'use client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAbout } from '@/src/utils/api';
import Image from "next/image";
import PSLogo from "@/public/images/playstation_logo.png";
import PageTransition from "@/src/components/PageTransition";
import Loader from "@/src/app/[locale]/loading";

const HomePage = () => {
  const router = useRouter();
  const { t, ready } = useTranslation('HomePage');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefetchAboutData = async () => {
      try {
        const aboutData = await getAbout();
        localStorage.setItem('aboutData', JSON.stringify(aboutData));
      } catch (error) {
        console.error('Error prefetching about data:', error);
      }
    };

    if (ready) {
      prefetchAboutData();
      router.prefetch('/about');
      setIsLoading(false);
    }
  }, [router, ready]);

  if (isLoading || !ready) {
    return <Loader />;
  }

  return (
    <PageTransition href="/about?Card=0" duration={0}>
      <p className="absolute top-1/4 text-center">{t("welcomeMessage")}</p>
      <Image src={PSLogo} width={300} height={300} alt="Playstation Logo" />
    </PageTransition>
  );
};

export default HomePage;