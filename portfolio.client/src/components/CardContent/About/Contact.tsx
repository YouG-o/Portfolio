
import { Contact } from '@/src/types/About';

interface ContactCardProps {
  card: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ card }) => {
  return (
    <>
      <p className="text-lg">{card.name}</p>
    </>
  );
};

export default ContactCard;