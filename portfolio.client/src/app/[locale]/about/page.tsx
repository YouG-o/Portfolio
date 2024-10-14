
'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
import { WhoAmI, Training, Contact } from '@/src/types/About';
import { getAbout } from '@/src/utils/api';
import Card from '@/src/components/Card';
import CardContent from '@/src/components/CardContent/CardContent';
import Loader from '@/src/app/[locale]/loading';

const About = () => {
  const [aboutData, setAboutData] = useState<(WhoAmI | Training | Contact)[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const openCard = searchParams.get('Card');

  useEffect(() => {
    const fetchAbout = async () => {
      setIsLoading(true);
      try {
        const cachedData = localStorage.getItem('aboutData');
        const cachedDataExpiry = localStorage.getItem('aboutDataExpiry');
        const now = new Date();
  
        if (cachedData && cachedDataExpiry && new Date(cachedDataExpiry) > now) {
          setAboutData(JSON.parse(cachedData));
          setIsLoading(false);
        } else {
          const data = await getAbout();
          setAboutData(data);
          localStorage.setItem('aboutData', JSON.stringify(data));
          localStorage.setItem('aboutDataExpiry', new Date(now.getTime() + 60 * 60 * 1000).toISOString());
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching about data:', error);
        setIsLoading(false);
      }
    };
  
    fetchAbout();
  }, []);

  useEffect(() => {
    if (openCard !== null) {
      setSelectedCardIndex(parseInt(openCard, 10));
    }
  }, [openCard]);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-full sm:h-full py-11 border-3 border-red-500 flex flex-col">
      <section className="flex flex-col sm:flex-row gap-4">
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
            className="sm:overflow-hidden bg-white bg-opacity-70 flex-grow mt-4 rounded-2xl p-4"
          >
            <CardContent card={aboutData[selectedCardIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;