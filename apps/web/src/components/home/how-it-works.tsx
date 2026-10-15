import { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck, UserRound, UsersRound } from 'lucide-react';
import { APP_URL, customerSteps, professionalSteps } from '@/data/rapidao';

export function HowItWorks() {
  const [audience, setAudience] = useState<'cliente' | 'profissional'>('cliente');
  const isCustomer = audience === 'cliente';
  return <section className="how-section" id="como-funciona"><div className="section-rail">
    <div className="how-intro"><span className="eyebrow">SIMPLES DO COMEÇO AO FIM</span><h2>Menos complicação.<br /><span>Mais solução.</span></h2><p>Você escolhe o serviço. A gente facilita a conexão.</p></div>
    <div className="audience-tabs" role="tablist" aria-label="Como funciona para cada público"><button id="customer-tab" role="tab" aria-selected={isCustomer} aria-controls="audience-panel" tabIndex={isCustomer ? 0 : -1} onClick={() => setAudience('cliente')} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { setAudience('profissional'); document.getElementById('professional-tab')?.focus(); } }}><UserRound size={18} /> Sou cliente</button><button id="professional-tab" role="tab" aria-selected={!isCustomer} aria-controls="audience-panel" tabIndex={!isCustomer ? 0 : -1} onClick={() => setAudience('profissional')} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { setAudience('cliente'); document.getElementById('customer-tab')?.focus(); } }}><UsersRound size={18} /> Sou profissional</button></div>
    <div id="audience-panel" role="tabpanel" aria-labelledby={isCustomer ? 'customer-tab' : 'professional-tab'} className="how-panel">
      <div className="steps">{(isCustomer ? customerSteps : professionalSteps).map((step, index) => <div className="step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
      <aside className="trust-panel"><div className="trust-shield"><ShieldCheck size={44} /></div><span className="eyebrow">TRANQUILIDADE EM CADA CONEXÃO</span><h3>{isCustomer ? 'Sua segurança vem em primeiro lugar.' : 'Seu talento merece mais oportunidades.'}</h3><ul>{(isCustomer ? ['Profissionais com cadastro e documentos verificados', 'Avaliações reais de outros clientes', 'Pagamentos realizados pelo aplicativo', 'Dados protegidos e suporte para ajudar'] : ['Seu serviço visível para novos clientes', 'Divulgação no app e nas redes do Rapidão', 'Gestão de solicitações, recebimentos e avaliações', 'Liberdade para escolher quando e como trabalhar']).map(item => <li key={item}><Check size={18} /><span>{item}</span></li>)}</ul><a href={APP_URL} className="button button-orange">{isCustomer ? 'Quero encontrar um profissional' : 'Quero oferecer meus serviços'} <ArrowUpRight size={17} /></a><p className="trust-note">Cadastro, negociação e acompanhamento direto no app.</p></aside>
    </div>
  </div></section>;
}
