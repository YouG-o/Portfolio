
'use client';
import { useState } from 'react';

import aboutData from '@/src/data/about.json';
import Card from '@/src/components/Card/Card';

const About = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-full py-11 border-3 border-red-500">
      <section className='flex gap-4'>
        <Card
          card={aboutData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
        <Card
          card={aboutData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
        <Card
          card={aboutData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
        <Card
          card={aboutData[0]}
          isSelected={selectedCardIndex === 0}
          onClick={() => handleCardClick(0)}
          disableHover={selectedCardIndex !== null}
        />
      </section>
    </div>
  );
};

export default About;