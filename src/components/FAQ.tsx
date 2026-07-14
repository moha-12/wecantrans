import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

interface FAQProps {
  t: Translation;
}

export default function FAQ({ t }: FAQProps) {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container-x max-w-4xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full">
            {t.faq.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {t.faq.title}
          </h2>
          <p className="text-lg text-slate-600">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? 'border-brand-300 bg-brand-50/30 shadow-lg shadow-brand-500/5'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-ink-900 text-base">{item.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? 'bg-brand-500 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
