import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('portfolio.experience.items.directrice.title'),
      company: t('portfolio.experience.items.directrice.company'),
      period: t('portfolio.experience.items.directrice.period'),
      description: t('portfolio.experience.items.directrice.description'),
      skills: t('portfolio.experience.items.directrice.skills', { returnObjects: true }),
      icon: 'ri-user-star-line',
      color: 'bg-blue-500'
    },
    {
      title: t('portfolio.experience.items.cm.title'),
      company: t('portfolio.experience.items.cm.company'),
      period: t('portfolio.experience.items.cm.period'),
      description: t('portfolio.experience.items.cm.description'),
      skills: t('portfolio.experience.items.cm.skills', { returnObjects: true }),
      icon: 'ri-chat-3-line',
      color: 'bg-green-500'
    },
    {
      title: t('portfolio.experience.items.web.title'),
      company: t('portfolio.experience.items.web.company'),
      period: t('portfolio.experience.items.web.period'),
      description: t('portfolio.experience.items.web.description'),
      skills: t('portfolio.experience.items.web.skills', { returnObjects: true }),
      icon: 'ri-global-line',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t('portfolio.experience.title')}</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('portfolio.experience.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${exp.color} rounded-xl flex items-center justify-center mb-4`}>
                          <i className={`${exp.icon} text-white text-2xl`}></i>
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-4">{exp.company}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill: string, skillIndex: number) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`h-2 ${exp.color} group-hover:h-3 transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
