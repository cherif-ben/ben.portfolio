import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../../../assets/about.jpg';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t('portfolio.about.title')}</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt={t('portfolio.hero.name')}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-lg">
                <i className="ri-graduation-cap-line text-3xl mb-2 block"></i>
                <p className="font-semibold">{t('portfolio.about.profession')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                {t('portfolio.about.subtitlePrefix')} <span className="text-blue-500">{t('portfolio.about.subtitleHighlight')}</span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('portfolio.about.paragraph1')}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('portfolio.about.paragraph2')}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-camera-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('portfolio.about.devTitle')}</h4>
                  <p className="text-sm text-gray-600">{t('portfolio.about.devDesc')}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-global-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('portfolio.about.designerTitle')}</h4>
                  <p className="text-sm text-gray-600">{t('portfolio.about.designerDesc')}</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-target-line text-blue-600 mr-2"></i>
                  {t('portfolio.about.careerObjective')}
                </h4>
                <p className="text-gray-700">
                  {t('portfolio.about.careerObjectiveText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
