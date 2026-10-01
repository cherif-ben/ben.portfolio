import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getContactEmail, sendContactMessage } from '../../../lib/contactForm';

export default function Contact() {
  const { t } = useTranslation();
  const contactEmail = getContactEmail();
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/cherif-ben';
  const gitlabUrl = import.meta.env.VITE_GITLAB_URL || 'https://gitlab.com/cherif-ben';
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/ben-faroukou-cherif';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      await sendContactMessage({
        nom: formData.name,
        email_expediteur: formData.email,
        entreprise: formData.company || 'Non renseignee',
        message: formData.message,
        _source: 'Portfolio',
        _subject: `Nouveau message portfolio de ${formData.name}`
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      const message = error instanceof Error ? error.message : t('form.errorDefault');
      setSubmitError(message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('portfolio.contact.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('portfolio.contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {t('portfolio.contact.getInTouch', 'Get in Touch')}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t('portfolio.contact.intro', "I'm actively seeking apprenticeship opportunities in communication and marketing. Let's discuss how my skills and passion can contribute to your team's success.")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contactInfo.email')}</h4>
                    <p className="text-gray-600">{contactEmail}</p>
                  </div>
                </div>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-linkedin-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('social.linkedin')}</h4>
                    <p className="text-gray-600 break-all">{linkedinUrl}</p>
                  </div>
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-github-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('social.github')}</h4>
                    <p className="text-gray-600 break-all">{githubUrl}</p>
                  </div>
                </a>
                <a
                  href={gitlabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-gitlab-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('social.gitlab')}</h4>
                    <p className="text-gray-600 break-all">{gitlabUrl}</p>
                  </div>
                </a>

                <div className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contactInfo.phone')}</h4>
                    <p className="text-gray-600">{t('portfolio.contact.phone')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <i className="ri-target-line text-blue-600 mr-2"></i>
                  {t('portfolio.contact.cta.title')}
                </h4>
                <p className="text-lg mb-6 opacity-90">
                  {t('portfolio.contact.cta.text')}
                </p>
                <div className="flex items-center">
                  <i className="ri-download-2-line mr-2"></i>
                  <span className="font-semibold">{t('portfolio.contact.cta.cv')}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('portfolio.contact.sendMessage')}</h3>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('portfolio.contact.formLabels.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder={t('portfolio.contact.formPlaceholders.fullName')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('portfolio.contact.formLabels.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder={t('portfolio.contact.formPlaceholders.email')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('portfolio.contact.formLabels.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm"
                    placeholder={t('portfolio.contact.formPlaceholders.message')}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {t('form.charCount', { count: formData.message.length })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      {t('portfolio.contact.form.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="ri-send-plane-line mr-2"></i>
                      {t('portfolio.contact.form.submit')}
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
                    <i className="ri-check-circle-line mr-2"></i>
                    {t('form.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center">
                    <i className="ri-error-warning-line mr-2"></i>
                    {submitError || t('form.errorDefault')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
