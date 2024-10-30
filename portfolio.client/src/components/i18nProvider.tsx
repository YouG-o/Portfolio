'use client';
import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/src/i18n';
import { createInstance, Resource } from 'i18next';

const instance = createInstance();

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
  const i18n = useMemo(() => {
    initTranslations(locale, namespaces, resources);
    return instance;
  }, [locale, namespaces, resources]);

  const [currentLocale, setCurrentLocale] = useState(locale);

  const changeLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    setCurrentLocale(newLocale);
  };

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