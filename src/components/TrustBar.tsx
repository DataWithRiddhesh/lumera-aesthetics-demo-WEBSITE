import { ShieldCheck, HeartHandshake, Microscope, Lock } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Experienced Professionals',
    description: 'Every treatment is delivered by licensed, experienced providers.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Consultations',
    description: 'No two plans are alike — yours is built around your goals.',
  },
  {
    icon: Microscope,
    title: 'Modern Technology',
    description: 'FDA-cleared devices and premium products, chosen for safety and results.',
  },
  {
    icon: Lock,
    title: 'Private & Comfortable',
    description: 'A calm, discreet environment designed for your comfort.',
  },
];

export default function TrustBar() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-white py-16 lg:py-20">
      <div ref={ref} className={`container-lux reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne-50 ring-1 ring-champagne-100">
                <item.icon className="h-5 w-5 text-champagne-600" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
