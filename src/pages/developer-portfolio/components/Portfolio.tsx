import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: t('developer.portfolio.items.ecommerce.title'),
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20clean%20product%20showcase%2C%20shopping%20cart%20interface%2C%20professional%20online%20store%20design%2C%20contemporary%20web%20application%2C%20minimalist%20layout%20with%20product%20images&width=800&height=600&seq=project-ecommerce&orientation=landscape',
      description: t('developer.portfolio.items.ecommerce.description'),
      tags: t('developer.portfolio.items.ecommerce.tags', { returnObjects: true }),
      link: '#'
    },
    {
      title: t('developer.portfolio.items.saas.title'),
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20SaaS%20dashboard%20interface%20on%20computer%20screen%2C%20analytics%20charts%20and%20graphs%2C%20professional%20business%20application%2C%20clean%20data%20visualization%2C%20contemporary%20web%20app%20design%2C%20minimalist%20user%20interface&width=800&height=600&seq=project-saas&orientation=landscape',
      description: t('developer.portfolio.items.saas.description'),
      tags: t('developer.portfolio.items.saas.tags', { returnObjects: true }),
      link: '#'
    },
    {
      title: t('developer.portfolio.items.creative.title'),
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20design%20on%20screen%2C%20artistic%20layout%20with%20image%20gallery%2C%20modern%20web%20design%20showcase%2C%20contemporary%20digital%20portfolio%2C%20minimalist%20creative%20presentation%2C%20professional%20design%20work%20display&width=800&height=600&seq=project-portfolio&orientation=landscape',
      description: t('developer.portfolio.items.creative.description'),
      tags: t('developer.portfolio.items.creative.tags', { returnObjects: true }),
      link: '#'
    },
    {
      title: t('developer.portfolio.items.mobile.title'),
      category: 'mobile',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20design%20on%20smartphone%20screen%2C%20modern%20application%20UI%2C%20clean%20mobile%20user%20experience%2C%20contemporary%20app%20design%2C%20professional%20mobile%20interface%2C%20minimalist%20app%20layout&width=800&height=600&seq=project-mobile&orientation=landscape',
      description: t('developer.portfolio.items.mobile.description'),
      tags: t('developer.portfolio.items.mobile.tags', { returnObjects: true }),
      link: '#'
    },
    {
      title: t('developer.portfolio.items.corporate.title'),
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20on%20laptop%20screen%2C%20modern%20business%20website%20design%2C%20clean%20company%20homepage%2C%20contemporary%20web%20presence%2C%20minimalist%20corporate%20layout%2C%20professional%20business%20site&width=800&height=600&seq=project-corporate&orientation=landscape',
      description: t('developer.portfolio.items.corporate.description'),
      tags: t('developer.portfolio.items.corporate.tags', { returnObjects: true }),
      link: '#'
    },
    {
      title: t('developer.portfolio.items.branding.title'),
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%2C%20logo%20designs%20and%20brand%20guidelines%2C%20modern%20graphic%20design%20presentation%2C%20contemporary%20branding%20materials%2C%20professional%20identity%20system%2C%20minimalist%20design%20elements&width=800&height=600&seq=project-branding&orientation=landscape',
      description: t('developer.portfolio.items.branding.description'),
      tags: t('developer.portfolio.items.branding.tags', { returnObjects: true }),
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', labelKey: 'developer.portfolio.filters.all' },
    { id: 'web', labelKey: 'developer.portfolio.filters.web' },
    { id: 'mobile', labelKey: 'developer.portfolio.filters.mobile' },
    { id: 'design', labelKey: 'developer.portfolio.filters.design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('developer.portfolio.titlePart1')}<span className="text-blue-500">{t('developer.portfolio.titlePart2')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            {t('developer.portfolio.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(filter.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base"
                  >
                    {t('developer.portfolio.viewProject')}
                  </a>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
