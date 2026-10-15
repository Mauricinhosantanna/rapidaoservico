import { useState } from 'react';
import { ArrowUpRight, Car, ChevronDown, GraduationCap, Heart, House, Monitor, PawPrint, Search, Wrench, Zap } from 'lucide-react';
import { APP_URL, services } from '@/data/rapidao';

const icons = { home: House, zap: Zap, wrench: Wrench, monitor: Monitor, car: Car, paw: PawPrint, heart: Heart, graduation: GraduationCap };
export function Services() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const normalized = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const results = services.filter(service => normalized([service.title, ...service.items].join(' ')).includes(normalized(query)));
  return <section className="services-section section-rail" id="servicos">
    <div className="section-intro"><div><span className="eyebrow">UM SÓ LUGAR. MUITAS SOLUÇÕES.</span><h2>Precisou? <span>Tem no Rapidão.</span></h2></div><p>Da sua casa ao seu negócio, encontre profissionais<br className="desktop-break" /> para cuidar do que importa para você.</p></div>
    <div className="services-toolbar"><span><strong>+ de 100 profissões</strong> para facilitar sua vida</span><label className="service-search"><Search size={18} /><span className="sr-only">Buscar serviço</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Qual serviço você procura?" /></label></div>
    <div className="service-grid">{results.map(service => {
      const Icon = icons[service.icon as keyof typeof icons];
      const isExpanded = expanded === service.title;
      return <article className={`service-card category-${service.color}`} key={service.title}>
        <div className="service-card-top"><div className="category-icon"><Icon size={25} /></div><ArrowUpRight size={20} /></div>
        <h3>{service.title}</h3><p>{service.description}</p>
        <div className="service-preview">{service.items.slice(0, 3).join(' · ')}</div>
        <button onClick={() => setExpanded(isExpanded ? null : service.title)} aria-expanded={isExpanded}>Ver especialidades <ChevronDown size={16} className={isExpanded ? 'rotate-icon' : ''} /></button>
        {isExpanded && <div className="service-expanded"><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a href={APP_URL}>Encontrar no aplicativo <ArrowUpRight size={15} /></a></div>}
      </article>;
    })}</div>
    {results.length === 0 && <div className="empty-services"><Search size={28} /><h3>Não encontramos essa especialidade por aqui.</h3><p>Tente outro termo ou consulte todas as opções no aplicativo.</p><button onClick={() => setQuery('')}>Mostrar todos os serviços</button><a href={APP_URL}>Consultar o aplicativo <ArrowUpRight size={16} /></a></div>}
    <div className="services-footnote"><span>Não encontrou o que procura? Há ainda mais especialidades no app.</span><a href={APP_URL}>Explorar todos os serviços <ArrowUpRight size={17} /></a></div>
  </section>;
}
