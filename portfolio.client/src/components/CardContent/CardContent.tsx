import { Projects } from '../../types/Projects';
import { WhoAmI, Training, Contact } from '../../types/About';
import ProjectCardContent from './ProjectCardContent';
import AboutCardContent from './AboutCardContent';

interface CardContentProps {
  card: Projects | WhoAmI | Training | Contact;
}

function isProject(card: Projects | WhoAmI | Training | Contact): card is Projects {
  return (card as Projects).stack !== undefined;
}

const CardContent: React.FC<CardContentProps> = ({ card }) => {
  return isProject(card) ? <ProjectCardContent card={card} /> : <AboutCardContent card={card} />;
};

export default CardContent;