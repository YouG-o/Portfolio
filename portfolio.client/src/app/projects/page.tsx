'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import projectsData from '@/src/data/projects.json';
import Card from '@/src/components/Card/Card';
import CardContent from '@/src/components/CardContent/CardContent';

const Projects = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-full h-full py-11 border-3 border-red-500 flex flex-col">
      <section className='flex gap-4'>
        {projectsData.map((card, index) => (
          <Card
            key={index}
            card={card}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
            disableHover={selectedCardIndex !== null}
          />
        ))}
      </section>
      <AnimatePresence>
        {selectedCardIndex !== null && (
          <motion.div
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: '100%', height: '100%', opacity: 1 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-white flex-grow mt-4 rounded-2xl p-4"
          >
            <CardContent card={projectsData[selectedCardIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;