
import React, { useState } from 'react';
import { getContactEmail, sendContactMessage } from '../../../lib/contactForm';

export default function Contact() {
  const contactEmail = getContactEmail();
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/';
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      await sendContactMessage({
        nom: formData.name,
        email_expediteur: formData.email,
        sujet: formData.subject,
        message: formData.message,
        _source: 'Developer Portfolio',
        _subject: formData.subject || `Nouveau message portfolio de ${formData.name}`
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      const message = error instanceof Error ? error.message : "Impossible d'envoyer le message pour le moment. Reessayez.";
      setSubmitError(message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contactez-<span className="text-blue-500">moi</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Un projet en tête ? Discutons ensemble de la meilleure façon de le concrétiser
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 sm:p-10 lg:p-12 rounded-2xl text-white mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Travaillons ensemble</h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-50">
                Je suis toujours ouvert à de nouveaux projets et collaborations. N'hésitez pas à me contacter pour discuter de vos besoins.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-100">Email</p>
                    <p className="text-sm sm:text-base font-semibold break-all">{contactEmail}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-100">Téléphone</p>
                    <p className="text-sm sm:text-base font-semibold">+33 6 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-100">Localisation</p>
                    <p className="text-sm sm:text-base font-semibold">Paris, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-github-fill text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-100">GitHub</p>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold break-all hover:underline"
                    >
                      {githubUrl}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-github-fill text-xl sm:text-2xl"></i>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl sm:text-2xl"></i>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-dribbble-fill text-xl sm:text-2xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-xl sm:text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Décrivez votre projet..."
                ></textarea>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Maximum 500 caractères</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
                  <i className="ri-check-circle-line mr-2"></i>
                  Message envoye avec succes. Je vous repondrai rapidement.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center">
                  <i className="ri-error-warning-line mr-2"></i>
                  {submitError || "Impossible d'envoyer le message pour le moment. Reessayez."}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
