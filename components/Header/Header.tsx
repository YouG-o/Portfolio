
'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import SettingsIcon from "@/assets/icons/settings-svgrepo-com.svg"
import InfoIcon from "@/assets/icons/info.svg"

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname === path;

  return (
    <header className='flex text-white sst-font'>
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
        <div id="headerIcons" className='flex space-x-10'>
          <InfoIcon className="h-6 w-6" />
          <SettingsIcon className="h-6 w-6" />
        </div>
      </nav>
    </header>
  )
}

export default Header