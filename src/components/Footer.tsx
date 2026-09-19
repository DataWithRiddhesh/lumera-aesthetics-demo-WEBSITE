import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'dashboard') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollTo = (id: string) => {
    onNavigate('home');
    setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  return (
    <footer id="contact" className="bg-charcoal-900 text-charcoal-200">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="font-serif text-3xl font-semibold tracking-wide text-ivory-50"
            >
              LUMÉRA
            </button>
            <p className="mt-1 text-xs uppercase tracking-widest text-champagne-400">
              Aesthetics
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-300">
              Modern aesthetic medicine, delivered with personalized care in a
              calm, luxurious environment.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800 text-charcoal-300 transition-colors hover:bg-champagne-500 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800 text-charcoal-300 transition-colors hover:bg-champagne-500 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-champagne-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Treatments', href: '#treatments' },
                { label: 'About', href: '#about' },
                { label: 'Results', href: '#results' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-charcoal-300 transition-colors hover:text-ivory-50"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="text-charcoal-300 transition-colors hover:text-ivory-50"
                >
                  Lead Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-champagne-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                <span>120 Madison Avenue, Suite 800, New York, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-champagne-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-champagne-500" />
                <span>hello@lumera-aesthetics.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-champagne-400">
              Opening Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-300">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-champagne-500" />
                <span>Mon – Fri: 9am – 7pm</span>
              </li>
              <li className="pl-7">Sat: 10am – 5pm</li>
              <li className="pl-7">Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-charcoal-700 pt-8 text-xs text-charcoal-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} LUMÉRA Aesthetics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ivory-50">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-ivory-50">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
