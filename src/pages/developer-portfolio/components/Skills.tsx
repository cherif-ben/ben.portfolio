import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      titleKey: 'developer.skills.categories.frontend',
      icon: 'ri-layout-line',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 85 }
      ]
    },
    {
      titleKey: 'developer.skills.categories.backend',
      icon: 'ri-server-line',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 88 },
        { name: 'GraphQL / REST API', level: 92 }
      ]
    },
    {
      titleKey: 'developer.skills.categories.design',
      icon: 'ri-palette-line',
      skills: [
        { name: 'Figma / Adobe XD', level: 93 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Photoshop / Illustrator', level: 87 },
        { name: 'Prototypage', level: 91 }
      ]
    },
    {
      titleKey: 'developer.skills.categories.devops',
      icon: 'ri-tools-line',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 82 },
        { name: 'CI/CD', level: 80 },
        { name: 'AWS / Vercel', level: 85 }
      ]
    }
  ];

  const tools = [
    { name: 'React', icon: 'ri-reactjs-line', color: 'text-blue-500' },
    { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-600' },
    { name: 'TypeScript', icon: 'ri-code-s-slash-line', color: 'text-blue-600' },
    { name: 'Figma', icon: 'ri-pencil-ruler-2-line', color: 'text-purple-500' },
    { name: 'Git', icon: 'ri-git-branch-line', color: 'text-orange-600' },
    { name: 'Docker', icon: 'ri-ship-line', color: 'text-blue-400' },
    { name: 'MongoDB', icon: 'ri-database-2-line', color: 'text-green-500' },
    { name: 'AWS', icon: 'ri-cloud-line', color: 'text-yellow-600' }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('developer.skills.titlePart1')}<span className="text-blue-500">{t('developer.skills.titlePart2')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t('developer.skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className={`${category.icon} text-white text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t(category.titleKey)}</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm sm:text-base text-blue-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">{t('developer.skills.toolsTitle')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <i className={`${tool.icon} ${tool.color} text-3xl sm:text-4xl`}></i>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
