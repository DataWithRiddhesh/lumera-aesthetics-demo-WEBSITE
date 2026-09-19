import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Consultation from '@/components/Consultation';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import Dashboard from '@/components/Dashboard';

type Page = 'home' | 'dashboard';

function App() {
  const [page, setPage] = useState<Page>('home');

  const scrollTo = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleNavigate = useCallback(
    (target: Page) => {
      setPage(target);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    },
    [],
  );

  const handleBookConsultation = useCallback(() => {
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => scrollTo('#consultation'), 100);
    } else {
      scrollTo('#consultation');
    }
  }, [page, scrollTo]);

  const handleExploreTreatments = useCallback(() => scrollTo('#treatments'), [scrollTo]);

  if (page === 'dashboard') {
    return (
      <div className="min-h-screen bg-ivory-100">
        <Navbar onNavigate={handleNavigate} currentPage={page} />
        <Dashboard onBackHome={() => handleNavigate('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar onNavigate={handleNavigate} currentPage={page} />
      <main>
        <Hero
          onBookConsultation={handleBookConsultation}
          onExploreTreatments={handleExploreTreatments}
        />
        <Services onLearnMore={handleBookConsultation} />
        <TrustBar />
        <About />
        <Consultation />
        <Testimonials />
        <FAQ />
        <BookingCTA onBookConsultation={handleBookConsultation} />
      </main>
      <Footer onNavigate={handleNavigate} />
      <StickyCTA onBookConsultation={handleBookConsultation} />
      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  );
}

export default App;
