import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { customerFaqs, generalFaqs, materials, professionalFaqs, WHATSAPP_URL } from '@/data/rapidao';
import { ContactForm } from '@/components/home/contact-form';

const groups = [
  { title: 'Para clientes', items: customerFaqs },
  { title: 'Para profissionais', items: professionalFaqs },
  { title: 'Dúvidas gerais', items: generalFaqs },
];

export function Faq() {
  return <section className="faq-section section-rail" id="duvidas"><div className="faq-heading"><span className="eyebrow">PODE PERGUNTAR</span><h2>Vamos tirar<br />suas dúvidas?</h2><p>O primeiro passo fica mais fácil<br />quando tudo está claro.</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Fale com a gente no WhatsApp <ArrowUpRight size={16} /></a><details className="materials"><summary>Veja os encartes do Rapidão</summary><ul>{materials.map(material => <li key={material.url}><a href={material.url} target="_blank" rel="noreferrer">{material.title} <ArrowUpRight size={14} /></a></li>)}</ul></details><div className="faq-contact"><span className="eyebrow">OU ENVIE UMA MENSAGEM</span><h3>Fale com a gente</h3><p>Preencha o formulário e entraremos em contato.</p><ContactForm /></div></div><div className="faq-list">{groups.map(group => <div className="faq-group" key={group.title}><h3 className="faq-group-title">{group.title}</h3>{group.items.map(faq => <details key={faq.question}><summary>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>)}</div></section>;
}
