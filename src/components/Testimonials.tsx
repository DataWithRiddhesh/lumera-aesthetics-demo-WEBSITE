import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useReveal } from '@/lib/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="results" className="bg-ivory-50 py-24 lg:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Client Stories</p>
          <h2 className="text-balance font-serif text-4xl font-light text-charcoal-800 sm:text-5xl">
            Real confidence, beautifully shared
          </h2>
          <p className="mt-4 text-sm text-charcoal-400">
            The following are fictional demo testimonials for illustration.
          </p>
        </div>

        <div ref={ref} className={`mt-16 grid gap-6 reveal md:grid-cols-3 ${visible ? 'is-visible' : ''}`}>
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-charcoal-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-champagne-300" />
              <blockquote className="mt-4 flex-1 text-charcoal-600 leading-relaxed">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-champagne-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-charcoal-100 pt-5">
                <img
                  src={t.image}
                  alt={t.alt}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-champagne-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-serif text-base font-medium text-charcoal-800">{t.name}</p>
                  <p className="text-xs text-charcoal-400">
                    {t.treatment} &bull; {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
