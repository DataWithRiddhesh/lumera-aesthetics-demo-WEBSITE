import { Calendar, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/config';

interface BookingCTAProps {
  onBookConsultation: () => void;
}

export default function BookingCTA({ onBookConsultation }: BookingCTAProps) {
  return (
    <section className="bg-ivory-50 py-24 lg:py-32">
      <div className="container-lux">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal-800 px-8 py-16 text-center shadow-card sm:px-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-champagne-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-champagne-400/10 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="eyebrow mb-4 text-champagne-300">Next Step</p>
            <h2 className="text-balance font-serif text-4xl font-light text-ivory-50 sm:text-5xl">
              Ready to take the next step?
            </h2>
            <p className="mt-5 text-lg text-charcoal-200">
              Book your personalized consultation today and discover what's
              possible — no pressure, just a conversation.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={onBookConsultation}
                className="btn-gold"
              >
                <Calendar className="h-4 w-4" />
                Book Your Consultation
              </button>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-500 px-7 py-3.5 text-sm font-medium text-ivory-50 transition-all hover:border-champagne-400 hover:text-champagne-200"
              >
                View Booking Calendar
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
