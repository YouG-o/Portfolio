
import Link from 'next/link';
import Image from 'next/image';
import { CiLink } from 'react-icons/ci';

import Slider from '@/src/components/Slider/Slider';
import SkillIcons from '@/src/components/SkillIcons/SkillIcons';
import { Project } from '@/src/types/Project';

interface ProjectCardContentProps {
  card: Project;
}

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ card }) => {
  return (
    <div className='flex p-3 h-full relative overflow-hidden'>
      <div className='flex flex-col w-1/2 h-full'>
        <div className='flex flex-col h-full'>
          <div className='flex-1 flex flex-col p-3 box-border justify-center overflow-hidden'>
            <div className='flex flex-col gap-1 overflow-y-auto'>
              <p className="text-lg">{card.description}</p>
              {card.problems && (
                <p className="text-lg">{card.problems}</p>
              )}
            </div>
          </div>
          <div className='flex justify-between overflow-hidden mt-auto py-2'>
            {card.stack && (
              <SkillIcons techList={card.stack} iconSize={40} />
            )}
            {card.repository && (
              <Link href={card.repository} target="_blank">
                <Image src="/images/skillicons/GitHub.svg" alt="GitHub repository" title='GitHub repository' width={40} height={40} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        {card.pictures && <Slider pictures={card.pictures} />}
      </div>
      {card.deploymentUrl && (
        <Link href={card.deploymentUrl} target="_blank" className='absolute bottom-3 right-3 text-blue-500'>
          <CiLink size={40} title="Deployment Link" />
        </Link>
      )}
    </div>
  );
};

export default ProjectCardContent;