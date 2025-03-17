import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed w-full bg-[#1e295e] p-4 z-10">
      <div className="container flex justify-between items-center">
        <Link href='/'> 
          <Image
            src="/images/weLogo.png"
            alt="Logo"
            width={80}
            height={40}
          />
        </Link>
        <div className="space-x-4">
          <a
            href="#home"
            className={`text-white ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-white ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-white ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`text-white ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
