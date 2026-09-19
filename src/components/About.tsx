import { useReveal } from '@/lib/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="overflow-hidden bg-ivory-100 py-24 lg:py-32">
      <div ref={ref} className={`container-lux reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card ring-1 ring-charcoal-100">
              <img
                src="https://images.pexels.com/photos/31844508/pexels-photo-31844508.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Elegant clinic reception area with modern furnishings"
                className="h-[26rem] w-full object-cover lg:h-[32rem]"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-champagne-500 px-6 py-4 text-white shadow-glow sm:block">
              <p className="font-serif text-3xl font-medium">12+</p>
              <p className="text-xs uppercase tracking-widest text-champagne-50">Years of Care</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-charcoal-800 sm:text-5xl">
              Where modern science meets
              <span className="italic text-champagne-600"> personalized care.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-500">
              LUMÉRA Aesthetics combines modern aesthetic technology with
              personalized care to help every client feel confident in their own
              skin. We believe results should look natural, feel effortless, and
              last — which is why every plan starts with listening.
            </p>
            <p className="mt-4 text-charcoal-500">
              From your first consultation to your final follow-up, our team
              walks beside you — adjusting, refining, and celebrating progress
              together.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-charcoal-200 pt-8">
              <div>
                <p className="font-serif text-3xl font-medium text-charcoal-800">1,200+</p>
                <p className="text-xs uppercase tracking-widest text-charcoal-400">Clients</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-charcoal-800">25+</p>
                <p className="text-xs uppercase tracking-widest text-charcoal-400">Treatments</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-charcoal-800">98%</p>
                <p className="text-xs uppercase tracking-widest text-charcoal-400">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
