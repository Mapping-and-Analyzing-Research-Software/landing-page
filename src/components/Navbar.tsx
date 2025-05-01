import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span
                className={`font-bold text-xl ${
                  scrolled ? 'text-white' : 'text-white'
                }`}
              >
                MARS
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks textColor={scrolled ? 'text-white' : 'text-white'} />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition duration-300 flex items-center">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 shadow-xl">
            <MobileNavLinks closeMenu={() => setIsOpen(false)} />
            <div className="pt-4">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition duration-300 flex justify-center items-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ textColor }: { textColor: string }) => {
  return (
    <>
      <a
        href="#features"
        className={`${textColor} hover:text-indigo-400 transition duration-300`}
      >
        Features
      </a>
      <a
        href="#audience"
        className={`${textColor} hover:text-indigo-400 transition duration-300`}
      >
        For Whom
      </a>
      <a
        href="#benefits"
        className={`${textColor} hover:text-indigo-400 transition duration-300`}
      >
        Benefits
      </a>
      <a
        href="#about"
        className={`${textColor} hover:text-indigo-400 transition duration-300`}
      >
        About
      </a>
      <a
        href="#team"
        className={`${textColor} hover:text-indigo-400 transition duration-300`}
      >
        Team
      </a>
      <a
        href="#api"
        className={`${textColor} hover:text-indigo-400 transition duration-300 flex items-center`}
      >
        API <ExternalLink size={14} className="ml-1" />
      </a>
      <a
        href="https://github.com/mars-project"
        className={`${textColor} hover:text-indigo-400 transition duration-300 flex items-center`}
      >
        <Github size={18} className="mr-1" /> GitHub
      </a>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <a
        href="#features"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
        onClick={closeMenu}
      >
        Features
      </a>
      <a
        href="#audience"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
        onClick={closeMenu}
      >
        For Whom
      </a>
      <a
        href="#benefits"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
        onClick={closeMenu}
      >
        Benefits
      </a>
      <a
        href="#about"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
        onClick={closeMenu}
      >
        About
      </a>
      <a
        href="#team"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
        onClick={closeMenu}
      >
        Team
      </a>
      <a
        href="#api"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium flex items-center"
        onClick={closeMenu}
      >
        API <ExternalLink size={14} className="ml-1" />
      </a>
      <a
        href="https://github.com/mars-project"
        className="text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium flex items-center"
        onClick={closeMenu}
      >
        <Github size={18} className="mr-1" /> GitHub
      </a>
    </>
  );
};

export default Navbar;
