
import SkillIcons from '@/src/components/SkillIcons';
import { WhoAmI } from '@/src/types/About';
import { Locale } from '@/src/types/Types';
import { useTranslation } from 'react-i18next';

interface WhoAmICardProps {
  card: WhoAmI;
}

const WhoAmICard: React.FC<WhoAmICardProps> = ({ card }) => {
  const { i18n, t } = useTranslation("AboutPage");
  const locale = i18n.language as Locale;

  return (
    <div className='flex flex-col sm:flex-row h-full ml-5 overflow-y-auto sm:gap-0 gap-10'>
      <div className='sm:flex-1 sm:mr-20 flex flex-col gap-5 sm:gap-10 justify-center'>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: card.introduction[locale].replace(/\n/g, '<br />') }} />
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: card.hobbies[locale].replace(/\n/g, '<br />') }} />
      </div>
      <div className='sm:flex-1 flex flex-col gap-2 justify-center'>
        <p className="text-lg"> {t("whoami.Skills")}  </p>
        <div className='ml-2'>
          <SkillIcons title={t("whoami.Languages")} techList={card.myStack.languages} iconSize={40} />
          <SkillIcons title="Front-End" techList={card.myStack.frontEnd} iconSize={40} />
          <SkillIcons title="Back-End" techList={card.myStack.backEnd} iconSize={40} />
          <SkillIcons title={t("whoami.DB")} techList={card.myStack.dataBases} iconSize={40} />
          <SkillIcons title={t("whoami.Tools")} techList={card.myStack.tools} iconSize={40} />
        </div>
      </div>
    </div>
  );
};

export default WhoAmICard;