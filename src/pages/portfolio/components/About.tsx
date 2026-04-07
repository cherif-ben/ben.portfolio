
import React from 'react';
import aboutImage from '../../../assets/about.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Clarabelle NIH-NAH OTIKPO OLOFI"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-lg">
                <i className="ri-graduation-cap-line text-3xl mb-2 block"></i>
                <p className="font-semibold">developpeur</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Passionné du <span className="text-blue-500">developpement des logiciels</span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionné par le développement de logiciels, j’aime transformer des idées en solutions concrètes en créant 
                des applications efficaces, intuitives et bien structurées. Mon approche allie maîtrise technique, créativité et volonté constante d’apprendre et d’améliorer mes compétences.              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Mon parcours académique et mes expériences professionnelles m’ont permis de développer un ensemble unique de compétences techniques et créatives, allant de la conception d’interfaces web modernes au développement d’applications fonctionnelles, en passant par l’intégration de solutions backend performantes.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-camera-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Développeur Full-Stack</h4>
                  <p className="text-sm text-gray-600">Développeur full-stack capable de concevoir, développer et maintenir à la fois la partie visible d’une application (front-end) et son fonctionnement interne (back-end).</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-global-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Designer</h4>
                  <p className="text-sm text-gray-600">Designer, un professionnel créatif qui conçoit des interfaces et des visuels esthétiques, fonctionnels et adaptés aux besoins des utilisateurs.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-target-line text-blue-600 mr-2"></i>
                  Career Objective
                </h4>
                <p className="text-gray-700">
                  À la recherche d’une opportunité d’apprentissage pour mettre en pratique mes compétences en developpement et en en dedign, tout en continuant de progresser dans un environnement professionnel dynamique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
