import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
  onExploreTreatments: () => void;
}

export default function Hero({ onBookConsultation, onExploreTreatments }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ivory-50 pt-24"
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-champagne-100/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-ivory-200/50 blur-3xl" />
      </div>

      <div className="container-lux relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne-200 bg-champagne-50/80 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-champagne-500" />
            <span className="text-xs font-medium uppercase tracking-widest text-champagne-600">
              Modern Aesthetic Medicine
            </span>
          </div>

          <h1 className="text-balance font-serif text-5xl font-light leading-[1.05] text-charcoal-800 sm:text-6xl lg:text-7xl">
            Your Most Confident Self,
            <span className="block italic text-champagne-600">Beautifully Refined.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-500">
            Advanced aesthetic treatments designed around you, delivered by
            experienced professionals in a calm, luxurious environment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={onBookConsultation} className="btn-gold">
              <Calendar className="h-4 w-4" />
              Book Your Consultation
            </button>
            <button onClick={onExploreTreatments} className="btn-secondary">
              Explore Treatments
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-8 text-sm text-charcoal-400">
            Personalized consultations &bull; Experienced providers &bull; Modern
            aesthetic care
          </p>
        </div>

        {/* Image */}
        <div className="relative animate-scale-in">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-charcoal-100">
            <img
              src="https://images.pexels.com/photos/3764552/pexels-photo-3764552.jpeg?auto=compress&cs=tinysrgb&w=1100"
              alt="Woman relaxing during a premium facial treatment"
              className="h-[28rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white/90 px-5 py-4 shadow-card ring-1 ring-charcoal-100 backdrop-blur-md sm:block">
            <p className="font-serif text-3xl font-medium text-charcoal-800">
              4.9<span className="text-champagne-500">&starf;</span>
            </p>
            <p className="text-xs text-charcoal-400">1,200+ happy clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
