
import { WhoAmI, Training, Contact } from '@/src/types/About';
import WhoAmICard from './WhoAmI';
import TrainingCard from './Training';
import ContactCard from './Contact';

interface GenericCardContentProps {
  card: WhoAmI | Training | Contact;
}

const AboutCardContent: React.FC<GenericCardContentProps> = ({ card }) => {
  const renderContent = () => {
    switch (card.type) {
      case 'whoami':
        return <WhoAmICard card={card as WhoAmI} />;
      case 'training':
        return <TrainingCard card={card as Training} />;
      case 'contact':
        return <ContactCard card={card as Contact} />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col-reverse sm:flex-row p-3 min-h-max h-full relative'>
          {renderContent()}
    </div>
  );
};

export default AboutCardContent;