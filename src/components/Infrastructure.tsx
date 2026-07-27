import { Layers, Activity, RefreshCw, Radar, Network, HardDrive } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const iconMap = { Layers, Activity, RefreshCw, Radar, Network, HardDrive };

interface InfrastructureProps {
  t: Translation;
}

export default function Infrastructure({ t }: InfrastructureProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="infra" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-14`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full">
            {t.infra.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {t.infra.title}
          </h2>
          <p className="text-lg text-slate-600">{t.infra.subtitle}</p>
        </div>

        {/* Stats bar */}
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mb-14 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-ink-900 shadow-xl shadow-ink-900/10`}
        >
          {t.infra.stats.map((stat, i) => (
            <div key={i} className="px-6 py-8 text-center bg-white/[0.02]">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.infra.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={i}
                className={`reveal ${visible ? 'is-visible' : ''} group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
