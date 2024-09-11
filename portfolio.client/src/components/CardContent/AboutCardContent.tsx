import Image from 'next/image';
import { WhoAmI, Training, Contact } from '../../types/About';

interface GenericCardContentProps {
  card: WhoAmI | Training | Contact;
}

const AboutCardContent: React.FC<GenericCardContentProps> = ({ card }) => {
  interface TechCategoryProps {
    title?: string;
    techList: string[];
    iconSize: number;
  }

  const TechCategory: React.FC<TechCategoryProps> = ({ title, techList, iconSize }) => (
    <div>
      {title && <p>{title} :</p>}
      <div className="stack-icons flex gap-2">
        {techList.map((tech) => (
          <Image key={tech} src={`/images/skillicons/${tech}.svg`} title={tech} alt={tech} width={iconSize} height={iconSize} />
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
                <TechCategory title="Langages" techList={card.myStack.languages} iconSize={40} />
                <TechCategory title="Front-End" techList={card.myStack.frontEnd} iconSize={40} />
                <TechCategory title="Back-End" techList={card.myStack.backEnd} iconSize={40} />
                <TechCategory title="Base de données" techList={card.myStack.dataBases} iconSize={40} />
                <TechCategory title="Outils et autres" techList={card.myStack.tools} iconSize={40} />
              </div>
            </div>
          </div>
        );
      case 'training':
        return (
          <>
            {card.trainings.map((training, index) => (
              <div className='flex flex-col gap-2' key={index}>
                <p className="text-xl font-semibold">{training.title}</p>
                <div className='flex gap-2'>
                  {training.schoolIcon && (
                    <Image src={training.schoolIcon} alt={training.school} width={25} height={25} />
                  )}                  <p className="">{training.date} : {training.length}</p>
                </div>
                <p className="text-lg">{training.description}</p>
                <TechCategory techList={training.skills} iconSize={30} />
              </div>
            ))}
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