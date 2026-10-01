import i18n from '../i18n';

const DEFAULT_CONTACT_EMAIL = 'benfaroukoucherif@gmail.com';
const PLACEHOLDER_EMAIL = 'ton-adresse@email.com';

export function getContactEmail() {
  const envEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL?.trim();
  return envEmail || DEFAULT_CONTACT_EMAIL;
}

export function getFormSubmitEndpoint(contactEmail: string) {
  return `https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`;
}

function formatFormSubmitError(rawMessage: string) {
  const message = rawMessage.toLowerCase();

  if (message.includes('activate') || message.includes('verify') || message.includes('confirm')) {
    return i18n.t('formSubmit.notActive');
  }

  if (message.includes('email')) {
    return i18n.t('formSubmit.invalidEmail');
  }

  return i18n.t('formSubmit.sendFailed');
}

export async function sendContactMessage(fields: Record<string, string>) {
  const contactEmail = getContactEmail();

  if (!contactEmail || contactEmail === PLACEHOLDER_EMAIL) {
    throw new Error(i18n.t('formSubmit.missingEmail'));
  }

  const payload = { ...fields };
  const source = payload._source || 'Portfolio';

  if (payload.message) {
    const sentAt = new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'short'
    }).format(new Date());

    payload.message = [
      `Nouveau lead depuis: ${source}`,
      `Date d'envoi: ${sentAt}`,
      '',
      'Message:',
      payload.message
    ].join('\n');
  }

  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  formData.append('_captcha', 'false');
  const replyTo = fields.email || fields.email_expediteur || '';
  formData.append('_replyto', replyTo);

  const response = await fetch(getFormSubmitEndpoint(contactEmail), {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData
  });

  const result = await response.json().catch(() => null);
  const apiMessage = result?.message || '';

  if (!response.ok || (typeof result?.success !== 'undefined' && !result.success)) {
    throw new Error(formatFormSubmitError(apiMessage || 'request_failed'));
  }
}
