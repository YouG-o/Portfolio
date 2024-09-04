
'use client';
import Image from 'next/image';

import { Projects } from '../../types/Projects';
import { WhoAmI, Training, Contact } from '../../types/About';

interface CardProps {
  card: Projects | WhoAmI | Training | Contact;
  isSelected: boolean;
  onClick: () => void;
  disableHover: boolean;
}

const Card: React.FC<CardProps> = ({ card, isSelected, onClick, disableHover }) => {
  return (
    <>
        <div onClick={onClick}>
          <div className={`w-36 h-36 rounded-xl border border-gray-300 p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${isSelected ? 'h-48 w-48 shadow-lg' : disableHover ? '' : 'hover:h-48 hover:w-48 hover:shadow-lg'}`}>
            <Image src={card.icon} alt={card.name} className="w-24 h-24 mb-4" width={100} height={100} />
          </div>
          <p className="text-white text-center mt-2">{card.name}</p>
        </div>
    </>
  );
};

export default Card;