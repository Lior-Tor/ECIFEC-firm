'use client';
import { CABINET_INFO } from '@/lib/data/navigation';

export default function StructuredData() {
  // WebSite schema for site name in Google results
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

  // Organization/AccountingService schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': 'https://ecifec.com/#organization',
    name: 'Cabinet ECIFEC',
    alternateName: 'ECIFEC Expert-Comptable',
    url: 'https://ecifec.com',
    logo: 'https://ecifec.com/images/logo.png',
    image: 'https://ecifec.com/images/logo.png',
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
