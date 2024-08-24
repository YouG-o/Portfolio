'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import aboutData from '@/src/data/about.json';
import Card from '@/src/components/Card/Card';
import CardDetails from '@/src/components/CardDetails/CardDetails';

const About = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const openCard = searchParams.get('Card');

  useEffect(() => {
    if (openCard !== null) {
      setSelectedCardIndex(parseInt(openCard, 10));
    }
  }, [openCard]);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-full h-full py-11 border-3 border-red-500 flex flex-col">
      <section className="flex gap-4">
        {aboutData.map((project, index) => (
          <Card
            key={index}
            card={project}
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
            <CardDetails card={aboutData[selectedCardIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
