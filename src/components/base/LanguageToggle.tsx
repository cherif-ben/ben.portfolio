import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <span className="text-xs text-gray-400 hidden sm:inline">
        {t('language.selectLang')}
      </span>
      <div className="flex bg-white/10 rounded-full p-1">
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            currentLang === 'fr'
              ? 'bg-white text-gray-900 shadow-lg'
              : 'text-white hover:bg-white/20'
          }`}
          aria-label="Français"
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            currentLang === 'en'
              ? 'bg-white text-gray-900 shadow-lg'
              : 'text-white hover:bg-white/20'
          }`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
