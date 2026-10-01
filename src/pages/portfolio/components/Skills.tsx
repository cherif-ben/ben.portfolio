import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      titleKey: 'portfolio.skills.categories.frontend',
      icon: 'ri-code-line',
      color: 'bg-blue-500',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 70 },
        { name: 'Next.js', level: 60 },
        { name: 'Angular', level: 60 }
      ]
    },
    {
      titleKey: 'portfolio.skills.categories.backend',
      icon: 'ri-server-line',
      color: 'bg-purple-500',
      skills: [
        { name: 'Java (bases)', level: 60 },
        { name: 'Spring boot', level: 60 },
        { name: 'notions d\'API', level: 60 }
      ]
    },
    {
      titleKey: 'portfolio.skills.categories.design',
      icon: 'ri-layout-line',
      color: 'bg-green-500',
      skills: [
        { name: 'UML', level: 92 },
        { name: 'MERISE', level: 88 }
      ]
    },
    {
      titleKey: 'portfolio.skills.categories.database',
      icon: 'ri-database-2-fill',
      color: 'bg-pink-500',
      skills: [
        { name: 'MySQL (notions)', level: 75 },
        { name: 'POSTGRESQL', level: 60 }
      ]
    },
    {
      titleKey: 'portfolio.skills.categories.systems',
      icon: 'ri-terminal-box-line',
      color: 'bg-blue-500',
      skills: [
        { name: 'Linux (commandes de base et avancées)', level: 75 }
      ]
    },
    {
      titleKey: 'portfolio.skills.categories.tools',
      icon: 'ri-settings-line',
      color: 'bg-purple-500',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'VS Code', level: 90 },
        { name: 'IntelliJ IDEA', level: 75 },
        { name: 'Figma (maquettes et prototypes)', level: 75 },
        { name: 'Canva (design rapide, visuels)', level: 75 }
      ]
    }
  ];

  const competencies = [
    'portfolio.skills.categories.frontend',
    'portfolio.skills.categories.backend',
    'portfolio.skills.categories.design',
    'portfolio.skills.categories.database',
    'portfolio.skills.categories.systems',
    'portfolio.skills.categories.tools'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('portfolio.skills.title')}</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('portfolio.skills.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <i className={`${category.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold">{t(category.titleKey)}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div 
                          className={`h-2 ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('portfolio.skills.keySkills')}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {competencies.map((competency, index) => (
                <span 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-all duration-200 cursor-default"
                >
                  {t(competency)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
