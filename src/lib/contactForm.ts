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
    return "Adresse FormSubmit non activee. Ouvrez le mail de confirmation FormSubmit et activez l'adresse de reception.";
  }

  if (message.includes('email')) {
    return "Adresse de reception invalide. Verifiez VITE_CONTACT_RECEIVER_EMAIL puis redemarrez l'application.";
  }

  return 'Envoi impossible pour le moment. Reessayez dans quelques instants.';
}

export async function sendContactMessage(fields: Record<string, string>) {
  const contactEmail = getContactEmail();

  if (!contactEmail || contactEmail === PLACEHOLDER_EMAIL) {
    throw new Error('missing_contact_email');
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
  // Keep FormSubmit default rendering to receive a regular email body.
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
