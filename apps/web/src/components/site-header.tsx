import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { APP_URL, LOGO_URL } from '@/data/rapidao';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <a className="brand" href="#inicio" aria-label="Rapidão Serviços — início"><img src={LOGO_URL} alt="Logo Rapidão Serviços" /><span>RAPIDÃO<small>SERVIÇOS</small></span></a>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#como-funciona" onClick={() => setOpen(false)}>Como funciona</a>
        <a href="#profissionais" onClick={() => setOpen(false)}>Para profissionais</a>
        <a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas</a>
      </nav>
      <a className="button button-orange header-cta" href={APP_URL}>Cadastre-se / Entrar <ArrowUpRight size={17} /></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
