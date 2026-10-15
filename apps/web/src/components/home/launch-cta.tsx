import { ArrowUpRight, Sparkles } from 'lucide-react';
import { APP_URL } from '@/data/rapidao';

export function LaunchCta() {
  return <section className="launch-cta"><div className="section-rail cta-inner"><div><span className="eyebrow"><Sparkles size={16} /> LANÇAMENTO EM NOVEMBRO DE 2026</span><h2>Sua vida mais fácil.<br /><span>Seu próximo passo é Rapidão.</span></h2><p>Cadastre-se para ter acesso a promoções, bônus e cashback no aplicativo.</p></div><div className="cta-action"><a href={APP_URL} className="button button-orange">Cadastre-se / Entrar <ArrowUpRight size={20} /></a><span>Para clientes e prestadores de serviços.</span></div></div></section>;
}
