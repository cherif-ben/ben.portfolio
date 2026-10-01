import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20web%20developer%20portrait%20in%20modern%20office%2C%20confident%20pose%2C%20contemporary%20workspace%20with%20design%20tools%20and%20technology%2C%20natural%20lighting%2C%20professional%20business%20casual%20attire%2C%20clean%20minimalist%20background%2C%20creative%20tech%20professional%20environment&width=800&height=1000&seq=dev-about-img&orientation=portrait"
                alt="Ben Cherif Faroukou"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-500/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-purple-500/10 rounded-2xl -z-10"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('developer.about.titlePart1')}<span className="text-blue-500">{t('developer.about.titlePart2')}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              {t('developer.about.paragraph1')}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {t('developer.about.paragraph2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <i className="ri-code-s-slash-line text-white text-xl sm:text-2xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t('developer.about.devTitle')}</h3>
                <p className="text-sm sm:text-base text-gray-600">{t('developer.about.devDesc')}</p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <i className="ri-palette-line text-white text-xl sm:text-2xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t('developer.about.designTitle')}</h3>
                <p className="text-sm sm:text-base text-gray-600">{t('developer.about.designDesc')}</p>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer w-full sm:w-auto"
            >
              {t('developer.about.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
