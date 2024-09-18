
import SkillIcons from '@/src/components/SkillIcons/SkillIcons';
import { WhoAmI } from '@/src/types/About';

interface WhoAmICardProps {
  card: WhoAmI;
}

const WhoAmICard: React.FC<WhoAmICardProps> = ({ card }) => {
  return (
    <div className='flex flex-col sm:flex-row h-full ml-5  overflow-y-auto sm:overflow-y-auto sm:gap-0 gap-10'>
      <div className='sm:flex-1 mr-20 flex flex-col gap-5 sm:gap-10 justify-center'>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: card.introduction.replace(/\n/g, '<br />') }} />
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: card.hobbies.replace(/\n/g, '<br />') }} />
      </div>
      <div className='sm:flex-1 flex flex-col gap-2 justify-center'>
        <p className="text-lg">Les technologies avec lesquelles j&apos;ai déjà travaillé :</p>
        <div className='ml-2'>
          <SkillIcons title="Langages" techList={card.myStack.languages} iconSize={40} />
          <SkillIcons title="Front-End" techList={card.myStack.frontEnd} iconSize={40} />
          <SkillIcons title="Back-End" techList={card.myStack.backEnd} iconSize={40} />
          <SkillIcons title="Base de données" techList={card.myStack.dataBases} iconSize={40} />
          <SkillIcons title="Outils et autres" techList={card.myStack.tools} iconSize={40} />
        </div>
      </div>
    </div>
  );
};

export default WhoAmICard;