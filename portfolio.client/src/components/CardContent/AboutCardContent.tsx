import Image from 'next/image';
import { WhoAmI, Training, Contact } from '../../types/About';

interface GenericCardContentProps {
  card: WhoAmI | Training | Contact;
}

const AboutCardContent: React.FC<GenericCardContentProps> = ({ card }) => {
  interface TechCategoryProps {
    title: string;
    techList: string[];
  }

  const TechCategory: React.FC<TechCategoryProps> = ({ title, techList }) => (
    <div>
      <p>{title} :</p>
      <div className="stack-icons flex gap-2">
        {techList.map((tech) => (
          <Image key={tech} src={`/images/skillicons/${tech}.svg`} title={tech} alt={tech} width={40} height={40} />
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (card.type) {
      case 'whoami':
        return (
          <div className='flex '>
            <div className='flex-1 mr-20 flex flex-col gap-10'>
              <p className="text-lg" dangerouslySetInnerHTML={{ __html: card.introduction.replace(/\n/g, '<br />') }} />
              <p className="text-lg" dangerouslySetInnerHTML={{ __html: card.hobbies.replace(/\n/g, '<br />') }} />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
              <p className="text-lg">Les technologies avec lesquelles j&apos;ai déjà travaillé :</p>
              <div className='ml-2'>
                <TechCategory title="Langages" techList={card.myStack.languages} />
                <TechCategory title="Front-End" techList={card.myStack.frontEnd} />
                <TechCategory title="Back-End" techList={card.myStack.backEnd} />
                <TechCategory title="Base de données" techList={card.myStack.dataBases} />
                <TechCategory title="Outils et autres" techList={card.myStack.tools} />
              </div>
            </div>
          </div>
        );
      case 'training':
        return (
          <>
            <p className="text-lg">{card.name}</p>
          </>
        );
      case 'contact':
        return (
          <>
            <p className="text-lg">{card.name}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex p-3 min-h-max h-full relative'>
      <div className='flex flex-col w-full justify-between'>
        <div className='flex flex-col gap-1 min-h-max h-full items-center justify-center'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutCardContent;