
'use client';
import { useState } from 'react';

import projectsData from '@/src/data/projects.json';
import Card from '@/src/components/Card/Card';

const Projects = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-full py-11 border-3 border-red-500">
      <section className='flex gap-4'>
        <Card
          card={projectsData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
        <Card
          card={projectsData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
        <Card
          card={projectsData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
        <Card
          card={projectsData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
      </section>
    </div>
  );
};

export default Projects;