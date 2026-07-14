import { useState, useCallback } from 'react';
import { translations, type Lang } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Lang>('fr');
  const t = translations[lang];

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <Process t={t} />
        <Testimonials t={t} />
        <Pricing t={t} />
        <FAQ t={t} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
