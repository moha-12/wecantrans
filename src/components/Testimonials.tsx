import { Star, Quote } from 'lucide-react';
import type { Translation } from '../i18n';
import { useReveal } from '../hooks/useReveal';

interface TestimonialsProps {
  t: Translation;
}

export default function Testimonials({ t }: TestimonialsProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full">
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-slate-600">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-brand-200 mb-5" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{item.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-ink-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
