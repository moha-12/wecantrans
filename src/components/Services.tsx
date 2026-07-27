import { Code2, ShieldCheck, Cloud, Headset, Network, Wifi } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const iconMap = { Code2, ShieldCheck, Cloud, Headset, Network, Wifi };

interface ServicesProps {
  t: Translation;
}

export default function Services({ t }: ServicesProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-slate-50">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full">
            {t.services.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {t.services.title}
          </h2>
          <p className="text-lg text-slate-600">{t.services.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={i}
                className={`reveal ${visible ? 'is-visible' : ''} group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
