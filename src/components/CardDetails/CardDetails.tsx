
import Link from 'next/link';
import Image from 'next/image';

import { Projects } from '../../types/Projects';
import { About } from '../../types/About';

interface CardDetailsProps {
  card: Projects | About;
}

const CardDetails: React.FC<CardDetailsProps> = ({ card }) => {
  return (
    <div className='divBoss flex p-3 min-h-max h-full'>
      <div className='flex flex-col w-1/2 justify-between'>
        <h2 className="text-xl font-bold">{card.description}</h2>
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
        SLIDER
      </div>
    </div>
  );
};

export default CardDetails;