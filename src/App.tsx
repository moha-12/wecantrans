import { useState, useCallback } from 'react';
import { translations, type Lang } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Infrastructure from './components/Infrastructure';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';

type Page = 'home' | 'contact' | 'legal';

function App() {
  const [lang, setLang] = useState<Lang>('fr');
  const [page, setPage] = useState<Page>('home');
  const t = translations[lang];

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const goToPage = useCallback((next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} page={page} onNavigate={goToPage} />
      <main>
        {page === 'home' ? (
          <>
            <Hero t={t} />
            <Services t={t} />
            <Infrastructure t={t} />
            <WhyUs t={t} />
            <Process t={t} />
            {/* <Testimonials t={t} /> */}
            {/* <Pricing t={t} /> */}
            <FAQ t={t} />
            {/* <CTASection t={t} /> */}
          </>
        ) : page === 'contact' ? (
          <Contact t={t} />
        ) : (
          <Legal t={t} />
        )}
      </main>
      <Footer t={t} onNavigate={goToPage} />
    </div>
  );
}

export default App;
