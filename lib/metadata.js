/**
 * SEO Metadata helper pour génération cohérente des métadonnées sur toutes les pages
 *
 * POURQUOI centraliser les métadonnées:
 * - Cohérence SEO sur tout le site
 * - Évite duplication de code
 * - Facilite modification globale (changement de domaine, format Open Graph)
 * - Type-safe avec JSDoc
 *
 * FONCTIONNALITÉS:
 * - Open Graph (partage Facebook/LinkedIn)
 * - Twitter Cards (partage Twitter)
 * - Canonical URLs (évite duplicate content)
 * - Robots meta (noindex pour pages légales)
 *
 * @module metadata
 */

const SITE_NAME = 'Cabinet ECIFEC';
const SITE_URL = 'https://ecifec.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.webp`;

/**
 * Generate metadata for a page
 * @param {Object} options - Metadata options
 * @param {string} options.title - Page title (without site name)
 * @param {string} options.description - Page description
 * @param {string} options.path - Page path (e.g., '/services/comptabilite')
 * @param {string} [options.image] - Custom OG image URL
 * @param {string} [options.type='website'] - OG type
 * @param {boolean} [options.noIndex=false] - Whether to noindex the page
 * @returns {Object} Next.js metadata object
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noIndex = false,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description,

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type,
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Robots
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(service) {
  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.id}`,
    image: service.image ? `${SITE_URL}${service.image}` : undefined,
  });
}

/**
 * Generate metadata for sector pages
 */
export function generateSectorMetadata(sector) {
  return generatePageMetadata({
    title: sector.title,
    description: sector.description,
    path: `/secteurs/${sector.id}`,
    image: sector.image ? `${SITE_URL}${sector.image}` : undefined,
  });
}

/**
 * Home page metadata
 */
export const homeMetadata = generatePageMetadata({
  title: 'Cabinet ECIFEC - Expert-Comptable à Sarcelles',
  description:
    "Cabinet d'expertise comptable ECIFEC à Sarcelles. Plus de 35 ans d'expérience. Accompagnement personnalisé pour TPE, PME, BTP, professions libérales et restauration.",
  path: '',
});

/**
 * FAQ page metadata
 */
export const faqMetadata = generatePageMetadata({
  title: 'FAQ - Questions fréquentes',
  description:
    'Retrouvez les réponses aux questions fréquentes sur nos services comptables, fiscaux et sociaux. Expert-comptable à Sarcelles.',
  path: '/faq',
});

/**
 * Contact page metadata
 */
export const contactMetadata = generatePageMetadata({
  title: 'Contactez-nous - Expert-Comptable à Sarcelles',
  description:
    'Contactez le Cabinet ECIFEC à Sarcelles. Prenez rendez-vous avec nos experts-comptables. Devis gratuit et personnalisé.',
  path: '/contact',
});

/**
 * Team page metadata
 */
export const teamMetadata = generatePageMetadata({
  title: 'Notre Équipe - Experts-Comptables à Sarcelles',
  description:
    "Découvrez l'équipe du Cabinet ECIFEC : experts-comptables diplômés, assistants comptables et gestionnaires de paie à votre service.",
  path: '/equipe',
});

/**
 * Why choose us page metadata
 */
export const whyChooseUsMetadata = generatePageMetadata({
  title: 'Pourquoi nous choisir - Nos avantages',
  description:
    'Plus de 35 ans d\'expérience, expertise sectorielle, accompagnement personnalisé et outils digitaux. Découvrez les avantages du Cabinet ECIFEC.',
  path: '/pourquoi-nous-choisir',
});

/**
 * Resources page metadata
 */
export const resourcesMetadata = generatePageMetadata({
  title: 'Ressources - Outils et guides pratiques',
  description:
    'Accédez à nos ressources : calendrier fiscal, simulateurs, guides pratiques et outils pour entrepreneurs et dirigeants.',
  path: '/ressources',
});

/**
 * Services list page metadata
 */
export const servicesMetadata = generatePageMetadata({
  title: 'Nos Services - Expert-Comptable à Sarcelles',
  description:
    'Création d\'entreprise, comptabilité, fiscalité, social, juridique, audit et conseil. Découvrez tous nos services d\'expertise comptable.',
  path: '/services',
});

/**
 * Sectors list page metadata
 */
export const sectorsMetadata = generatePageMetadata({
  title: "Nos Secteurs d'Activité - Expertise sectorielle",
  description:
    'BTP, artisanat, professions libérales, commerce, transport, restauration. Une expertise sectorielle pour mieux vous accompagner.',
  path: '/secteurs',
});

/**
 * Legal pages metadata
 */
export const legalMetadata = generatePageMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du Cabinet ECIFEC - Expert-comptable à Sarcelles.',
  path: '/mentions-legales',
  noIndex: true,
});

export const privacyMetadata = generatePageMetadata({
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles du Cabinet ECIFEC.',
  path: '/politique-confidentialite',
  noIndex: true,
});

export const termsMetadata = generatePageMetadata({
  title: 'Conditions générales de vente',
  description: 'Conditions générales de vente du Cabinet ECIFEC.',
  path: '/cgv',
  noIndex: true,
});

/**
 * Resources sub-pages metadata
 */
export const calendrierMetadata = generatePageMetadata({
  title: 'Calendrier Fiscal et Social',
  description:
    'Consultez le calendrier des échéances fiscales et sociales 2025. Dates clés, déclarations TVA, IS, DSN, URSSAF. Cabinet ECIFEC.',
  path: '/ressources/calendrier',
});

export const simulateursMetadata = generatePageMetadata({
  title: 'Simulateurs URSSAF',
  description:
    'Accédez aux simulateurs officiels de l\'URSSAF pour estimer vos charges sociales, cotisations et revenus. Outils gratuits pour entrepreneurs.',
  path: '/ressources/simulateurs',
});

export const structureServiceMetadata = generatePageMetadata({
  title: 'Structure de Service',
  description:
    'Découvrez l\'organisation complète de votre dossier : juridique, fiscal, social, comptabilité et personnel. Cabinet ECIFEC.',
  path: '/ressources/structure-service',
});

/**
 * Contact confirmation metadata
 */
export const contactConfirmationMetadata = generatePageMetadata({
  title: 'Message envoyé avec succès',
  description: 'Votre message a bien été envoyé au Cabinet ECIFEC. Nous vous répondrons dans les plus brefs délais.',
  path: '/contact/confirmation',
  noIndex: true,
});
