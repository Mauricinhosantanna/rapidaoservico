import { BadgeCheck, Lock, MessageSquareText, Wallet } from 'lucide-react';
import { APP_URL } from '@/data/rapidao';

const points = [
  {
    icon: Wallet,
    title: 'Pagamentos dentro da plataforma',
    text: 'Todas as transações acontecem pelo aplicativo. Nada de combinar valores por fora: cada etapa fica registrada e acompanhada.',
  },
  {
    icon: Lock,
    title: 'Proteção para os dois lados',
    text: 'Cliente e prestador contam com a mesma segurança em cada serviço, do início ao recebimento.',
  },
  {
    icon: BadgeCheck,
    title: 'Profissionais verificados',
    text: 'Os cadastros passam por validação para construir uma rede mais confiável para todos.',
  },
  {
    icon: MessageSquareText,
    title: 'Avaliações reais',
    text: 'As avaliações de quem já contratou ajudam a manter a qualidade e a transparência da plataforma.',
  },
];

export function Security() {
  return (
    <section className="security-section section-rail" id="seguranca" aria-labelledby="security-title">
      <div className="security-intro">
        <span className="eyebrow">PAGAMENTOS DENTRO DA PLATAFORMA</span>
        <h2 id="security-title">
          Segurança que protege<br />
          <span>quem contrata e quem presta.</span>
        </h2>
        <p>
          No Rapidão, todos os pagamentos são feitos dentro da plataforma. Assim o processo fica
          seguro tanto para o cliente quanto para o prestador — com registro, acompanhamento e
          tranquilidade do começo ao fim.
        </p>
      </div>
      <div className="security-grid">
        {points.map((point) => (
          <div className="security-point" key={point.title}>
            <span className="security-icon">
              <point.icon />
            </span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </div>
        ))}
      </div>
      <div className="security-cta">
        <span>Cadastre-se e faça parte de uma rede mais segura.</span>
        <a href={APP_URL} className="button button-blue">
          Cadastre-se / Entrar
        </a>
      </div>
    </section>
  );
}
