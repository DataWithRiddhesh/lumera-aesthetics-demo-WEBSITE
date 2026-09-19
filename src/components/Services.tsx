import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { useReveal } from '@/lib/useReveal';

interface ServicesProps {
  onLearnMore: () => void;
}

export default function Services({ onLearnMore }: ServicesProps) {
  return (
    <section id="treatments" className="bg-ivory-50 py-24 lg:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Our Treatments</p>
          <h2 className="text-balance font-serif text-4xl font-light text-charcoal-800 sm:text-5xl">
            Designed Around Your Goals
          </h2>
          <p className="mt-4 text-charcoal-500">
            Every treatment begins with understanding what you want to achieve —
            then building the path to get there.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} onLearnMore={onLearnMore} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  onLearnMore,
}: {
  service: (typeof services)[number];
  index: number;
  onLearnMore: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-charcoal-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow ${
        visible ? 'is-visible' : ''
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-medium text-charcoal-800">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
          {service.description}
        </p>
        <button
          onClick={onLearnMore}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-champagne-600 transition-colors hover:text-champagne-700"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
