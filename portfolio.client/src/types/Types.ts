
export interface PageParams {
  locale: string;
}

export type Locale = 'en' | 'fr';

export type TranslatedText = {
  [key in Locale]: string;
};