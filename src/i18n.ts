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

export interface InfraItem {
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
  nav: { services: string; infra: string; why: string; process: string; testimonials: string; pricing: string; faq: string; contact: string; cta: string };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; stats: Stat[] };
  services: { tag: string; title: string; subtitle: string; items: ServiceItem[] };
  infra: { tag: string; title: string; subtitle: string; stats: Stat[]; items: InfraItem[] };
  why: { tag: string; title: string; subtitle: string; items: WhyItem[] };
  process: { tag: string; title: string; subtitle: string; steps: ProcessStep[] };
  testimonials: { tag: string; title: string; subtitle: string; items: Testimonial[] };
  pricing: { tag: string; title: string; subtitle: string; plans: PricingPlan[]; note: string };
  faq: { tag: string; title: string; subtitle: string; items: FAQItem[] };
  cta: { title: string; subtitle: string; button: string; secondary: string };
  legal: {
    tag: string;
    title: string;
    subtitle: string;
    editorTitle: string;
    companyLabel: string;
    legalFormLabel: string;
    rcsLabel: string;
    siretLabel: string;
    apeLabel: string;
    vatLabel: string;
    addressLabel: string;
    contactLabel: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
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
      infra: 'Infrastructure',
      why: 'Pourquoi nous',
      process: 'Processus',
      testimonials: 'Témoignages',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Contactez-nous',
    },
    hero: {
      badge: 'Expert infrastructure IT & cybersécurité',
      title: 'Des infrastructures IT robustes, sécurisées et disponibles 24/7',
      subtitle:
        'Réseaux, cloud hybride, cybersécurité et supervision continue. wecantrans conçoit, déploie et exploite les infrastructures critiques de PME et grandes entreprises, avec une équipe d\'ingénieurs certifiés.',
      ctaPrimary: 'Demander un devis gratuit',
      ctaSecondary: 'Découvrir nos services',
      stats: [
        { value: '150+', label: 'Infrastructures déployées' },
        { value: '99.99%', label: 'Disponibilité garantie' },
        { value: '12 ans', label: "D'expérience terrain" },
        { value: '24/7', label: 'Supervision & astreinte' },
      ],
    },
    services: {
      tag: 'Nos expertises',
      title: 'Des infrastructures IT complètes, sécurisées et disponibles',
      subtitle:
        'De la salle serveur au cloud hybride : nous concevons, déployons et exploitons vos systèmes critiques.',
      items: [
        {
          icon: 'Network',
          title: 'Infrastructure & réseaux',
          description:
            'Conception et déploiement de réseaux d\'entreprise : routeurs, switches et pare-feux de classe professionnelle (Juniper, Fortinet), câblage et interconnexions multi-sites.',
        },
        {
          icon: 'Cloud',
          title: 'Cloud hybride & virtualisation',
          description:
            'Environnements VMware vSphere et Microsoft Hyper-V, migration vers AWS/Azure/GCP et architectures hybrides dimensionnées pour la charge et la résilience.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Cybersécurité',
          description:
            'Tests d\'intrusion, SOC de supervision, durcissement des systèmes et mise en conformité RGPD, NIS2, PCI-DSS et ISO 27001.',
        },
        {
          icon: 'Wifi',
          title: 'Télécoms & connectivité',
          description:
            'Liaisons SD-WAN, backbones IP et interconnexions sécurisées entre vos sites, agences et datacenters.',
        },
        {
          icon: 'Code2',
          title: 'Développement logiciel & ERP',
          description:
            'Applications métier, intégrations ERP et portails web sur-mesure, conçus pour s\'appuyer sur une infrastructure fiable et sécurisée.',
        },
        {
          icon: 'Headset',
          title: 'Support & supervision 24/7',
          description:
            'Supervision proactive, astreinte technique et maintien en condition opérationnelle pour garantir la continuité de vos services.',
        },
      ],
    },
    infra: {
      tag: 'Infrastructure & continuité',
      title: 'Une infrastructure pensée pour la haute disponibilité',
      subtitle:
        'Architectures redondantes, supervision continue et plans de reprise d\'activité pour que vos services restent en ligne, quoi qu\'il arrive.',
      stats: [
        { value: '99,99%', label: 'SLA de disponibilité' },
        { value: '< 15 min', label: 'RTO garanti' },
        { value: 'Multi-AZ', label: 'Architectures redondantes' },
        { value: '24/7', label: 'Supervision technique' },
      ],
      items: [
        {
          icon: 'Layers',
          title: 'Architecture redondante',
          description:
            'Déploiements multi-zones et multi-régions pour éliminer les points de défaillance uniques et garantir la continuité de service.',
        },
        {
          icon: 'Activity',
          title: 'Haute disponibilité',
          description:
            'Bascule automatique (failover), équilibrage de charge et clusters actif-actif pour absorber les pannes sans interruption perceptible.',
        },
        {
          icon: 'RefreshCw',
          title: 'Plan de reprise d\'activité',
          description:
            'PRA/PCA documentés et testés régulièrement, avec des objectifs RTO/RPO calibrés selon la criticité de vos systèmes.',
        },
        {
          icon: 'Radar',
          title: 'Supervision 24/7',
          description:
            'Monitoring temps réel, alerting proactif et astreinte technique pour détecter et corriger les incidents avant qu\'ils n\'impactent vos utilisateurs.',
        },
        {
          icon: 'Network',
          title: 'Scalabilité & load balancing',
          description:
            'Répartition de charge intelligente et auto-scaling pour absorber les pics de trafic sans dégradation de performance.',
        },
        {
          icon: 'HardDrive',
          title: 'Sauvegardes & résilience',
          description:
            'Sauvegardes chiffrées, réplication géographique des données et tests de restauration réguliers pour une résilience éprouvée.',
        },
      ],
    },
    why: {
      tag: 'Pourquoi wecantrans',
      title: 'Un partenaire infrastructure qui fait la différence',
      subtitle: 'Nous combinons ingénierie de haut niveau et exigence opérationnelle pour des infrastructures qui tiennent leurs promesses.',
      items: [
        {
          icon: 'Users',
          title: 'Ingénieurs certifiés',
          description:
            'Une équipe certifiée sur les technologies que nous déployons (réseaux, virtualisation, sécurité), avec une moyenne de 10 ans d\'expérience terrain. Pas de juniors sur vos infrastructures critiques.',
        },
        {
          icon: 'Gauge',
          title: 'SLA & astreinte garantis',
          description:
            'Engagements de disponibilité contractuels, supervision continue et astreinte technique. Vous savez exactement à quoi vous attendre, sans surprise.',
        },
        {
          icon: 'Lock',
          title: 'Sécurité par design',
          description:
            'La sécurité est intégrée dès la conception de chaque architecture. Conformité RGPD, NIS2, PCI-DSS et ISO 27001 appliquée sur chaque déploiement.',
        },
        {
          icon: 'Handshake',
          title: 'Partenariat long terme',
          description:
            '85% de nos clients nous renouvellent leur confiance. Nous exploitons vos infrastructures dans la durée, pas seulement le temps d\'un projet.',
        },
      ],
    },
    process: {
      tag: 'Notre méthodologie',
      title: 'Un processus rigoureux, de l\'audit à l\'exploitation',
      subtitle: 'Quatre étapes structurées pour déployer une infrastructure fiable et la maintenir dans la durée.',
      steps: [
        {
          number: '01',
          title: 'Audit & cadrage technique',
          description:
            'Diagnostic de l\'existant, cartographie des risques et des points de défaillance, identification des exigences de disponibilité et de sécurité.',
        },
        {
          number: '02',
          title: 'Architecture & devis',
          description:
            'Conception de l\'architecture cible (redondance, sécurité, scalabilité), choix technologiques validés et devis détaillé sous 48h.',
        },
        {
          number: '03',
          title: 'Déploiement & migration',
          description:
            'Mise en œuvre par étapes avec tests de charge et de bascule, migration à interruption minimale et validation à chaque jalon.',
        },
        {
          number: '04',
          title: 'Supervision & support continu',
          description:
            'Monitoring 24/7, astreinte technique et optimisation continue. Nous restons à vos côtés bien après la mise en production.',
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
          description: 'Idéal pour les PME qui structurent leur infrastructure IT.',
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
      title: 'Prêt à sécuriser et fiabiliser votre infrastructure IT ?',
      subtitle:
        'Parlons de votre projet. Cadrage technique offert, devis sous 48h, sans engagement.',
      button: 'Demander un devis gratuit',
      secondary: 'Réserver un appel',
    },
    legal: {
      tag: 'Informations légales',
      title: 'Mentions légales',
      subtitle:
        "Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site les informations suivantes.",
      editorTitle: 'Éditeur du site',
      companyLabel: 'Dénomination sociale',
      legalFormLabel: 'Forme juridique',
      rcsLabel: 'RCS',
      siretLabel: 'SIRET',
      apeLabel: 'Code APE',
      vatLabel: 'TVA intracommunautaire',
      addressLabel: 'Siège social',
      contactLabel: 'Contact',
    },
    contact: {
      tag: 'Contact',
      title: 'Parlons de votre projet',
      subtitle:
        'Une question, un projet en tête ? Écrivez-nous, notre équipe vous répond sous 24h ouvrées.',
      infoTitle: 'Nos coordonnées',
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        subject: 'Sujet',
        message: 'Votre message',
        namePlaceholder: 'Jean Dupont',
        emailPlaceholder: 'jean.dupont@entreprise.com',
        subjectPlaceholder: 'Demande de devis, question...',
        messagePlaceholder: 'Décrivez votre projet ou votre besoin...',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé ! Nous vous répondons sous 24h ouvrées.',
        error: 'Une erreur est survenue. Réessayez ou contactez-nous par email directement.',
      },
    },
    footer: {
      tagline: 'Votre partenaire de confiance pour l\'infrastructure IT, les réseaux et la cybersécurité.',
      services: 'Services',
      company: 'Entreprise',
      contact: 'Contact',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      terms: 'CGV',
      rights: 'Tous droits réservés.',
      servicesList: ['Infrastructure & réseaux', 'Cloud hybride', 'Cybersécurité', 'Télécoms & connectivité', 'Support & supervision 24/7'],
      companyLinks: ['À propos', 'Nos réalisations', 'Carrières', 'Blog', 'Partenaires'],
      address: '24 rue de la Tech, 75011 Paris, France',
      email: 'contact@wecantrans.fr',
      phone: '+33 1 84 80 12 34',
    },
  },
  en: {
    nav: {
      services: 'Services',
      infra: 'Infrastructure',
      why: 'Why us',
      process: 'Process',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Contact Us',
    },
    hero: {
      badge: 'Infrastructure IT & cybersecurity experts',
      title: 'Robust IT infrastructure, secured and available around the clock',
      subtitle:
        'Networking, hybrid cloud, cybersecurity and continuous monitoring. wecantrans designs, deploys and operates critical infrastructure for SMEs and large enterprises, backed by a team of certified engineers.',
      ctaPrimary: 'Get a free quote',
      ctaSecondary: 'Explore our services',
      stats: [
        { value: '150+', label: 'Infrastructures deployed' },
        { value: '99.99%', label: 'Guaranteed uptime' },
        { value: '12 yrs', label: 'Field experience' },
        { value: '24/7', label: 'Monitoring & on-call' },
      ],
    },
    services: {
      tag: 'Our expertise',
      title: 'Complete IT infrastructure, secured and always available',
      subtitle: 'From the server room to the hybrid cloud: we design, deploy and operate your critical systems.',
      items: [
        {
          icon: 'Network',
          title: 'Infrastructure & networking',
          description:
            'Design and deployment of enterprise networks: carrier-grade routers, switches and firewalls (Juniper, Fortinet), cabling and multi-site interconnects.',
        },
        {
          icon: 'Cloud',
          title: 'Hybrid cloud & virtualization',
          description:
            'VMware vSphere and Microsoft Hyper-V environments, migration to AWS/Azure/GCP and hybrid architectures sized for load and resilience.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Cybersecurity',
          description:
            'Penetration testing, security operations center (SOC), system hardening and compliance with GDPR, NIS2, PCI-DSS and ISO 27001.',
        },
        {
          icon: 'Wifi',
          title: 'Telecoms & connectivity',
          description:
            'SD-WAN links, IP backbones and secure interconnections between your sites, branches and data centers.',
        },
        {
          icon: 'Code2',
          title: 'Software development & ERP',
          description:
            'Custom business applications, ERP integrations and web portals, built to run on reliable, secured infrastructure.',
        },
        {
          icon: 'Headset',
          title: '24/7 support & monitoring',
          description:
            'Proactive monitoring, on-call technical support and operational maintenance to guarantee the continuity of your services.',
        },
      ],
    },
    infra: {
      tag: 'Infrastructure & reliability',
      title: 'Infrastructure engineered for high availability',
      subtitle:
        'Redundant architectures, continuous monitoring and disaster recovery plans so your services stay online, no matter what.',
      stats: [
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '< 15 min', label: 'Guaranteed RTO' },
        { value: 'Multi-AZ', label: 'Redundant architectures' },
        { value: '24/7', label: 'Technical monitoring' },
      ],
      items: [
        {
          icon: 'Layers',
          title: 'Redundant architecture',
          description:
            'Multi-zone and multi-region deployments that eliminate single points of failure and guarantee service continuity.',
        },
        {
          icon: 'Activity',
          title: 'High availability',
          description:
            'Automatic failover, load balancing and active-active clusters to absorb outages with no perceptible downtime.',
        },
        {
          icon: 'RefreshCw',
          title: 'Disaster recovery plan',
          description:
            'Documented and regularly tested DRP/BCP, with RTO/RPO targets calibrated to the criticality of your systems.',
        },
        {
          icon: 'Radar',
          title: '24/7 monitoring',
          description:
            'Real-time monitoring, proactive alerting and on-call technical support to catch and fix incidents before they impact your users.',
        },
        {
          icon: 'Network',
          title: 'Scalability & load balancing',
          description:
            'Smart traffic distribution and auto-scaling to absorb traffic spikes without any performance degradation.',
        },
        {
          icon: 'HardDrive',
          title: 'Backups & resilience',
          description:
            'Encrypted backups, geo-replicated data and regular restore testing for proven, battle-tested resilience.',
        },
      ],
    },
    why: {
      tag: 'Why wecantrans',
      title: 'An infrastructure partner that makes the difference',
      subtitle: 'We combine senior engineering with operational rigor to deliver infrastructure that holds up under real conditions.',
      items: [
        {
          icon: 'Users',
          title: 'Certified engineers',
          description:
            'A team certified on the technologies we deploy (networking, virtualization, security), averaging 10 years of field experience. No juniors on your critical infrastructure.',
        },
        {
          icon: 'Gauge',
          title: 'Guaranteed SLA & on-call support',
          description:
            'Contractual uptime commitments, continuous monitoring and technical on-call support. You know exactly what to expect, with no surprises.',
        },
        {
          icon: 'Lock',
          title: 'Security by design',
          description:
            'Security is built into every architecture from the start. GDPR, NIS2, PCI-DSS and ISO 27001 compliance applied to every deployment.',
        },
        {
          icon: 'Handshake',
          title: 'Long-term partnership',
          description:
            '85% of our clients renew their trust. We operate your infrastructure over the long run, not just for the duration of a project.',
        },
      ],
    },
    process: {
      tag: 'Our methodology',
      title: 'A rigorous process, from audit to operations',
      subtitle: 'Four structured steps to deploy infrastructure you can rely on, and keep it that way.',
      steps: [
        {
          number: '01',
          title: 'Technical audit & scoping',
          description:
            'Assessment of your current environment, risk and failure-point mapping, and identification of your availability and security requirements.',
        },
        {
          number: '02',
          title: 'Architecture & quote',
          description:
            'Design of the target architecture (redundancy, security, scalability), validated technology choices and a detailed quote within 48h.',
        },
        {
          number: '03',
          title: 'Deployment & migration',
          description:
            'Phased rollout with load and failover testing, minimal-downtime migration and validation at every milestone.',
        },
        {
          number: '04',
          title: 'Monitoring & ongoing support',
          description:
            '24/7 monitoring, technical on-call support and continuous optimization. We stay by your side well after go-live.',
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
          description: 'Ideal for SMEs structuring their IT infrastructure.',
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
      title: 'Ready to secure and future-proof your IT infrastructure?',
      subtitle: 'Let\'s talk about your project. Free technical scoping, quote within 48h, no obligation.',
      button: 'Get a free quote',
      secondary: 'Book a call',
    },
    legal: {
      tag: 'Legal information',
      title: 'Legal notice',
      subtitle:
        'In accordance with Articles 6-III and 19 of French Law No. 2004-575 of 21 June 2004 on confidence in the digital economy, the following information is disclosed to users of this website.',
      editorTitle: 'Site publisher',
      companyLabel: 'Company name',
      legalFormLabel: 'Legal form',
      rcsLabel: 'Trade register (RCS)',
      siretLabel: 'SIRET',
      apeLabel: 'APE code',
      vatLabel: 'Intra-community VAT',
      addressLabel: 'Registered office',
      contactLabel: 'Contact',
    },
    contact: {
      tag: 'Contact',
      title: "Let's talk about your project",
      subtitle:
        "Have a question or a project in mind? Write to us — our team replies within 24 business hours.",
      infoTitle: 'Our contact details',
      form: {
        name: 'Full name',
        email: 'Email address',
        subject: 'Subject',
        message: 'Your message',
        namePlaceholder: 'John Smith',
        emailPlaceholder: 'john.smith@company.com',
        subjectPlaceholder: 'Quote request, question...',
        messagePlaceholder: 'Describe your project or need...',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent! We\'ll get back to you within 24 business hours.',
        error: 'Something went wrong. Please try again or email us directly.',
      },
    },
    footer: {
      tagline: 'Your trusted partner for IT infrastructure, networking and cybersecurity.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      terms: 'Terms & conditions',
      rights: 'All rights reserved.',
      servicesList: ['Infrastructure & networking', 'Hybrid cloud', 'Cybersecurity', 'Telecoms & connectivity', '24/7 support & monitoring'],
      companyLinks: ['About us', 'Our work', 'Careers', 'Blog', 'Partners'],
      address: '24 Tech Street, 75011 Paris, France',
      email: 'contact@wecantrans.fr',
      phone: '+33 1 84 80 12 34',
    },
  },
};


