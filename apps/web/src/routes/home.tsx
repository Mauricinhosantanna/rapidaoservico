import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ServicesCarousel } from '@/components/home/services-carousel';
import { Hero } from '@/components/home/hero';
import { Benefits } from '@/components/home/benefits';
import { Services } from '@/components/home/services';
import { HowItWorks } from '@/components/home/how-it-works';
import { Security } from '@/components/home/security';
import { WhyRapidao } from '@/components/home/why-rapidao';
import { Professionals } from '@/components/home/professionals';
import { Faq } from '@/components/home/faq';
import { LaunchCta } from '@/components/home/launch-cta';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Rapidão Serviços | Lançamento em novembro de 2026 — sua vida mais fácil',
    description: 'Encontre o profissional ideal ou conquiste novos clientes com o Rapidão Serviços. Lançamento em novembro de 2026. Cadastre-se para acessar promoções, bônus e cashback no aplicativo.',
  });
}

export default function HomePage() {
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><SiteHeader /><main id="conteudo"><ServicesCarousel /><Hero /><Benefits /><WhyRapidao /><Services /><HowItWorks /><Security /><Professionals /><Faq /><LaunchCta /></main><SiteFooter /></>;
}
