import { ArrowUpRight, BadgeCheck, Flag, MessagesSquare, Scale, ShieldCheck, Wallet } from 'lucide-react';
import { APP_URL } from '@/data/rapidao';

const reasons = [
  {
    icon: Wallet,
    title: 'Pagamento dentro da plataforma',
    text: 'Toda transação acontece pelo aplicativo. Nada de combinar valores por fora: cada etapa fica registrada e acompanhada.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança para os dois lados',
    text: 'Cliente e prestador contam com a mesma proteção em cada serviço, do início ao recebimento.',
  },
  {
    icon: BadgeCheck,
    title: 'Profissionais verificados',
    text: 'Os cadastros passam por validação para construir uma rede mais confiável para todos.',
  },
  {
    icon: MessagesSquare,
    title: 'Negociação direta, sem intermediários',
    text: 'Você conversa com o profissional, combina o serviço, o horário e o preço de forma transparente.',
  },
  {
    icon: Scale,
    title: 'Respeito à LGPD',
    text: 'Seus dados pessoais são tratados com responsabilidade, em conformidade com a Lei Geral de Proteção de Dados.',
  },
  {
    icon: Flag,
    title: 'Canal de denúncias e suporte',
    text: 'Encontrou algo errado? Há um canal dedicado para relatar problemas e manter a plataforma segura.',
  },
];

export function WhyRapidao() {
  return (
    <section className="why-section section-rail" id="por-que-rapidao" aria-labelledby="why-title">
      <div className="why-intro">
        <span className="eyebrow">POR QUE USAR O RAPIDÃO</span>
        <h2 id="why-title">
          Mais do que um serviço:<br />
          <span>uma rede segura para confiar.</span>
        </h2>
        <p>
          O Rapidão conecta quem precisa a quem faz, com transparência e cuidado em cada etapa.
          Da negociação ao pagamento, tudo acontece dentro da plataforma — para que clientes e
          profissionais se sintam protegidos do começo ao fim.
        </p>
      </div>
      <div className="why-grid">
        {reasons.map((reason) => (
          <div className="why-point" key={reason.title}>
            <span className="why-icon">
              <reason.icon />
            </span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="why-cta">
        <span>Faça parte de uma plataforma feita para proteger quem usa.</span>
        <a href={APP_URL} className="button button-blue">
          Cadastre-se / Entrar <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
