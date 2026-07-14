import { Users, Gauge, Lock, Handshake } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const iconMap = { Users, Gauge, Lock, Handshake };

interface WhyUsProps {
  t: Translation;
}

export default function WhyUs({ t }: WhyUsProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="why" className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[120px]" />

      <div className="container-x relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-300 bg-brand-500/10 rounded-full">
            {t.why.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            {t.why.title}
          </h2>
          <p className="text-lg text-slate-400">{t.why.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={i}
                className={`reveal ${visible ? 'is-visible' : ''} group p-8 glass rounded-2xl hover:bg-white/[0.08] transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-brand-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
