
import Image from 'next/image';
import SkillIcons from '@/src/components/SkillIcons/SkillIcons';
import { Training } from '@/src/types/About';

interface TrainingCardProps {
  card: Training;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ card }) => {
  return (
    <>
      {card.trainings.map((training, index) => (
        <div className='flex flex-col gap-2' key={index}>
          <p className="text-xl font-semibold">{training.title}</p>
          <div className='flex gap-2'>
            {training.schoolIcon && (
              <Image src={training.schoolIcon} alt={training.school} width={25} height={25} />
            )}
            <p className="">{training.date} : {training.length}</p>
          </div>
          <p className="text-lg">{training.description}</p>
          <SkillIcons techList={training.skills} iconSize={30} />
        </div>
      ))}
    </>
  );
};

export default TrainingCard;