import { WhoAmI, Training, Contact } from '../../types/About';

interface GenericCardContentProps {
  card: WhoAmI | Training | Contact;
}

const AboutCardContent: React.FC<GenericCardContentProps> = ({ card }) => {
  return (
    <div className='divBoss flex p-3 min-h-max h-full relative'>
      <div className='flex flex-col w-full justify-between'>
        <div className='flex flex-col gap-1'>
          <p className="text-lg">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCardContent;