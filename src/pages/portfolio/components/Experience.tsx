
import React from 'react';

const experiences = [
  {
    title: 'Directrice Adjointe',
    company: 'Entreprise de Communication',
    period: '2023 - Présent',
    description: 'Supervision des équipes de communication, développement de stratégies marketing digitales et gestion de projets multimédias. Responsable de l\'amélioration des processus de communication interne et externe.',
    skills: ['Leadership', 'Stratégie Marketing', 'Gestion d\'équipe', 'Communication'],
    icon: 'ri-user-star-line',
    color: 'bg-blue-500'
  },
  {
    title: 'Community Manager',
    company: 'Agence Digitale',
    period: '2022 - 2023',
    description: 'Gestion complète des réseaux sociaux, création de contenu engageant, développement de communautés en ligne et analyse des performances. Augmentation de 150% de l\'engagement sur les plateformes sociales.',
    skills: ['Réseaux Sociaux', 'Création de Contenu', 'Analytics', 'Community Building'],
    icon: 'ri-chat-3-line',
    color: 'bg-green-500'
  },
  {
    title: 'Chef de Projet Web',
    company: 'Studio Créatif',
    period: '2021 - 2022',
    description: 'Direction de projets web de A à Z, coordination des équipes techniques et créatives, suivi des délais et budgets. Livraison réussie de plus de 20 projets web avec un taux de satisfaction client de 95%.',
    skills: ['Gestion de Projet', 'Développement Web', 'UX/UI', 'Coordination'],
    icon: 'ri-global-line',
    color: 'bg-purple-500'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Expérience Professionnelle</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience diversifiée en communication digitale, gestion de contenu et direction de projets
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon and company */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${exp.color} rounded-xl flex items-center justify-center mb-4`}>
                          <i className={`${exp.icon} text-white text-2xl`}></i>
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-4">{exp.company}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
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
                  
                  {/* Decorative element */}
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
