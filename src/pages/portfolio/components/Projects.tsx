
import React from 'react';

export default function Projects() {
  // Images locales depuis /public/projects
  const projects = [
    {
      title: 'TaskFlow - Application de Gestion de Tâches',
      description: 'TaskFlow est une application de gestion de tâches qui permet de planifier les projets, organiser les priorités, suivre l\'avancement en temps réel et collaborer efficacement en équipe grâce à une interface simple et intuitive.',
      image: '/projet-taskflow.png',
      tags: ['Gestion de tâches', 'Productivité', 'Collaboration', 'Suivi de projet'],
      icon: 'ri-play-circle-line'
    },
    {
      title: 'BenResto - Application de Gestion du Cafétériat',
      description: 'BenResto est une application qui aide les cafés et restaurants à gérer les commandes, suivre les stocks, organiser les équipes et analyser les ventes quotidiennes via un tableau de bord clair.',
      image: '/projet-cafe.png',
      tags: ['Gestion de commandes', 'Restauration', 'Stock', 'Tableau de bord'],
      icon: 'ri-cup-line'
    },
    {
      title: 'Développement CMS',
      description: 'Conception et développement de systèmes de gestion de contenu personnalisés. Focus sur l\'expérience utilisateur et l\'optimisation des performances.',
      image: 'https://readdy.ai/api/search-image?query=Web%20development%20workspace%20with%20multiple%20monitors%20showing%20CMS%20interface%2C%20clean%20code%20editor%2C%20modern%20web%20development%20setup%2C%20professional%20programming%20environment%2C%20user%20interface%20design&width=600&height=400&seq=cms-development&orientation=landscape',
      tags: ['Développement Web', 'CMS', 'UX/UI', 'Technique'],
      icon: 'ri-code-line'
    },
    {
      title: 'Montage d\'Affiches Événementielles',
      description: 'Création et montage d\'affiches pour événements professionnels et culturels. Design graphique axé sur l\'impact visuel et la communication efficace.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20graphic%20design%20workspace%20with%20event%20posters%2C%20creative%20design%20tools%2C%20colorful%20marketing%20materials%2C%20print%20design%20layouts%2C%20professional%20branding%20elements%2C%20modern%20design%20studio&width=600&height=400&seq=poster-design&orientation=landscape',
      tags: ['Design Graphique', 'Communication Visuelle', 'Événementiel', 'Créativité'],
      icon: 'ri-image-2-line'
    },
    {
      title: 'Création de Logos',
      description: 'Développement d\'identités visuelles et création de logos pour diverses entreprises et projets. Focus sur la mémorabilité et l\'impact de marque.',
      image: 'https://readdy.ai/api/search-image?query=Logo%20design%20process%20showing%20sketches%2C%20digital%20design%20tools%2C%20brand%20identity%20elements%2C%20creative%20workspace%20with%20logo%20concepts%2C%20professional%20branding%20materials%2C%20design%20inspiration%20boards&width=600&height=400&seq=logo-creation&orientation=landscape',
      tags: ['Identité de Marque', 'Logo Design', 'Branding', 'Design Créatif'],
      icon: 'ri-palette-line'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Projets & Réalisations</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection de mes projets académiques et professionnels démontrant ma polyvalence créative
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className={`${project.icon} text-white text-xl`}></i>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Intéressé par mes réalisations ?</h3>
              <p className="text-lg mb-6 opacity-90">
                Découvrons ensemble comment mon expérience peut enrichir votre équipe
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Discutons de vos projets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
