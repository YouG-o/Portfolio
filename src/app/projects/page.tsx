'use client';
import { useState } from 'react';

import projectsData from '@/src/data/projects.json';
import Card from '@/src/components/Card/Card';
import CardDetails from '@/src/components/CardDetails/CardDetails';

const Projects = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-full h-full py-11 border-3 border-red-500 flex flex-col">
      <section className='flex gap-4'>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            card={project}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
            disableHover={selectedCardIndex !== null}
          />
        ))}
      </section>
      {selectedCardIndex !== null && (
          <CardDetails card={projectsData[selectedCardIndex]} />
      )}
    </div>
  );
};

export default Projects;