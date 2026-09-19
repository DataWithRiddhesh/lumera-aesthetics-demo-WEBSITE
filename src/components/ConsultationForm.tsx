import { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  Phone,
  Mail,
  Sparkles,
  Clock,
  MessageSquare,
  Calendar,
  Loader2,
  PartyPopper,
} from 'lucide-react';
import { interestOptions, timelineOptions, contactMethodOptions } from '@/data/services';
import { qualifyLead } from '@/lib/qualify';
import { N8N_WEBHOOK_URL, BOOKING_URL } from '@/config';

type Step = 0 | 1 | 2 | 3 | 4 | 5;

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  goal: string;
  timeline: string;
  contactMethod: string;
}

const initialData: FormData = {
  name: '',
  phone: '',
  email: '',
  interest: '',
  goal: '',
  timeline: '',
  contactMethod: '',
};

const stepMeta = [
  { title: 'Your details', icon: User, hint: 'So we know who to reach.' },
  { title: 'Your interest', icon: Sparkles, hint: 'What brings you in?' },
  { title: 'Your goals', icon: MessageSquare, hint: 'Tell us what you hope to achieve.' },
  { title: 'Your timing', icon: Clock, hint: 'When would you like to visit?' },
  { title: 'Contact preference', icon: Mail, hint: 'How should we reach you?' },
];

export default function ConsultationForm() {
  const [step, setStep] = useState<Step>(0);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateStep = (s: Step): boolean => {
    const errs: Record<string, string> = {};
    if (s === 0) {
      if (!data.name.trim()) errs.name = 'Please enter your name.';
      if (!data.phone.trim()) errs.phone = 'Please enter your phone number.';
      else if (data.phone.replace(/[^0-9]/g, '').length < 7)
        errs.phone = 'Please enter a valid phone number.';
      if (!data.email.trim()) errs.email = 'Please enter your email.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errs.email = 'Please enter a valid email address.';
    }
    if (s === 1 && !data.interest) errs.interest = 'Select one option.';
    if (s === 2 && !data.goal.trim()) errs.goal = 'Tell us a little about your goals.';
    if (s === 3 && !data.timeline) errs.timeline = 'Select a timing.';
    if (s === 4 && !data.contactMethod) errs.contactMethod = 'Select a contact method.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    if (step < 4) setStep((s) => (s + 1) as Step);
  };

  const back = () => {
    if (step > 0) setStep((s) => (s - 1) as Step);
  };

  const submit = async () => {
    if (!validateStep(4)) return;
    setSubmitting(true);
    const qualification = qualifyLead(
      data.interest as (typeof interestOptions)[number],
      data.timeline as (typeof timelineOptions)[number],
    );

    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.interest,
      goal: data.goal,
      preferred_time: data.timeline,
      contact_method: data.contactMethod,
      source: 'website',
      timestamp: new Date().toISOString(),
      lead_status: qualification.status,
      lead_score: qualification.score,
    };

    try {
      if (N8N_WEBHOOK_URL) {
        await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'cors',
        });
      } else {
        // Demo mode — simulate a network delay so the UX is visible
        await new Promise((r) => setTimeout(r, 900));
        console.info('[LUMÉRA] n8n webhook not configured. Lead payload:', payload);
      }
    } catch (err) {
      console.error('[LUMÉRA] Failed to send lead to n8n:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <SuccessScreen name={data.name} onBookNow={() => { window.open(BOOKING_URL, '_blank'); }} />;
  }

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Left copy */}
      <div className="hidden lg:block">
        <p className="eyebrow mb-3">Start Your Consultation</p>
        <h2 className="text-balance font-serif text-4xl font-light leading-tight text-charcoal-800">
          Let's build your
          <span className="italic text-champagne-600"> personalized plan.</span>
        </h2>
        <p className="mt-4 max-w-md text-charcoal-500">
          Answer a few questions and we'll prepare a tailored consultation. It
          takes under two minutes — no obligation.
        </p>
        <div className="mt-8 space-y-4">
          {[
            'No pressure, no commitment',
            'Reviewed by a licensed provider',
            'We reply within one business day',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-charcoal-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-champagne-100">
                <Check className="h-3.5 w-3.5 text-champagne-600" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Form card */}
      <div className="card-lux p-6 sm:p-8">
        {/* Progress */}
        <div className="mb-8 flex items-center gap-2">
          {stepMeta.map((s, i) => (
            <div key={i} className="flex flex-1 items-center gap-2">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-all duration-300 ${
                  i < step
                    ? 'bg-champagne-500 text-white'
                    : i === step
                    ? 'bg-charcoal-800 text-ivory-50 ring-4 ring-champagne-100'
                    : 'bg-ivory-100 text-charcoal-300'
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              {i < stepMeta.length - 1 && (
                <div className={`h-px flex-1 transition-all duration-300 ${i < step ? 'bg-champagne-400' : 'bg-ivory-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-serif text-xl font-medium text-charcoal-800">
            {stepMeta[step].title}
          </h3>
          <p className="text-sm text-charcoal-400">{stepMeta[step].hint}</p>
        </div>

        {/* Step 0 — Contact details */}
        {step === 0 && (
          <div className="space-y-4 animate-fade-in">
            <Field label="Full Name" error={errors.name}>
              <input
                type="text"
                value={data.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Sarah Johnson"
                className="input-lux"
                aria-label="Full name"
              />
            </Field>
            <Field label="Phone Number" error={errors.phone}>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="input-lux"
                aria-label="Phone number"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={data.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="sarah@example.com"
                className="input-lux"
                aria-label="Email address"
              />
            </Field>
          </div>
        )}

        {/* Step 1 — Interest */}
        {step === 1 && (
          <div className="grid gap-3 animate-fade-in sm:grid-cols-2">
            {interestOptions.map((opt) => (
              <ChoiceCard
                key={opt}
                label={opt}
                selected={data.interest === opt}
                onClick={() => update('interest', opt)}
              />
            ))}
            {errors.interest && <p className="text-sm text-red-500 sm:col-span-2">{errors.interest}</p>}
          </div>
        )}

        {/* Step 2 — Goal */}
        {step === 2 && (
          <div className="animate-fade-in">
            <textarea
              value={data.goal}
              onChange={(e) => update('goal', e.target.value)}
              placeholder="I'd like to soften the lines around my eyes and even out my skin tone..."
              rows={5}
              className="input-lux resize-none"
              aria-label="Your goals"
            />
            {errors.goal && <p className="mt-2 text-sm text-red-500">{errors.goal}</p>}
          </div>
        )}

        {/* Step 3 — Timeline */}
        {step === 3 && (
          <div className="grid gap-3 animate-fade-in sm:grid-cols-2">
            {timelineOptions.map((opt) => (
              <ChoiceCard
                key={opt}
                label={opt}
                selected={data.timeline === opt}
                onClick={() => update('timeline', opt)}
              />
            ))}
            {errors.timeline && <p className="text-sm text-red-500 sm:col-span-2">{errors.timeline}</p>}
          </div>
        )}

        {/* Step 4 — Contact method */}
        {step === 4 && (
          <div className="grid gap-3 animate-fade-in sm:grid-cols-3">
            {contactMethodOptions.map((opt) => (
              <ChoiceCard
                key={opt}
                label={opt}
                selected={data.contactMethod === opt}
                onClick={() => update('contactMethod', opt)}
                compact
              />
            ))}
            {errors.contactMethod && <p className="text-sm text-red-500 sm:col-span-3">{errors.contactMethod}</p>}
          </div>
        )}

        {/* Nav buttons */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-500 transition-colors hover:text-charcoal-800 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          {step < 4 ? (
            <button onClick={next} className="btn-primary">
              Continue
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button onClick={submit} disabled={submitting} className="btn-gold">
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  Request My Consultation
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal-600">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}

function ChoiceCard({
  label,
  selected,
  onClick,
  compact,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
        compact ? 'text-sm' : ''
      } ${
        selected
          ? 'border-champagne-400 bg-champagne-50 text-charcoal-800 shadow-soft'
          : 'border-charcoal-200 bg-ivory-50/50 text-charcoal-600 hover:border-champagne-300 hover:bg-white'
      }`}
    >
      {label}
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
          selected ? 'border-champagne-500 bg-champagne-500' : 'border-charcoal-300'
        }`}
      >
        {selected && <Check className="h-3 w-3 text-white" />}
      </span>
    </button>
  );
}

function SuccessScreen({ name, onBookNow }: { name: string; onBookNow: () => void }) {
  const firstName = name.split(' ')[0] || name;
  return (
    <div className="mx-auto max-w-lg text-center animate-scale-in">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-champagne-300 to-champagne-500 shadow-glow">
        <PartyPopper className="h-9 w-9 text-white" />
      </div>
      <h3 className="font-serif text-4xl font-light text-charcoal-800">
        Thank you, {firstName}! <span className="text-champagne-500">&#10024;</span>
      </h3>
      <p className="mt-4 text-lg text-charcoal-500">
        Your consultation request has been received. Our team will contact you
        shortly.
      </p>
      <div className="mt-8 inline-flex flex-col gap-3 sm:flex-row">
        <button onClick={onBookNow} className="btn-gold">
          <Calendar className="h-4 w-4" />
          Book Now
        </button>
      </div>
    </div>
  );
}
