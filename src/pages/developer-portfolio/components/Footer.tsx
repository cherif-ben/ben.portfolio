import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const contactEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || 'benfaroukoucherif@gmail.com';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/';
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/';

  const footerNavItems = [
    { id: 'hero', labelKey: 'developer.footer.navItems.home' },
    { id: 'about', labelKey: 'developer.footer.navItems.about' },
    { id: 'services', labelKey: 'developer.footer.navItems.services' },
    { id: 'portfolio', labelKey: 'developer.footer.navItems.portfolio' },
    { id: 'skills', labelKey: 'developer.footer.navItems.skills' },
    { id: 'contact', labelKey: 'developer.footer.navItems.contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ben Cherif <span className="text-blue-400">Faroukou</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              {t('developer.footer.about')}
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-github-fill text-lg sm:text-xl"></i>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg sm:text-xl"></i>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-dribbble-fill text-lg sm:text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t('developer.footer.navigation')}</h4>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t('developer.footer.contactTitle')}</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-blue-400 mt-1 flex-shrink-0"></i>
                <span className="break-all">{contactEmail}</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-blue-400 flex-shrink-0"></i>
                <span>+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {t('footer.poweredBy')}
          </a>
        </div>
      </div>
    </footer>
  );
}
