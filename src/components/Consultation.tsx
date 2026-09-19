import ConsultationForm from './ConsultationForm';

export default function Consultation() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-gradient-to-b from-ivory-50 to-ivory-100 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-champagne-100/50 blur-3xl" />
      </div>
      <div className="container-lux relative z-10">
        <ConsultationForm />
      </div>
    </section>
  );
}
