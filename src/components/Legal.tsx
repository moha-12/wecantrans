import { Building2, Mail, MapPin } from 'lucide-react';
import type { Translation } from '../i18n';

interface LegalProps {
  t: Translation;
}

const COMPANY = {
  name: 'WCT',
  legalForm: 'SAS au capital de 52 867,00 €',
  rcs: 'RCS Versailles 444 270 300',
  siret: '444 270 300 00015',
  ape: '514F',
  vat: 'FR 66 444 270 300',
  address: '99 rue Pereire, 78100 Saint-Germain-en-Laye',
};

export default function Legal({ t }: LegalProps) {
  const rows = [
    { label: t.legal.companyLabel, value: COMPANY.name },
    { label: t.legal.legalFormLabel, value: COMPANY.legalForm },
    { label: t.legal.rcsLabel, value: COMPANY.rcs },
    { label: t.legal.siretLabel, value: COMPANY.siret },
    { label: t.legal.apeLabel, value: COMPANY.ape },
    { label: t.legal.vatLabel, value: COMPANY.vat },
  ];

  return (
    <section id="legal-page" className="relative bg-ink-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="container-x relative z-10 pt-32 pb-24">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-brand-300 font-medium mb-5">
            {t.legal.tag}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            {t.legal.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">{t.legal.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto glass rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-brand-300" />
            </div>
            <h3 className="text-white font-semibold text-lg">{t.legal.editorTitle}</h3>
          </div>

          <dl className="divide-y divide-white/10">
            {rows.map((row) => (
              <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3">
                <dt className="text-sm text-slate-400 sm:w-56 flex-shrink-0">{row.label}</dt>
                <dd className="text-sm text-white font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-slate-400">{t.legal.addressLabel}</div>
                <div className="text-sm text-white font-medium">{COMPANY.address}</div>
              </div>
            </div>
            <a
              href={`mailto:${t.footer.email}`}
              className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-slate-400">{t.legal.contactLabel}</div>
                <div className="text-sm font-medium">{t.footer.email}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
