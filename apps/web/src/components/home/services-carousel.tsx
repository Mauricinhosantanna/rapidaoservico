import { services } from '@/data/rapidao';

const allItems = services.flatMap(service => service.items);

export function ServicesCarousel() {
  const loop = [...allItems, ...allItems];
  return (
    <section className="services-carousel" aria-label="Serviços disponíveis no Rapidão">
      <div className="carousel-rail">
        <div className="carousel-track">
          {loop.map((item, index) => (
            <span className="carousel-chip" key={index}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
