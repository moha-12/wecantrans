import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import type { Translation } from '../i18n';

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer id="contact" className="bg-ink-900 text-slate-400 pt-20 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">W</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                wecan<span className="text-brand-400">trans</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm mb-6">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-500/20 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer.services}</h4>
            <ul className="space-y-3">
              {t.footer.servicesList.map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer.company}</h4>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.footer.address}</span>
              </li>
              <li>
                <a href={`mailto:${t.footer.email}`} className="flex items-start gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.footer.email}</span>
                </a>
              </li>
              <li>
                <a href="tel:+33184801234" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.footer.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} wecantrans. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-white transition-colors">{t.footer.legal}</a>
            <a href="#" className="text-sm hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-sm hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
