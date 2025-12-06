/**
 * Structured Data (Schema.org JSON-LD) pour SEO
 *
 * POURQUOI structured data est important:
 * - Aide Google à comprendre le contenu du site (meilleur référencement)
 * - Active les rich snippets (résultats enrichis dans Google)
 * - Améliore appearance dans Google Maps / Google Business
 * - Éligible pour Knowledge Panel Google
 *
 * SCHEMAS IMPLÉMENTÉS:
 * 1. WebSite: Informations générales sur le site
 * 2. AccountingService (Organization): Détails sur le cabinet d'expertise comptable
 *    - Coordonnées (adresse, téléphone, email)
 *    - Horaires d'ouverture
 *    - Zone de service (Sarcelles, Val-d'Oise, Île-de-France)
 *    - Catalogue de services
 *    - Secteurs d'expertise
 *    - Appartenance à l'Ordre des Experts-Comptables
 *
 * FORMAT: JSON-LD (JavaScript Object Notation for Linked Data)
 * - Recommandé par Google (plus simple que Microdata ou RDFa)
 * - Inséré dans <script type="application/ld+json">
 * - Validable via Google Rich Results Test
 *
 * RÉFÉRENCE:
 * - https://schema.org/AccountingService
 * - https://developers.google.com/search/docs/appearance/structured-data
 *
 * @component
 */

'use client';
import { CABINET_INFO } from '@/lib/data/navigation';

export default function StructuredData() {
  // Schema WebSite: informations de base pour affichage dans les résultats Google
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ecifec.com/#website',
    url: 'https://ecifec.com',
    name: 'Cabinet ECIFEC',
    description: "Cabinet d'expertise comptable ECIFEC à Sarcelles",
    publisher: {
      '@id': 'https://ecifec.com/#organization',
    },
  };

  // Schema AccountingService: détails complets sur le cabinet (rich snippets Google)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': 'https://ecifec.com/#organization',
    name: 'Cabinet ECIFEC',
    alternateName: 'ECIFEC Expert-Comptable',
    url: 'https://ecifec.com',
    logo: 'https://ecifec.com/images/logo.webp',
    image: 'https://ecifec.com/images/logo.webp',
    description:
      "Cabinet d'expertise comptable ECIFEC à Sarcelles. Accompagnement personnalisé pour les entreprises : comptabilité, fiscalité, social, juridique. Spécialisé BTP, professions libérales, commerce, transport.",
    foundingDate: '2007',
    slogan: 'Une relation de confiance',
    telephone: CABINET_INFO.contact.phone,
    email: CABINET_INFO.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CABINET_INFO.address.street,
      addressLocality: CABINET_INFO.address.city,
      postalCode: CABINET_INFO.address.postal,
      addressCountry: 'FR',
      addressRegion: 'Île-de-France',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.9914',
      longitude: '2.3784',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Sarcelles',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Val-d\'Oise',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Île-de-France',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00',
        description: 'Sur rendez-vous uniquement',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement, Chèque',
    serviceType: [
      'Expert-comptable',
      'Comptabilité',
      'Gestion fiscale',
      'Gestion sociale',
      'Conseil juridique',
      'Audit',
      'Création d\'entreprise',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services comptables',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création d\'entreprise',
            description:
              'Accompagnement complet dans la création de votre entreprise : choix du statut juridique, formalités administratives, conseils personnalisés.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestion comptable',
            description:
              'Tenue complète de votre comptabilité : saisies, lettrage, révision des comptes, établissement des liasses fiscales.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestion fiscale',
            description:
              'Conformité fiscale et optimisation : TVA, IS, CVAE, CFE, assistance en cas de contrôle.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestion sociale',
            description:
              'Bulletins de paie, DSN, contrats de travail, ruptures conventionnelles, veille sociale.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Service juridique',
            description:
              'Assemblées générales, modifications statutaires, opérations sur capital, formalités légales.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit & conseil',
            description:
              'Audit comptable et financier, conformité, diagnostic, due diligence, conseil stratégique.',
          },
        },
      ],
    },
    knowsAbout: [
      'BTP',
      'Artisanat',
      'Commerce',
      'Transport',
      'Professions libérales',
      'Services aux entreprises',
      'Restauration',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Ordre des Experts-Comptables',
      url: 'https://www.experts-comptables.fr',
    },
    sameAs: [
      CABINET_INFO.social.linkedin !== '#' ? CABINET_INFO.social.linkedin : null,
      CABINET_INFO.social.facebook !== '#' ? CABINET_INFO.social.facebook : null,
    ].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
