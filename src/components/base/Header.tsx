import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../base/LanguageToggle';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'hero', labelKey: 'nav.home', icon: 'ri-home-line' },
    { id: 'about', labelKey: 'nav.about', icon: 'ri-user-line' },
    { id: 'projects', labelKey: 'nav.projects', icon: 'ri-folder-line' },
    { id: 'skills', labelKey: 'nav.skills', icon: 'ri-tools-line' },
    { id: 'contact', labelKey: 'nav.contact', icon: 'ri-mail-line' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-blue-900 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer"
          >
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              Ben Cherif <span className="text-blue-400">Faroukou</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 text-white hover:bg-blue-600 whitespace-nowrap cursor-pointer"
              >
                <i className={`${item.icon} text-sm`}></i>
                <span className="font-medium">{t(item.labelKey)}</span>
              </button>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 text-white hover:bg-white/10 cursor-pointer"
          >
            <i className={`text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-xl mt-4 p-6 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-blue-600 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="font-medium">{t(item.labelKey)}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
