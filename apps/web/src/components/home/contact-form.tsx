import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/rapidao';

// Versão estática (Hostinger): o formulário manda para o contato.php, na
// mesma pasta do site, que envia a mensagem por e-mail. Se o envio falhar,
// oferece o WhatsApp com o texto pronto.

type ContactResponse = {
	ok?: boolean;
	message?: string;
	errors?: Record<string, string>;
	error?: string;
};

const fieldLabels = {
	name: 'Nome',
	email: 'E-mail',
	phone: 'Telefone (opcional)',
	subject: 'Assunto',
	message: 'Mensagem',
} as const;

export function ContactForm() {
  const [data, setData] = useState<ContactResponse | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [whatsapp, setWhatsapp] = useState<string | null>(null);
  const errors = data?.errors ?? {};

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(['name', 'email', 'phone', 'subject', 'message', 'website']
      .map((key) => [key, String(form.get(key) ?? '').trim()]));

    const text = [`Olá! Sou ${body.name}.`, `Assunto: ${body.subject}`, body.message, `E-mail: ${body.email}`,
      body.phone ? `Telefone: ${body.phone}` : ''].filter(Boolean).join('\n');
    setWhatsapp(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`);

    setSubmitting(true);
    try {
      const response = await fetch('/contato.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = (await response.json().catch(() => ({}))) as ContactResponse;
      if (!response.ok && !result.errors && !result.error) result.error = 'Não foi possível enviar agora.';
      setData(result);
    } catch {
      setData({ error: 'Não foi possível enviar agora.' });
    } finally {
      setSubmitting(false);
    }
  }

  if (data?.ok) {
    return (
      <div className="contact-success" role="status">
        <CheckCircle2 size={28} />
        <div>
          <strong>Mensagem enviada!</strong>
          <span>{data.message ?? 'Recebemos sua mensagem. Em breve entraremos em contato.'}</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form" noValidate>
      {/* Armadilha para robôs: pessoas não veem este campo. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <div className="contact-row">
        <label className="contact-field">
          <span>{fieldLabels.name}</span>
          <input type="text" name="name" autoComplete="name" required disabled={isSubmitting} />
          {errors.name ? <small className="contact-error">{errors.name}</small> : null}
        </label>
        <label className="contact-field">
          <span>{fieldLabels.email}</span>
          <input type="email" name="email" autoComplete="email" required disabled={isSubmitting} />
          {errors.email ? <small className="contact-error">{errors.email}</small> : null}
        </label>
      </div>
      <div className="contact-row">
        <label className="contact-field">
          <span>{fieldLabels.phone}</span>
          <input type="tel" name="phone" autoComplete="tel" disabled={isSubmitting} />
        </label>
        <label className="contact-field">
          <span>{fieldLabels.subject}</span>
          <input type="text" name="subject" required disabled={isSubmitting} />
          {errors.subject ? <small className="contact-error">{errors.subject}</small> : null}
        </label>
      </div>
      <label className="contact-field">
        <span>{fieldLabels.message}</span>
        <textarea name="message" rows={4} required disabled={isSubmitting} />
        {errors.message ? <small className="contact-error">{errors.message}</small> : null}
      </label>
      <button type="submit" className="button button-orange contact-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        {!isSubmitting ? <Send size={18} /> : null}
      </button>
      {data?.error ? (
        <p className="contact-error contact-form-error">
          {data.error}{' '}
          {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer">Enviar pelo WhatsApp</a> : null}
        </p>
      ) : null}
    </form>
  );
}
