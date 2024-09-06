'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import data from '@/src/data/about.json';
import { WhoAmI, Training, Contact } from '../../types/About';
import Card from '@/src/components/Card/Card';
import CardContent from '@/src/components/CardContent/CardContent';

// Type guards
function isWhoAmI(obj: any): obj is WhoAmI {
  return obj.type === 'whoami';
}

function isTraining(obj: any): obj is Training {
  return obj.type === 'training';
}

function isContact(obj: any): obj is Contact {
  return obj.type === 'contact';
}

// Filter and assert types
const aboutData = (data as any[]).filter((item): item is WhoAmI | Training | Contact => {
  return isWhoAmI(item) || isTraining(item) || isContact(item);
});

const AboutComponent = () => {
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
        {aboutData.map((card, index) => (
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
            <CardContent card={aboutData[selectedCardIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutComponent;