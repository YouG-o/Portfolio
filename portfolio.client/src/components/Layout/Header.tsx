'use client';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import HeaderModal from '@/src/components/HeaderModal';
import Footer from '@/src/components/Layout/Footer';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation("header");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const isActive = (path: string): boolean => {
      const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
      return pathWithoutLang === path || pathname === path;
  };

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
        <ul className='flex sm:space-x-10 sm:mx-10 mx-3 space-x-4'>
          <li>
            <Link href="/about" className={`${isActive("/about") ? 'font-bold' : ''}`}>
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`${isActive("/projects") ? 'font-bold' : ''}`}>
              {t('projects')}
            </Link>
          </li>
        </ul>
        <div id="headerIcons" className='relative flex sm:space-x-10 space-x-4'>
          <div className="relative">
            <IoSettingsOutline
              className="h-6 w-6 cursor-pointer"
              onClick={toggleSettingsModal}
            />
            <HeaderModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} className="top-8 left-1/2 transform -translate-x-1/2">
              <LanguageSwitcher />
            </HeaderModal>
          </div>
          <div className="relative">
            <IoMdInformationCircleOutline
              className="h-6 w-6 cursor-pointer"
              onClick={toggleInfoModal}
            />
            <HeaderModal
              isOpen={isInfoModalOpen}
              onClose={() => setIsInfoModalOpen(false)}
              className="top-8 left-1/2 transform -translate-x-1/2 max-w-[90vw] w-auto"
            >
              <Footer as="div" className="whitespace-nowrap overflow-x-auto visible" />
            </HeaderModal>
          </div>
          <span>{time}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;