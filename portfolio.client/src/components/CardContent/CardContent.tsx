
import Link from 'next/link';
import Image from 'next/image';

import { Projects } from '../../types/Projects';
import { About } from '../../types/About';
import Slider from '../Slider/Slider';

interface CardContentProps {
  card: Projects | About;
}

function isProject(card: Projects | About): card is Projects {
  return (card as Projects).stack !== undefined;
}

const CardContent: React.FC<CardContentProps> = ({ card }) => {
  return (
    <div className='divBoss flex p-3 min-h-max h-full'>
      <div className='flex flex-col w-1/2 justify-between'>
        <div className='h-full flex flex-col items-center'>
          <p className="text-lg">{card.description}</p>
          {isProject(card) && card.problems && (
            <p className="text-lg">{card.problems}</p>
          )}
        </div>
        <div className='flex justify-between'>
          {'stack' in card && card.stack && (
            <div className="stack-icons flex gap-2">
              {card.stack.map((tech) => (
                <Image key={tech} src={`/images/skillicons/${tech}.svg`} title={tech} alt={tech} width={50} height={50} />
              ))}
            </div>
          )}
          {'repository' in card && card.repository && (
            <Link href={card.repository} target="_blank">
              <Image src="/images/skillicons/github.svg" alt="GitHub repository" width={50} height={50} />
            </Link>
          )}
        </div>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        {isProject(card) && card.pictures && <Slider pictures={card.pictures} />}
      </div>
    </div>
  );
};

export default CardContent;