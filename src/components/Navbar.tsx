import { useEffect, useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'dashboard') => void;
  currentPage: 'home' | 'dashboard';
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/85 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-lux flex items-center justify-between py-4">
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2"
          aria-label="LUMÉRA home"
        >
          <span className="font-serif text-2xl font-semibold tracking-wide text-charcoal-800 transition-colors group-hover:text-champagne-600">
            LUMÉRA
          </span>
          <span className="hidden text-[0.625rem] font-medium uppercase tracking-widest text-champagne-500 sm:inline">
            Aesthetics
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="relative text-sm font-medium text-charcoal-600 transition-colors hover:text-charcoal-900 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-champagne-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-sm font-medium text-champagne-600 transition-colors hover:text-champagne-700"
          >
            Dashboard
          </button>
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => handleLink('#consultation')}
            className="btn-gold"
          >
            <Calendar className="h-4 w-4" />
            Book Consultation
          </button>
        </div>

        <button
          className="rounded-full p-2 text-charcoal-700 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-lux flex flex-col gap-1 bg-ivory-50/95 pb-6 pt-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="rounded-xl px-4 py-3 text-left text-base font-medium text-charcoal-700 transition-colors hover:bg-champagne-50 hover:text-charcoal-900"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onNavigate('dashboard');
            }}
            className="rounded-xl px-4 py-3 text-left text-base font-medium text-champagne-600 transition-colors hover:bg-champagne-50"
          >
            Lead Dashboard
          </button>
          <button
            onClick={() => handleLink('#consultation')}
            className="btn-gold mt-2"
          >
            <Calendar className="h-4 w-4" />
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
