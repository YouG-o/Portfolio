import { WhoAmI, Training, Contact } from '../../types/About';

interface GenericCardContentProps {
  card: WhoAmI | Training | Contact;
}

const AboutCardContent: React.FC<GenericCardContentProps> = ({ card }) => {
  const renderContent = () => {
    switch (card.type) {
      case 'whoami':
        return (
          <>
            <p className="text-lg">{card.description}</p>
            <p>{card.name}</p>
          </>
        );
      case 'training':
        return (
          <>
            <p className="text-lg">{card.description}</p>
          </>
        );
      case 'contact':
        return (
          <>
            <p className="text-lg">{card.description}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='divBoss flex p-3 min-h-max h-full relative'>
      <div className='flex flex-col w-full justify-between'>
        <div className='flex flex-col gap-1'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutCardContent;