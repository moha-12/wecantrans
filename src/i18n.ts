export type Lang = 'fr' | 'en';

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Translation {
  nav: { services: string; why: string; process: string; testimonials: string; pricing: string; faq: string; contact: string; cta: string };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; stats: Stat[] };
  services: { tag: string; title: string; subtitle: string; items: ServiceItem[] };
  why: { tag: string; title: string; subtitle: string; items: WhyItem[] };
  process: { tag: string; title: string; subtitle: string; steps: ProcessStep[] };
  testimonials: { tag: string; title: string; subtitle: string; items: Testimonial[] };
  pricing: { tag: string; title: string; subtitle: string; plans: PricingPlan[]; note: string };
  faq: { tag: string; title: string; subtitle: string; items: FAQItem[] };
  cta: { title: string; subtitle: string; button: string; secondary: string };
  footer: {
    tagline: string;
    services: string;
    company: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    servicesList: string[];
    companyLinks: string[];
    address: string;
    email: string;
    phone: string;
  };
}

export const translations: Record<Lang, Translation> = {
  fr: {
    nav: {
      services: 'Services',
      why: 'Pourquoi nous',
      process: 'Processus',
      testimonials: 'Témoignages',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Devis gratuit',
    },
    hero: {
      badge: 'Agence de transformation digitale',
      title: 'Transformez votre entreprise avec des solutions IT sur-mesure',
      subtitle:
        'Développement logiciel, cybersécurité, infrastructure cloud et consulting IT. wecantrans accompagne PME et grandes entreprises vers une digitalisation maîtrisée et performante.',
      ctaPrimary: 'Demander un devis gratuit',
      ctaSecondary: 'Découvrir nos services',
      stats: [
        { value: '150+', label: 'Projets livrés' },
        { value: '98%', label: 'Clients satisfaits' },
        { value: '12 ans', label: "D'expérience" },
        { value: '24/7', label: 'Support dédié' },
      ],
    },
    services: {
      tag: 'Nos expertises',
      title: 'Des services IT complets pour accélérer votre croissance',
      subtitle:
        'Une offre 360° couvrant l\'ensemble du cycle de vie numérique de votre entreprise.',
      items: [
        {
          icon: 'Code2',
          title: 'Développement logiciel',
          description:
            'Applications web, mobiles et sur-mesure. APIs, architectures microservices et intégrations système pour des solutions évolutives et durables.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Cybersécurité',
          description:
            "Audit de sécurité, pentest, conformité RGPD/NIS2 et mise en place de politiques de défense proactive contre les menaces actuelles.",
        },
        {
          icon: 'Cloud',
          title: 'Infrastructure cloud',
          description:
            'Migration, optimisation et gestion d\'infrastructures AWS, Azure et GCP. DevOps, CI/CD et FinOps pour maîtriser vos coûts cloud.',
        },
        {
          icon: 'Lightbulb',
          title: 'Consulting IT',
          description:
            "Accompagnement stratégique, choix technologiques, architecture et roadmap digitale alignée sur vos objectifs métier.",
        },
        {
          icon: 'Headset',
          title: 'Support & IT managed',
          description:
            "Externalisation complète ou partielle de votre IT. Helpdesk, supervision, MCO et support utilisateur 24/7.",
        },
        {
          icon: 'Database',
          title: 'Data & IA',
          description:
            "Pipelines de données, BI, dashboards décisionnels et intégration de modèles d'intelligence artificielle dans vos processus métier.",
        },
      ],
    },
    why: {
      tag: 'Pourquoi wecantrans',
      title: 'Un partenaire technologique qui fait la différence',
      subtitle: 'Nous combinons expertise technique et vision métier pour des résultats concrets.',
      items: [
        {
          icon: 'Users',
          title: 'Équipe senior dédiée',
          description:
            'Des architectes, développeurs et experts sécurité avec une moyenne de 10 ans d\'expérience. Pas de juniors sur vos projets critiques.',
        },
        {
          icon: 'Gauge',
          title: 'Livraison prévisible',
          description:
            'Méthodologie agile, sprints réguliers et transparence totale. Vous validez à chaque étape, sans surprise sur le budget ni les délais.',
        },
        {
          icon: 'Lock',
          title: 'Sécurité par design',
          description:
            'La sécurité est intégrée dès la conception. Conformité RGPD, NIS2 et bonnes pratiques OWCP/OWASP appliquées sur chaque livrable.',
        },
        {
          icon: 'Handshake',
          title: 'Partenariat long terme',
          description:
            '85% de nos clients nous renouvellent leur confiance. Nous bâtissons des relations durables, pas des projets one-shot.',
        },
      ],
    },
    process: {
      tag: 'Notre méthodologie',
      title: 'Un processus clair, de l\'idée à la mise en production',
      subtitle: 'Quatre étapes structurées pour transformer votre vision en résultats mesurables.',
      steps: [
        {
          number: '01',
          title: 'Analyse & cadrage',
          description:
            'Ateliers de découverte, analyse des besoins métier et techniques, identification des contraintes et des objectifs mesurables.',
        },
        {
          number: '02',
          title: 'Devis & roadmap',
          description:
            'Estimation détaillée, planning par sprints, choix technologiques validés et roadmap partagée avec l\'ensemble des parties prenantes.',
        },
        {
          number: '03',
          title: 'Réalisation & itérations',
          description:
            'Développement agile avec démos régulières, tests continus et validation à chaque sprint. Vous gardez le contrôle à chaque étape.',
        },
        {
          number: '04',
          title: 'Déploiement & support',
          description:
            'Mise en production, formation de vos équipes, monitoring et support 24/7. Nous restons à vos côtés après le go-live.',
        },
      ],
    },
    testimonials: {
      tag: 'Ils nous font confiance',
      title: 'Des résultats qui parlent d\'eux-mêmes',
      subtitle: 'Découvrez l\'impact de nos accompagnements auprès de nos clients.',
      items: [
        {
          quote:
            'wecantrans a refondu notre plateforme e-commerce en 4 mois. Temps de chargement divisé par 3, taux de conversion en hausse de 22%. Un partenaire technique de premier plan.',
          author: 'Caroline Marchand',
          role: 'DSI, Groupe Retailer+',
          rating: 5,
        },
        {
          quote:
            'L\'audit de cybersécurité a révélé des vulnérabilités critiques que nous n\'avions pas détectées. Le plan de remédiation était clair, priorisé et exécuté en moins de 6 semaines.',
          author: 'Thomas Lefèvre',
          role: 'RSSI, FinSecure SAS',
          rating: 5,
        },
        {
          quote:
            'Migration cloud vers AWS réalisée sans interruption de service. Facture cloud réduite de 35% grâce à l\'optimisation FinOps. Accomplissement au-delà de nos attentes.',
          author: 'Sophie Nguyen',
          role: 'Directrice des opérations, LogiTrans',
          rating: 5,
        },
      ],
    },
    pricing: {
      tag: 'Tarification',
      title: 'Des offres adaptées à votre maturité digitale',
      subtitle: 'Tarifs indicatifs. Chaque projet est chiffré sur-mesure après cadrage gratuit.',
      plans: [
        {
          name: 'Starter',
          price: '2 500 €',
          period: '/ projet',
          description: 'Idéal pour les PME qui débutent leur transformation digitale.',
          features: [
            'Site web ou application vitrine',
            'Audit technique de base',
            'Hébergement & déploiement',
            'Support email 5j/7',
            '1 itération de design',
          ],
          cta: 'Demander un devis',
          highlighted: false,
        },
        {
          name: 'Business',
          price: '8 000 €',
          period: '/ mois',
          description: 'Pour les entreprises en croissance nécessitant un partenaire IT dédié.',
          features: [
            'Application sur-mesure complète',
            'Infrastructure cloud gérée',
            'Audit sécurité & conformité',
            'Support prioritaire 24/7',
            'Roadmap trimestrielle',
            'Équipe dédiée (3-4 experts)',
          ],
          cta: 'Demander un devis',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Sur devis',
          period: '',
          description: 'Accompagnement stratégique et technique pour grands comptes.',
          features: [
            'Architecture & consulting IT',
            'Cybersécurité & conformité NIS2',
            'Data & IA sur-mesure',
            'SLA contractuel garanti',
            'Account manager dédié',
            'Équipe projet scalable',
          ],
          cta: 'Nous contacter',
          highlighted: false,
        },
      ],
      note: 'Devis gratuit et sans engagement sous 48h. Cadrage technique offert.',
    },
    faq: {
      tag: 'Questions fréquentes',
      title: 'Tout ce que vous devez savoir avant de démarrer',
      subtitle: 'Vous ne trouvez pas votre réponse ? Contactez-nous directement.',
      items: [
        {
          question: 'Combien de temps prend un projet typique ?',
          answer:
            'Un site web ou une application vitrine se livre en 4 à 8 semaines. Une application métier complexe nécessite généralement 3 à 6 mois. Nous établissons un planning précis dès la phase de cadrage, avec des jalons intermédiaires à chaque sprint.',
        },
        {
          question: 'Travaillez-vous avec des PME et des grandes entreprises ?',
          answer:
            'Oui. 60% de nos clients sont des PME (10 à 250 collaborateurs) et 40% des grandes entreprises ou ETI. Nous adaptons nos méthodes, nos équipes et nos tarifs à votre taille et à votre maturité digitale.',
        },
        {
          question: 'Vos solutions sont-elles conformes au RGPD et à la directive NIS2 ?',
          answer:
            'Absolument. La conformité RGPD est intégrée dès la conception de chaque projet. Pour les entités concernées par NIS2, nous proposons un accompagnement complet : audit, mesures techniques, gouvernance et documentation de conformité.',
        },
        {
          question: 'Que se passe-t-il après la livraison du projet ?',
          answer:
            'Nous assurons une période de garantie de 30 jours incluse. Au-delà, nous proposons des forfaits de maintenance et de support évoluant avec vos besoins : MCO, helpdesk, monitoring, évolutions fonctionnelles et optimisation continue.',
        },
        {
          question: 'Comment se déroule le devis gratuit ?',
          answer:
            'Vous remplissez le formulaire de contact ou nous appelez directement. Nous organisons un appel de cadrage de 30 à 45 minutes, puis vous recevez un devis détaillé sous 48h, sans engagement. La phase de cadrage technique est offerte.',
        },
      ],
    },
    cta: {
      title: 'Prêt à accélérer votre transformation digitale ?',
      subtitle:
        'Parlons de votre projet. Cadrage technique offert, devis sous 48h, sans engagement.',
      button: 'Demander un devis gratuit',
      secondary: 'Réserver un appel',
    },
    footer: {
      tagline: 'Votre partenaire de confiance pour la transformation digitale et l\'ingénierie IT.',
      services: 'Services',
      company: 'Entreprise',
      contact: 'Contact',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      terms: 'CGV',
      rights: 'Tous droits réservés.',
      servicesList: ['Développement logiciel', 'Cybersécurité', 'Cloud & DevOps', 'Consulting IT', 'Data & IA'],
      companyLinks: ['À propos', 'Nos réalisations', 'Carrières', 'Blog', 'Partenaires'],
      address: '24 rue de la Tech, 75011 Paris, France',
      email: 'contact@wecantrans.com',
      phone: '+33 1 84 80 12 34',
    },
  },
  en: {
    nav: {
      services: 'Services',
      why: 'Why us',
      process: 'Process',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Free quote',
    },
    hero: {
      badge: 'Digital transformation agency',
      title: 'Empower your business with tailored IT solutions',
      subtitle:
        'Software development, cybersecurity, cloud infrastructure and IT consulting. wecantrans helps SMEs and large enterprises master their digital transformation.',
      ctaPrimary: 'Get a free quote',
      ctaSecondary: 'Explore our services',
      stats: [
        { value: '150+', label: 'Projects delivered' },
        { value: '98%', label: 'Client satisfaction' },
        { value: '12 yrs', label: 'Experience' },
        { value: '24/7', label: 'Dedicated support' },
      ],
    },
    services: {
      tag: 'Our expertise',
      title: 'End-to-end IT services to accelerate your growth',
      subtitle: 'A 360° offering covering the entire digital lifecycle of your business.',
      items: [
        {
          icon: 'Code2',
          title: 'Software development',
          description:
            'Web, mobile and custom applications. APIs, microservice architectures and system integrations for scalable, durable solutions.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Cybersecurity',
          description:
            'Security audits, pentesting, GDPR/NIS2 compliance and proactive defense policies against current threats.',
        },
        {
          icon: 'Cloud',
          title: 'Cloud infrastructure',
          description:
            'Migration, optimization and management of AWS, Azure and GCP infrastructures. DevOps, CI/CD and FinOps to control your cloud costs.',
        },
        {
          icon: 'Lightbulb',
          title: 'IT consulting',
          description:
            'Strategic guidance, technology selection, architecture and digital roadmap aligned with your business goals.',
        },
        {
          icon: 'Headset',
          title: 'Managed IT support',
          description:
            'Full or partial IT outsourcing. Helpdesk, monitoring, application maintenance and 24/7 user support.',
        },
        {
          icon: 'Database',
          title: 'Data & AI',
          description:
            'Data pipelines, BI, executive dashboards and integration of AI models into your business processes.',
        },
      ],
    },
    why: {
      tag: 'Why wecantrans',
      title: 'A technology partner that makes the difference',
      subtitle: 'We combine technical expertise with business vision for concrete results.',
      items: [
        {
          icon: 'Users',
          title: 'Dedicated senior team',
          description:
            'Architects, developers and security experts with an average of 10 years of experience. No juniors on your critical projects.',
        },
        {
          icon: 'Gauge',
          title: 'Predictable delivery',
          description:
            'Agile methodology, regular sprints and full transparency. You validate at every step, with no surprises on budget or timeline.',
        },
        {
          icon: 'Lock',
          title: 'Security by design',
          description:
            'Security is built in from conception. GDPR, NIS2 compliance and OWASP best practices applied to every deliverable.',
        },
        {
          icon: 'Handshake',
          title: 'Long-term partnership',
          description:
            '85% of our clients renew their trust. We build lasting relationships, not one-off projects.',
        },
      ],
    },
    process: {
      tag: 'Our methodology',
      title: 'A clear process, from idea to production',
      subtitle: 'Four structured steps to turn your vision into measurable results.',
      steps: [
        {
          number: '01',
          title: 'Analysis & scoping',
          description:
            'Discovery workshops, business and technical requirements analysis, identification of constraints and measurable objectives.',
        },
        {
          number: '02',
          title: 'Quote & roadmap',
          description:
            'Detailed estimation, sprint planning, validated technology choices and a shared roadmap with all stakeholders.',
        },
        {
          number: '03',
          title: 'Build & iterate',
          description:
            'Agile development with regular demos, continuous testing and validation at every sprint. You stay in control at every step.',
        },
        {
          number: '04',
          title: 'Deploy & support',
          description:
            'Production rollout, team training, monitoring and 24/7 support. We stay by your side after go-live.',
        },
      ],
    },
    testimonials: {
      tag: 'Trusted by',
      title: 'Results that speak for themselves',
      subtitle: 'Discover the impact of our work through our clients\' experiences.',
      items: [
        {
          quote:
            'wecantrans rebuilt our e-commerce platform in 4 months. Load times cut by 3x, conversion rate up 22%. A top-tier technical partner.',
          author: 'Caroline Marchand',
          role: 'CIO, Retailer+ Group',
          rating: 5,
        },
        {
          quote:
            'The cybersecurity audit revealed critical vulnerabilities we had missed. The remediation plan was clear, prioritized and executed in under 6 weeks.',
          author: 'Thomas Lefèvre',
          role: 'CISO, FinSecure SAS',
          rating: 5,
        },
        {
          quote:
            'AWS migration completed with zero downtime. Cloud bill reduced by 35% through FinOps optimization. Delivered beyond our expectations.',
          author: 'Sophie Nguyen',
          role: 'COO, LogiTrans',
          rating: 5,
        },
      ],
    },
    pricing: {
      tag: 'Pricing',
      title: 'Plans adapted to your digital maturity',
      subtitle: 'Indicative pricing. Each project is quoted custom after a free scoping session.',
      plans: [
        {
          name: 'Starter',
          price: '€2,500',
          period: '/ project',
          description: 'Ideal for SMEs starting their digital transformation.',
          features: [
            'Website or showcase app',
            'Basic technical audit',
            'Hosting & deployment',
            'Email support 5 days/week',
            '1 design iteration',
          ],
          cta: 'Request a quote',
          highlighted: false,
        },
        {
          name: 'Business',
          price: '€8,000',
          period: '/ month',
          description: 'For growing companies needing a dedicated IT partner.',
          features: [
            'Full custom application',
            'Managed cloud infrastructure',
            'Security & compliance audit',
            'Priority 24/7 support',
            'Quarterly roadmap',
            'Dedicated team (3-4 experts)',
          ],
          cta: 'Request a quote',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'Strategic and technical support for large accounts.',
          features: [
            'Architecture & IT consulting',
            'Cybersecurity & NIS2 compliance',
            'Custom Data & AI',
            'Guaranteed contractual SLA',
            'Dedicated account manager',
            'Scalable project team',
          ],
          cta: 'Contact us',
          highlighted: false,
        },
      ],
      note: 'Free, no-obligation quote within 48h. Complimentary technical scoping.',
    },
    faq: {
      tag: 'Frequently asked questions',
      title: 'Everything you need to know before starting',
      subtitle: 'Can\'t find your answer? Contact us directly.',
      items: [
        {
          question: 'How long does a typical project take?',
          answer:
            'A website or showcase app is delivered in 4 to 8 weeks. A complex business application typically takes 3 to 6 months. We set a precise timeline during scoping, with milestones at every sprint.',
        },
        {
          question: 'Do you work with both SMEs and large enterprises?',
          answer:
            'Yes. 60% of our clients are SMEs (10-250 employees) and 40% are large enterprises. We adapt our methods, teams and pricing to your size and digital maturity.',
        },
        {
          question: 'Are your solutions GDPR and NIS2 compliant?',
          answer:
            'Absolutely. GDPR compliance is built in from the design phase of every project. For entities covered by NIS2, we offer full support: audit, technical measures, governance and compliance documentation.',
        },
        {
          question: 'What happens after project delivery?',
          answer:
            'We include a 30-day warranty period. Beyond that, we offer maintenance and support packages that evolve with your needs: application maintenance, helpdesk, monitoring, feature updates and continuous optimization.',
        },
        {
          question: 'How does the free quote work?',
          answer:
            'Fill out the contact form or call us directly. We schedule a 30-45 minute scoping call, then you receive a detailed quote within 48h, with no obligation. The technical scoping session is complimentary.',
        },
      ],
    },
    cta: {
      title: 'Ready to accelerate your digital transformation?',
      subtitle: 'Let\'s talk about your project. Free technical scoping, quote within 48h, no obligation.',
      button: 'Get a free quote',
      secondary: 'Book a call',
    },
    footer: {
      tagline: 'Your trusted partner for digital transformation and IT engineering.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      terms: 'Terms & conditions',
      rights: 'All rights reserved.',
      servicesList: ['Software development', 'Cybersecurity', 'Cloud & DevOps', 'IT consulting', 'Data & AI'],
      companyLinks: ['About us', 'Our work', 'Careers', 'Blog', 'Partners'],
      address: '24 Tech Street, 75011 Paris, France',
      email: 'contact@wecantrans.com',
      phone: '+33 1 84 80 12 34',
    },
  },
};


