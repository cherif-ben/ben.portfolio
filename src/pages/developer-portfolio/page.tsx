import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from '../../components/base/LanguageToggle';

const navSections = ['hero', 'about', 'services', 'portfolio', 'skills', 'contact'];

export default function DeveloperPortfolio() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const getNavLabel = (section: string) => {
    const key = `developer.nav.${section}` as const;
    return t(key, section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-blue-600'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl sm:text-2xl font-bold cursor-pointer text-white"
            >
              Ben Cherif <span className="text-blue-200">Faroukou</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-medium transition-colors cursor-pointer capitalize text-white hover:text-blue-200 whitespace-nowrap"
                >
                  {getNavLabel(section)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-white`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 bg-blue-700 rounded-lg shadow-xl mt-2 mb-4">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-blue-800 transition-colors cursor-pointer capitalize font-medium whitespace-nowrap"
                >
                  {getNavLabel(section)}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
