import { ArrowUpRight, BadgePercent, Gift, Wallet } from 'lucide-react';
import { APP_URL } from '@/data/rapidao';

export function Benefits() {
  return <section className="benefits-section" aria-labelledby="benefits-title"><div className="benefits-inner">
    <div className="benefits-heading"><span className="eyebrow">CHEGUE JUNTO NO LANÇAMENTO</span><h2 id="benefits-title">Quem chega primeiro<br />aproveita mais.</h2><a href={APP_URL}>Quero fazer parte <ArrowUpRight size={17} /></a></div>
    <div className="benefit-item"><div className="benefit-icon"><BadgePercent /></div><h3>Promoções especiais</h3><p>Oportunidades de lançamento para encontrar o serviço que você precisa.</p></div>
    <div className="benefit-item"><div className="benefit-icon"><Gift /></div><h3>Bônus para começar</h3><p>Benefícios especiais para os primeiros serviços contratados.</p></div>
    <div className="benefit-item"><div className="benefit-icon"><Wallet /></div><h3>Cashback no app</h3><p>Cadastre-se e acompanhe as campanhas que fazem seu dinheiro render mais.</p></div>
  </div><p className="benefits-note">Benefícios sujeitos às regras, à disponibilidade e às condições de cada campanha no aplicativo.</p></section>;
}
