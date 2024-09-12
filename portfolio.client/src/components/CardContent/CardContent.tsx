
import { Project } from '../../types/Project';
import { WhoAmI, Training, Contact } from '../../types/About';
import ProjectCardContent from './Projects/ProjectCardContent';
import AboutCardContent from './About/AboutCardContent';

interface CardContentProps {
  card: Project | WhoAmI | Training | Contact;
}

function isProject(card: Project | WhoAmI | Training | Contact): card is Project {
  return (card as Project).stack !== undefined;
}

const CardContent: React.FC<CardContentProps> = ({ card }) => {
  return isProject(card) ? <ProjectCardContent card={card} /> : <AboutCardContent card={card} />;
};

export default CardContent;