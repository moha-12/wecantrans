import { Check, ArrowRight, Sparkles } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

interface PricingProps {
  t: Translation;
}

export default function Pricing({ t }: PricingProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-slate-50">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full">
            {t.pricing.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-slate-600">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-ink-900 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 lg:scale-105'
                  : 'bg-white border border-slate-200 hover:border-brand-300 hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-500 rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ml-1 ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-brand-500/20' : 'bg-brand-50'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-brand-300' : 'text-brand-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all ${
                  plan.highlighted
                    ? 'text-white bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30 hover:scale-[1.03]'
                    : 'text-brand-700 bg-brand-50 hover:bg-brand-100'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-slate-500">{t.pricing.note}</p>
      </div>
    </section>
  );
}
