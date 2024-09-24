
import { useLanguage } from './i18nProvider';
import FranceFlag from "@/public/icons/France_Flag.svg";
import UKFlag from "@/public/icons/UK_Flag.svg";

export default function LanguageChanger() {
  const { changeLanguage } = useLanguage();

  return (
    <div className="flex space-x-4">
      <button onClick={() => changeLanguage('fr')} className="h-6 w-6 cursor-pointer overflow-hidden flex items-center justify-center">
        <FranceFlag />
      </button>
      <button onClick={() => changeLanguage('en')} className="h-6 w-6 cursor-pointer overflow-hidden flex items-center justify-center">
        <UKFlag />
      </button>
    </div>
  );
}