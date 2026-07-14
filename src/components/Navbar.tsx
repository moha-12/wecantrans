import { useEffect, useState } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import type { Lang, Translation } from '../i18n';

interface NavbarProps {
  t: Translation;
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ t, lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#why', label: t.nav.why },
    { href: '#process', label: t.nav.process },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/85 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
            <span className="font-display font-bold text-white text-lg">W</span>
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            wecan<span className="text-brand-400">trans</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang.toUpperCase()}
          </button>
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.03] transition-all"
          >
            {t.nav.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden container-x mt-3 pb-4 space-y-1 bg-ink-900/95 backdrop-blur-xl rounded-2xl border border-white/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="block mx-4 mt-2 px-5 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
