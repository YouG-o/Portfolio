import Link from 'next/link';
import Image from 'next/image';
import { CiLink } from 'react-icons/ci';

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
    <div className='divBoss flex p-3 min-h-max h-full relative'>
      <div className='flex flex-col w-1/2 justify-between'>
        <div className='flex flex-col gap-1'>
          <p className="text-lg">{card.description}</p>
          {isProject(card) && card.problems && (
            <p className="text-lg">{card.problems}</p>
          )}
        </div>
        <div className='flex justify-between'>
          {'stack' in card && card.stack && (
            <div className="stack-icons flex gap-2">
              {card.stack.map((tech) => (
                <Image key={tech} src={`/images/skillicons/${tech}.svg`} title={tech} alt={tech} width={40} height={40} />
              ))}
            </div>
          )}
          {'repository' in card && card.repository && (
            <Link href={card.repository} target="_blank">
              <Image src="/images/skillicons/github.svg" alt="GitHub repository" width={40} height={40} />
            </Link>
          )}
        </div>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        {isProject(card) && card.pictures && <Slider pictures={card.pictures} />}
      </div>
      {isProject(card) && card.deploymentUrl && (
        <Link href={card.deploymentUrl} target="_blank" className='absolute bottom-3 right-3 text-blue-500'>
          <CiLink size={40} />
        </Link>
      )}
    </div>
  );
};

export default CardContent;