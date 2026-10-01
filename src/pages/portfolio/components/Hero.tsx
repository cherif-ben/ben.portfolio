import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      id="hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-gray-900 pt-16 lg:pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20workspace%20with%20laptop%2C%20camera%20equipment%2C%20marketing%20materials%2C%20clean%20minimalist%20office%20setup%2C%20natural%20lighting%2C%20neutral%20colors%2C%20sophisticated%20business%20environment%2C%20contemporary%20design%20elements&width=1920&height=1080&seq=hero-portfolio&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Ben<br />
            <span className="text-blue-400">{t('portfolio.hero.name')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            {t('portfolio.hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {t('portfolio.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              {t('portfolio.hero.discoverProfile')}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              {t('portfolio.hero.contactMe')}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  );
}
