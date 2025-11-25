export const CABINET_INFO = {
  name: 'Cabinet ECIFEC',
  tagline: 'Une relation de confiance',
  founded: '2007',
  experience: '35 ans',
  address: {
    street: '3 Bd Albert Camus',
    city: 'Sarcelles',
    postal: '95200',
    country: 'France',
  },
  contact: {
    phone: '01 34 04 35 05',
    phone2: '06 46 78 30 42',
    email: 'expert-comptable@ecifec95.com',
    hours: 'Lundi - Jeudi : 9h00 - 18h00 | Vendredi : 9h00 - 17h00 | Samedi : Fermé | Dimanche : Sur rendez-vous',
  },
  zone: 'Bassin Parisien, National',
  social: {
    linkedin: '#',
    facebook: '#',
  },
};

export const NAVIGATION_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Pourquoi nous choisir', href: '/pourquoi-nous-choisir' },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: "Création d'entreprise", href: '/services/creation', icon: 'Business' },
      { label: 'Gestion comptable', href: '/services/comptabilite', icon: 'Receipt' },
      { label: 'Gestion fiscale', href: '/services/fiscal', icon: 'AccountBalance' },
      { label: 'Gestion sociale', href: '/services/social', icon: 'People' },
      { label: 'Service juridique', href: '/services/juridique', icon: 'Gavel' },
      { label: 'Audit & conseil', href: '/services/audit', icon: 'FindInPage' },
      { label: 'Management & contrôle de gestion', href: '/services/management', icon: 'Assessment' },
      { label: "Finance d'entreprise", href: '/services/finance', icon: 'TrendingUp' },
      { label: 'Procédure collective', href: '/services/procedure-collective', icon: 'Gavel' },
      { label: 'Mission ponctuelle', href: '/services/mission-ponctuelle', icon: 'Assignment' },
    ],
  },
  {
    label: 'Secteurs',
    href: '/secteurs',
    submenu: [
      { label: 'Artisanat & BTP', href: '/secteurs/btp', icon: 'Construction' },
      { label: 'Commerce & Distribution', href: '/secteurs/commerciaux', icon: 'Storefront' },
      { label: 'Transport & Logistique', href: '/secteurs/transport', icon: 'LocalShipping' },
      { label: 'Professions libérales', href: '/secteurs/liberales', icon: 'LocalHospital' },
      { label: 'Services aux Entreprises (B2B)', href: '/secteurs/services-entreprises', icon: 'BusinessCenter' },
      { label: 'Services aux Particuliers (B2C)', href: '/secteurs/services-particuliers', icon: 'People' },
    ],
  },
  {
    label: 'Ressources',
    href: '/ressources',
    submenu: [
      { label: 'Calendrier Fiscal et Social', href: '/ressources/calendrier', icon: 'CalendarToday' },
      { label: 'Simulateurs', href: '/ressources/simulateurs', icon: 'Calculate' },
      { label: 'Structure de Service', href: '/ressources/structure-service', icon: 'AccountTree' },
    ],
  },
  { label: 'Équipe', href: '/equipe' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
