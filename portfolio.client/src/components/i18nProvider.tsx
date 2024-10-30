
'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Resource, i18n as I18nInstance } from 'i18next';

import initTranslations from '@/src/i18n';

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}

interface LanguageContextProps {
  currentLocale: string;
  changeLanguage: (newLocale: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const I18nProvider = ({ children, locale, namespaces, resources }: I18nProviderProps) => {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [i18n, setI18n] = useState<I18nInstance | null>(null);

  useEffect(() => {
    const init = async () => {
      const { i18n: i18nInstance } = await initTranslations(locale, namespaces, resources);
      setI18n(i18nInstance);
    };
    init();
  }, [locale, namespaces, resources]);

  const changeLanguage = (newLocale: string) => {
    if (i18n) {
      i18n.changeLanguage(newLocale);
      setCurrentLocale(newLocale);
    }
  };

  if (!i18n) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={{ currentLocale, changeLanguage }}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within an I18nProvider');
  }
  return context;
};