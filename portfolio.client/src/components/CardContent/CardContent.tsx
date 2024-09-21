import { Project } from '../../types/Project';
import { WhoAmI, Training, Contact } from '@/src/types/About';
import ProjectCardContent from './Projects/ProjectCardContent';
import AboutCardContent from './About/AboutCardContent';

interface CardContentProps {
  card: Project | WhoAmI | Training | Contact;
}

function isProject(card: Project | WhoAmI | Training | Contact): card is Project {
  return (card as Project).stack !== undefined;
}

const CardContent: React.FC<CardContentProps> = ({ card }) => {
  if (!card) {
    return null;
  }

  return isProject(card) ? <ProjectCardContent card={card} /> : <AboutCardContent card={card} />;
};

export default CardContent;