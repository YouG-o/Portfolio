
import Image from 'next/image';
import { useTranslation } from 'react-i18next';


import SkillIcons from '@/src/components/SkillIcons';
import { Training } from '@/src/types/About';
import { Locale } from '@/src/types/Types';

interface TrainingCardProps {
  card: Training;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ card }) => {
  const { i18n } = useTranslation();
  const locale = i18n.language as Locale;

  return (
    <div className='flex flex-col h-full justify-center overflow-auto sm:overflow-y-auto'>
      {card.trainings.map((training, index) => (
        <div className='m-4 flex flex-col gap-2' key={index}>
          <p className="text-xl font-semibold">{training.title[locale]}</p>
          <div className='flex gap-2'>
            {training.schoolIcon && (
              <Image src={training.schoolIcon} alt={training.school} width={25} height={25} />
            )}
            <p className="">{training.date} : {training.length[locale]}</p>
          </div>
          <p className="text-lg">{training.description[locale]}</p>
          <SkillIcons techList={training.skills} iconSize={30} />
        </div>
      ))}
    </div>
  );
};

export default TrainingCard;