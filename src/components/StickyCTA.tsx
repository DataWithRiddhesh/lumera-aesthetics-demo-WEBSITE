import { Calendar } from 'lucide-react';

interface StickyCTAProps {
  onBookConsultation: () => void;
}

export default function StickyCTA({ onBookConsultation }: StickyCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="border-t border-charcoal-100 bg-ivory-50/95 px-5 py-3 backdrop-blur-xl">
        <button onClick={onBookConsultation} className="btn-gold w-full">
          <Calendar className="h-4 w-4" />
          Book Consultation
        </button>
      </div>
    </div>
  );
}
