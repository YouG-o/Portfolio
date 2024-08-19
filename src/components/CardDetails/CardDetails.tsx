import { Projects } from '../../types/Projects';
import { About } from '../../types/About';

interface CardDetailsProps {
  card: Projects | About;
}

const CardDetails: React.FC<CardDetailsProps> = ({ card }) => {
  return (
    <div className="bg-white flex-grow mt-4 rounded-2xl p-4">
      <h2 className="text-xl font-bold">{card.name}</h2>
    </div>
  );
};

export default CardDetails;