import { ArrowRight, Phone } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

interface CTASectionProps {
  t: Translation;
}

export default function CTASection({ t }: CTASectionProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="quote" className="py-24 lg:py-32 bg-slate-50">
      <div className="container-x">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-brand-900 to-ink-800 px-8 py-16 lg:px-16 lg:py-20 text-center`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/15 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t.cta.title}
            </h2>
            <p className="text-lg text-slate-300 mb-10">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-ink-900 bg-white rounded-xl shadow-xl hover:scale-[1.03] transition-all"
              >
                {t.cta.button}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+33184801234"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white glass rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
