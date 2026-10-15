import { ArrowRight, ArrowUpRight, CalendarDays, ShieldCheck, Sparkles } from 'lucide-react';
import { APP_URL, GOOGLE_PLAY_URL, LOGO_URL } from '@/data/rapidao';

export function Hero() {
  return <section className="hero" id="inicio">
    <div className="launch-strip"><CalendarDays size={15} /><span>ESTAMOS CHEGANDO EM NOVEMBRO DE 2026</span><span className="strip-divider" /><span>Sua vida mais fácil começa aqui.</span><a href={APP_URL}>Garanta seu cadastro <ArrowUpRight size={14} /></a></div>
    <div className="hero-content">
      <div className="hero-eyebrow"><span className="orange-dot" /> A CONEXÃO CERTA. NA HORA CERTA.</div>
      <h1>O serviço que você precisa.<br /><span>O profissional que resolve.</span></h1>
      <p>Uma plataforma que conecta quem procura aos melhores profissionais do mercado.<br className="desktop-break" /> Mais praticidade para sua vida. Mais oportunidades para quem faz.</p>
      <div className="hero-actions"><a href={APP_URL} className="button button-orange">Aproveite e cadastre-se <ArrowUpRight size={19} /></a><a href="#como-funciona" className="hero-secondary">Conheça o Rapidão <ArrowRight size={18} /></a></div>
      <div className="hero-store"><a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer" className="store-badge"><span className="store-badge-top">Baixe o app na</span><span className="store-badge-name">Google Play</span></a></div>
      <div className="hero-scene">
        <img src={LOGO_URL} alt="Rapidão Serviços: facilitando sua vida, conectando pessoas e profissionais na cidade" fetchPriority="high" />
        <div className="scene-caption"><ShieldCheck size={24} /><span>Gente que precisa.<br /><strong>Gente que faz acontecer.</strong></span></div>
        <div className="launch-sticker"><Sparkles size={20} /><span>LANÇAMENTO<br /><strong>NOV 2026</strong></span></div>
      </div>
      <div className="hero-bottom"><span>DO DIA A DIA ÀQUELE PROJETO ESPECIAL</span><span>Todos os serviços. Um só lugar. <ArrowRight size={16} /></span></div>
    </div>
  </section>;
}
