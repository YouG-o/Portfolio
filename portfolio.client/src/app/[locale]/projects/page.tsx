'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Card from '@/src/components/Card/Card';
import CardContent from '@/src/components/CardContent/CardContent';
import { getProjects } from '@/src/utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-full sm:h-full py-11 border-3 border-red-500 flex flex-col">
      <section className="flex flex-col sm:flex-row gap-4">
        {projects
          .sort((a: { customId: number }, b: { customId: number }) => a.customId - b.customId)
          .map((card, index) => (
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
            className="overflow-hidden bg-white bg-opacity-70 flex-grow mt-4 rounded-2xl p-4"
          >
            <CardContent card={projects[selectedCardIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;