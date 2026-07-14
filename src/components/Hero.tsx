import { ArrowRight, Sparkles, ShieldCheck, Cloud, Code2 } from 'lucide-react';
import type { Translation } from '../i18n';

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-ink-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-500/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-x relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass text-sm text-brand-300 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">{t.hero.badge}</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {t.hero.title}
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.03] transition-all"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white glass rounded-xl hover:bg-white/10 transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Floating service icons */}
          <div
            className="mt-16 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { icon: Code2, label: 'Dev' },
              { icon: ShieldCheck, label: 'Security' },
              { icon: Cloud, label: 'Cloud' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-sm text-slate-300"
              >
                <item.icon className="w-4 h-4 text-brand-400" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px glass rounded-2xl overflow-hidden animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {t.hero.stats.map((stat, i) => (
            <div key={i} className="px-6 py-8 text-center bg-white/[0.02]">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
