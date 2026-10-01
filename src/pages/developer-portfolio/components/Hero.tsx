import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20minimal%20geometric%20pattern%20with%20subtle%20lines%20and%20dots%2C%20modern%20tech%20grid%20background%2C%20light%20gray%20and%20white%20colors%2C%20professional%20digital%20workspace%20aesthetic%2C%20clean%20minimalist%20design%20with%20depth&width=1920&height=1080&seq=dev-hero-bg-white-v1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-slate-900 text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                {t('developer.hero.badge')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ben Cherif <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Faroukou
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('developer.hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer shadow-lg"
              >
                {t('developer.hero.viewProjects')}
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                {t('developer.hero.contactMe')}
              </button>
            </div>
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <a href={import.meta.env.VITE_GITHUB_URL || 'https://github.com/cherif-ben'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-github-fill text-2xl"></i>
              </a>
              <a href={import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/ben-faroukou-cherif'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-dribbble-fill text-2xl"></i>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer">
                <i className="ri-behance-fill text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20working%20on%20modern%20laptop%20with%20multiple%20monitors%2C%20clean%20contemporary%20workspace%20with%20ambient%20lighting%2C%20minimalist%20office%20setup%2C%20coding%20on%20screen%20with%20colorful%20syntax%20highlighting%2C%20professional%20tech%20environment%2C%20modern%20aesthetic%20with%20plants%20and%20natural%20elements&width=800&height=1000&seq=dev-hero-main-v2&orientation=portrait"
                alt="Developer workspace"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-2xl border border-slate-200">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-check-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">50+</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">{t('developer.hero.stats.projects')}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-500 p-4 sm:p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-star-fill text-blue-500 text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold">5 {t('developer.hero.stats.years')}</p>
                  <p className="text-xs sm:text-sm font-medium">{t('developer.hero.stats.experience')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
