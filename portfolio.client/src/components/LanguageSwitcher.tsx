
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

import FranceFlag from "@/public/icons/France_Flag.svg";
import UKFlag from "@/public/icons/UK_Flag.svg";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="flex space-x-4">
      <FranceFlag 
        className="h-6 w-6 cursor-pointer" 
        onClick={() => changeLanguage('fr')}
      />
      <UKFlag 
        className="h-6 w-6 cursor-pointer" 
        onClick={() => changeLanguage('en')}
      />
    </div>
  );
}