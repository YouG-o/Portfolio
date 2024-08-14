'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import HeaderModal from '@/src/components/HeaderModal/HeaderModal';

import SettingsIcon from "@/src/assets/icons/settings-svgrepo-com.svg";
import InfoIcon from "@/src/assets/icons/info.svg";
import FranceFlag from "@/src/assets/icons/France_Flag.svg";
import UKFlag from "@/src/assets/icons/UK_Flag.svg";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname === path;

  const [time, setTime] = useState<string>("");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(!isSettingsModalOpen);
  };

  const toggleInfoModal = () => {
    setIsInfoModalOpen(!isInfoModalOpen);
  };

  return (
    <header className='flex text-white'>
      <nav className='flex justify-between w-full'>
        <ul className='flex space-x-10 mx-10'>
          <li>
            <Link href="/about" className={`${isActive("/about") ? 'font-bold' : ''}`}>
              A propos
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`${isActive("/projects") ? 'font-bold' : ''}`}>
              Projets
            </Link>
          </li>
        </ul>
        <div id="headerIcons" className='relative flex space-x-10'>
          <div className="relative">
            <SettingsIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleSettingsModal}
            />
            <HeaderModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} className="top-8 left-1/2 transform -translate-x-1/2">
              <div className='flex space-x-4'>
                <FranceFlag className="h-6 w-6 cursor-pointer" />
                <UKFlag className="h-6 w-6 cursor-pointer" />
              </div>
            </HeaderModal>
          </div>
          <div className="relative">
            <InfoIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleInfoModal}
            />
            <HeaderModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} className="top-8 left-1/2 transform -translate-x-1/2">
              <p>Info Modal</p>
            </HeaderModal>
          </div>
          <span>{time}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
