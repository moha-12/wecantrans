import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

interface ProcessProps {
  t: Translation;
}

export default function Process({ t }: ProcessProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="process" className="py-24 lg:py-32 bg-slate-50">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full">
            {t.process.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {t.process.title}
          </h2>
          <p className="text-lg text-slate-600">{t.process.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-accent-400" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {t.process.steps.map((step, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'is-visible' : ''} relative flex flex-col items-center text-center`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-brand-200 flex items-center justify-center shadow-lg shadow-brand-500/10 mb-6 transition-all hover:border-brand-400 hover:shadow-brand-500/20">
                  <span className="font-display text-xl font-bold gradient-text">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
