import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory-100 py-24 lg:py-32">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-3">Questions & Answers</p>
            <h2 className="text-balance font-serif text-4xl font-light text-charcoal-800 sm:text-5xl">
              Everything you need to know
            </h2>
            <p className="mt-4 text-charcoal-500">
              Can't find what you're looking for? Reach out and our team will be
              happy to help.
          </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-charcoal-100"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-serif text-lg font-medium text-charcoal-800">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne-50 text-champagne-600">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-charcoal-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
