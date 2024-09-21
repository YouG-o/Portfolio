
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import FranceFlag from "@/public/icons/France_Flag.svg";
import UKFlag from "@/public/icons/UK_Flag.svg";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = locale;
    }
    const newPathname = segments.join('/');
    const searchParamsString = new URLSearchParams(query).toString();
    const newUrl = `${newPathname}?${searchParamsString}`;
    router.push(newUrl);
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
};

export default LanguageSwitcher;