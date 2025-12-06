/**
 * Données statiques des services proposés par ECIFEC
 *
 * STRUCTURE: Chaque service contient:
 * - id: slug unique pour routing
 * - title: nom du service affiché
 * - icon: nom du composant Material-UI Icon
 * - shortDescription: résumé court (cartes preview)
 * - description: description longue (pages détails)
 * - details: liste de points clés
 * - process: étapes du processus (objet {step, description})
 * - faq: questions fréquentes (objet {question, answer})
 *
 * UTILISATION:
 * - Page services (liste): /services/page.js
 * - Page service détail: /services/[slug]/page.js
 * - Preview homepage: components/home/ServicesPreview.jsx
 *
 * @module data/services
 */

export const SERVICES = [
  {
    id: 'creation',
    title: "Création d'entreprise",
    icon: 'Business',
    shortDescription: 'Accompagnement complet pour démarrer votre activité',
    description: "Nous vous accompagnons dans toutes les étapes de création de votre entreprise : choix du statut juridique optimal, accompagnement dans les formalités administratives, et conseils personnalisés pour démarrer sur de bonnes bases.",
    details: [
      'Choix du statut juridique adapté',
      'Accompagnement dans les formalités',
      'Conseils de démarrage',
      'Optimisation fiscale dès la création',
    ],
    process: [
      {
        step: 'Étape 1 : Rendez-vous découverte',
        description: 'Analyse de votre projet, de votre activité et de vos objectifs. Évaluation de vos besoins en termes de structure juridique.',
      },
      {
        step: 'Étape 2 : Choix du statut juridique',
        description: 'Présentation des différentes options (SARL, SAS, EURL, auto-entrepreneur...) avec avantages/inconvénients selon votre situation.',
      },
      {
        step: 'Étape 3 : Rédaction des statuts',
        description: 'Élaboration des statuts de votre société avec clauses personnalisées selon vos besoins spécifiques.',
      },
      {
        step: 'Étape 4 : Formalités administratives',
        description: 'Publication au journal d\'annonces légales, constitution du dossier Infogreffe, demandes d\'immatriculation.',
      },
      {
        step: 'Étape 5 : Immatriculation',
        description: 'Obtention du KBIS, numéro SIRET, mise en place comptable et ouverture de compte bancaire professionnel.',
      },
      {
        step: 'Étape 6 : Accompagnement post-création',
        description: 'Conseils de démarrage, mise en place de la comptabilité, formation aux obligations et suivi des premières échéances.',
      },
    ],
    faq: [
      {
        question: 'Quel statut juridique choisir pour mon entreprise ?',
        answer: 'Le choix dépend de nombreux critères : nature de l\'activité, nombre d\'associés, régime fiscal souhaité, protection du patrimoine personnel, etc. Nous analysons votre situation pour vous recommander le statut le plus adapté.',
      },
      {
        question: 'Combien de temps prend la création d\'une entreprise ?',
        answer: 'En moyenne, comptez entre 7 et 15 jours ouvrés selon le statut choisi et la complexité du dossier. Nous gérons toutes les démarches pour accélérer le processus.',
      },
      {
        question: 'Quels sont les coûts de création ?',
        answer: 'Les coûts varient selon le statut : frais de greffe, annonce légale, honoraires. Nous vous fournissons un devis détaillé incluant tous les frais avant de démarrer.',
      },
      {
        question: 'Ai-je besoin d\'un apport en capital ?',
        answer: 'Pour une SARL ou SAS, 1€ de capital suffit légalement, mais nous vous conseillons un capital adapté à votre activité pour rassurer vos partenaires et financer vos premiers investissements.',
      },
      {
        question: 'Puis-je créer mon entreprise en étant salarié ?',
        answer: 'Oui, c\'est possible sauf clause d\'exclusivité dans votre contrat de travail. Nous vous aidons à vérifier votre situation et à respecter vos obligations vis-à-vis de votre employeur.',
      },
    ],
  },
  {
    id: 'comptabilite',
    title: 'Gestion comptable',
    icon: 'Receipt',
    shortDescription: 'Tenue complète de votre comptabilité',
    description: 'Prise en charge complète de votre comptabilité : saisies comptables, lettrage, révision des comptes et établissement des liasses fiscales en toute conformité.',
    details: [
      'Saisies comptables mensuelles',
      'Lettrage et rapprochements bancaires',
      'Révision des comptes',
      'Établissement des liasses fiscales',
      'Situations intermédiaires sur demande',
    ],
    process: [
      {
        step: 'Étape 1 : Transmission des documents',
        description: 'Envoyez vos factures, relevés bancaires et justificatifs par email, courrier ou dépôt en PDF/photo. Nous numérisons tous vos documents.',
      },
      {
        step: 'Étape 2 : Saisie comptable',
        description: 'Enregistrement de toutes vos opérations dans notre logiciel comptable certifié avec contrôles de cohérence.',
      },
      {
        step: 'Étape 3 : Lettrage et rapprochement',
        description: 'Rapprochement bancaire, lettrage des comptes clients et fournisseurs pour une comptabilité à jour.',
      },
      {
        step: 'Étape 4 : Révision mensuelle',
        description: 'Contrôle de cohérence, vérification des comptes et correction des éventuelles anomalies.',
      },
      {
        step: 'Étape 5 : Points de situation',
        description: 'Sur demande, nous établissons votre situation mensuelle en PDF : indicateurs clés (CA, trésorerie, charges, marges), grand livre, SIG, rapport de situation financière.',
      },
      {
        step: 'Étape 6 : Clôture annuelle',
        description: 'Révision complète des comptes, établissement du bilan, compte de résultat et liasse fiscale.',
      },
    ],
    faq: [
      {
        question: 'À quelle fréquence dois-je transmettre mes documents ?',
        answer: 'Idéalement chaque mois pour une comptabilité à jour. Certains clients préfèrent transmettre tous les trimestres. Nous nous adaptons à vos contraintes tout en respectant les délais légaux.',
      },
      {
        question: 'Comment puis-je consulter ma comptabilité ?',
        answer: 'Vous pouvez demander à consulter votre comptabilité à tout moment. Nous vous transmettons vos documents et rapports dans les 24h. Vous recevez vos comptes, indicateurs clés et tous documents demandés en PDF.',
      },
      {
        question: 'Que faire si j\'ai perdu des factures ?',
        answer: 'Nous vous aidons à reconstituer les documents manquants : demandes de duplicata auprès des fournisseurs, attestations, etc. La dématérialisation limite ces risques.',
      },
      {
        question: 'Quand reçois-je mon bilan annuel ?',
        answer: 'Le bilan est généralement prêt 4 à 6 semaines après la clôture de l\'exercice, selon la complexité de votre dossier et la rapidité de transmission des pièces.',
      },
      {
        question: 'Puis-je changer d\'expert-comptable en cours d\'année ?',
        answer: 'Oui, c\'est possible. Nous nous chargeons de la reprise du dossier auprès de votre ancien comptable et nous assurons une transition selon les règles de notre code déontologique.',
      },
    ],
  },
  {
    id: 'fiscal',
    title: 'Gestion fiscale',
    icon: 'AccountBalance',
    shortDescription: 'Optimisation et conformité fiscale',
    description: 'Nous assurons la conformité fiscale de votre entreprise tout en recherchant les optimisations possibles : TVA, IS, CVAE, CFE.',
    details: [
      'Déclarations de TVA',
      "Impôt sur les Sociétés (IS)",
      'CVAE et CFE',
      'Optimisation fiscale',
      'Assistance en cas de contrôle',
    ],
    process: [
      {
        step: 'Étape 1 : Audit fiscal',
        description: 'Analyse de votre situation fiscale actuelle, identification des risques et opportunités d\'optimisation.',
      },
      {
        step: 'Étape 2 : TVA mensuelle/trimestrielle',
        description: 'Calcul de la TVA collectée et déductible, vérification de cohérence et télédéclaration dans les délais légaux.',
      },
      {
        step: 'Étape 3 : Acomptes IS et TVA',
        description: 'Calcul et déclaration des acomptes d\'Impôt sur les Sociétés en mars, juin, septembre et décembre. Gestion des acomptes de TVA annuelle.',
      },
      {
        step: 'Étape 4 : Déclarations annuelles',
        description: 'Établissement de la liasse fiscale (2031, 2033, 2035 selon régime), déclaration de résultats et annexes.',
      },
      {
        step: 'Étape 5 : CVAE et CFE',
        description: 'Déclaration et paiement de la Cotisation sur la Valeur Ajoutée et Cotisation Foncière des Entreprises.',
      },
      {
        step: 'Étape 6 : Optimisation',
        description: 'Recherche d\'optimisations légales : amortissements accélérés, dispositifs fiscaux, crédits d\'impôt.',
      },
    ],
    faq: [
      {
        question: 'Quelle est la différence entre TVA et IS ?',
        answer: 'La TVA est un impôt sur la consommation que vous collectez pour l\'État. L\'IS est un impôt sur les bénéfices de votre société. Les deux sont indépendants.',
      },
      {
        question: 'Puis-je récupérer la TVA sur tous mes achats ?',
        answer: 'Presque tous, sauf exceptions : carburant (partiellement), véhicules de tourisme, frais de réception. Nous vérifions systématiquement la déductibilité.',
      },
      {
        question: 'Comment réduire légalement mes impôts ?',
        answer: 'Plusieurs leviers existent : optimisation des amortissements, provisions réglementées, crédits d\'impôt (recherche, formation), choix du régime fiscal adapté.',
      },
      {
        question: 'Suis-je soumis à la CVAE ?',
        answer: 'La CVAE concerne les entreprises dont le CA HT dépasse 500 000€. Le taux varie selon le CA. Nous calculons votre cotisation et gérons la déclaration.',
      },
      {
        question: 'Que faire en cas de contrôle fiscal ?',
        answer: 'Nous vous représentons lors du contrôle, vérifions les redressements proposés, négocions avec l\'administration et vous défendons en cas de contentieux.',
      },
    ],
  },
  {
    id: 'social',
    title: 'Gestion sociale',
    icon: 'People',
    shortDescription: 'Gestion complète de vos obligations sociales',
    description: "De l'établissement des bulletins de paie aux déclarations sociales, nous gérons l'ensemble de vos obligations sociales avec rigueur et expertise.",
    details: [
      'Bulletins de paie mensuels',
      'DSN (Déclaration Sociale Nominative)',
      'Contrats de travail',
      'Gestion des ruptures conventionnelles',
      'Veille sociale et conseil',
    ],
    process: [
      {
        step: 'Étape 1 : Collecte des variables',
        description: 'Transmission des éléments variables : heures travaillées, absences, primes, notes de frais avant le 28 du mois.',
      },
      {
        step: 'Étape 2 : Établissement des bulletins',
        description: 'Calcul des cotisations sociales, net à payer et préparation des bulletins conformes à la législation en vigueur.',
      },
      {
        step: 'Étape 3 : Vérification et transmission',
        description: 'Vérification des bulletins, envoi 48 heures après réception de vos instructions, et transmission au chef d\'entreprise.',
      },
      {
        step: 'Étape 4 : DSN mensuelle',
        description: 'Transmission automatique de la Déclaration Sociale Nominative aux organismes sociaux (URSSAF, retraite, prévoyance).',
      },
      {
        step: 'Étape 5 : Paiement des cotisations',
        description: 'Calcul des montants à payer et préparation des échéanciers de cotisations sociales.',
      },
      {
        step: 'Étape 6 : Suivi et conseil',
        description: 'Veille sur les évolutions législatives, conseils sur les dispositifs d\'aide à l\'emploi et optimisations possibles.',
      },
    ],
    faq: [
      {
        question: 'Quand dois-je vous transmettre les variables de paie ?',
        answer: 'Avant le 28 du mois pour réception des bulletins 48 heures après transmission de vos instructions.',
      },
      {
        question: 'Gérez-vous les contrats de travail et avenants ?',
        answer: 'Oui, nous rédigeons tous types de contrats (CDI, CDD, apprentissage, stage) et avenants conformes au Code du travail et à votre convention collective.',
      },
      {
        question: 'Que faire en cas de contrôle URSSAF ?',
        answer: 'Nous vous assistons lors du contrôle : préparation des documents, présence si nécessaire et défense de vos intérêts. Notre rigueur limite les risques de redressement.',
      },
      {
        question: 'Puis-je bénéficier d\'aides à l\'embauche ?',
        answer: 'Oui, nous vous informons sur les dispositifs existants (contrats aidés, exonérations, primes) et gérons les démarches administratives pour en bénéficier.',
      },
      {
        question: 'Comment gérer une rupture conventionnelle ?',
        answer: 'Nous vous accompagnons de A à Z : calcul de l\'indemnité, rédaction de la convention, dépôt à la DREETS et établissement du solde de tout compte.',
      },
    ],
  },
  {
    id: 'juridique',
    title: 'Service juridique',
    icon: 'Gavel',
    shortDescription: 'Accompagnement juridique de votre société',
    description: "Nous vous assistons dans tous les actes juridiques de la vie de votre société : assemblées générales, modifications statutaires, opérations de capital.",
    details: [
      'Assemblées Générales Ordinaires (AGO)',
      'Assemblées Générales Extraordinaires (AGE)',
      'Modifications statutaires',
      'Cession de parts sociales',
      'Cession de fonds de commerce',
      'Formalités légales',
    ],
    process: [
      {
        step: 'Étape 1 : Analyse du besoin',
        description: 'Identification de l\'acte juridique à réaliser et de ses implications légales et fiscales.',
      },
      {
        step: 'Étape 2 : Préparation des documents',
        description: 'Rédaction des résolutions, modifications statutaires, rapports de gérance selon les besoins.',
      },
      {
        step: 'Étape 3 : Convocation',
        description: 'Préparation et envoi des convocations aux associés selon les formes légales requises.',
      },
      {
        step: 'Étape 4 : Assemblée générale',
        description: 'Tenue de l\'assemblée, vote des résolutions, rédaction du procès-verbal.',
      },
      {
        step: 'Étape 5 : Formalités',
        description: 'Publication au JAL si nécessaire, dépôt au greffe, enregistrement aux impôts.',
      },
      {
        step: 'Étape 6 : Mise à jour',
        description: 'Mise à jour du registre des décisions, archivage et suivi des obligations futures.',
      },
    ],
    faq: [
      {
        question: 'Quand dois-je tenir une assemblée générale ?',
        answer: 'Une AGO doit être tenue au moins une fois par an dans les 6 mois suivant la clôture de l\'exercice pour approuver les comptes. Une AGE est nécessaire pour toute modification statutaire.',
      },
      {
        question: 'Puis-je tenir une AG par visioconférence ?',
        answer: 'Oui, si vos statuts le prévoient. Nous pouvons modifier vos statuts pour autoriser les AG à distance et organiser ces réunions en toute conformité.',
      },
      {
        question: 'Comment modifier mon capital social ?',
        answer: 'Par AGE : augmentation (apport ou incorporation de réserves) ou réduction. Nous gérons toute la procédure : rédaction, publication JAL, formalités au greffe.',
      },
      {
        question: 'Combien coûte une modification statutaire ?',
        answer: 'Les coûts varient selon la nature : frais de greffe, publication JAL, honoraires. Nous vous fournissons un devis précis.',
      },
      {
        question: 'Que risque-t-on en cas de non-respect des obligations ?',
        answer: 'Amendes, nullité des décisions, responsabilité des dirigeants. Nous vous alertons sur vos échéances pour éviter tout risque.',
      },
    ],
  },
  {
    id: 'audit',
    title: 'Audit & conseil',
    icon: 'FindInPage',
    shortDescription: 'Audit comptable et conseil stratégique',
    description: "Nous réalisons des audits comptables et financiers approfondis pour sécuriser vos comptes, identifier les risques et optimiser votre gestion. Nos conseils vous accompagnent dans vos décisions stratégiques.",
    details: [
      'Audit comptable et financier',
      'Audit de conformité fiscale et sociale',
      'Diagnostic et recommandations',
      'Audit d\'acquisition (due diligence)',
      'Conseil stratégique',
    ],
    process: [
      {
        step: 'Étape 1 : Cadrage de la mission',
        description: 'Définition du périmètre, des objectifs et du planning de l\'audit avec vous.',
      },
      {
        step: 'Étape 2 : Collecte des informations',
        description: 'Récupération des documents comptables, fiscaux, sociaux et juridiques nécessaires à l\'analyse.',
      },
      {
        step: 'Étape 3 : Travaux d\'audit',
        description: 'Analyse approfondie des comptes, tests de cohérence, contrôles de conformité, identification des anomalies.',
      },
      {
        step: 'Étape 4 : Entretiens',
        description: 'Échanges avec les dirigeants et collaborateurs pour comprendre les processus et valider nos constats.',
      },
      {
        step: 'Étape 5 : Rapport d\'audit',
        description: 'Rédaction d\'un rapport détaillé avec constats, risques identifiés et recommandations d\'amélioration.',
      },
      {
        step: 'Étape 6 : Présentation et suivi',
        description: 'Présentation des conclusions, plan d\'action et accompagnement dans la mise en œuvre des recommandations.',
      },
    ],
    faq: [
      {
        question: 'Pourquoi faire un audit comptable ?',
        answer: 'Pour sécuriser vos comptes avant une opération (cession, levée de fonds), identifier des risques fiscaux ou sociaux, améliorer vos processus ou rassurer vos partenaires.',
      },
      {
        question: 'Combien de temps dure un audit ?',
        answer: 'Selon la taille de l\'entreprise et le périmètre : de 2 jours pour une TPE à plusieurs semaines pour une PME. Nous établissons un planning adapté à vos contraintes.',
      },
      {
        question: 'Un audit est-il obligatoire ?',
        answer: 'Non, sauf si vous dépassez certains seuils. Mais un audit volontaire apporte souvent une grande valeur ajoutée.',
      },
      {
        question: 'Quelle différence entre audit et révision ?',
        answer: 'La révision est un contrôle de cohérence rapide lors de la clôture. L\'audit est une analyse approfondie avec tests substantifs et rapport formel.',
      },
      {
        question: 'Un audit peut-il révéler des fraudes ?',
        answer: 'C\'est l\'un des objectifs. Nos tests permettent d\'identifier les anomalies, erreurs et potentielles fraudes pour protéger l\'entreprise.',
      },
    ],
  },
  {
    id: 'management',
    title: 'Management & contrôle de gestion',
    icon: 'Assessment',
    shortDescription: 'Conseil financier et développement',
    description: "Accompagnement dans vos projets financiers : levées de fonds, recherche de financement, valorisation d'entreprise, prévisionnels et stratégie de développement.",
    details: [
      "Recherche de financement",
      'Levées de fonds',
      "Valorisation d'entreprise",
      'Business plan et prévisionnels',
      'Conseil en investissement',
    ],
    process: [
      {
        step: 'Étape 1 : Analyse de votre projet',
        description: 'Compréhension de vos besoins de financement, objectifs de croissance et contraintes.',
      },
      {
        step: 'Étape 2 : Élaboration du business plan',
        description: 'Construction d\'un business plan solide avec prévisionnels financiers sur 3-5 ans.',
      },
      {
        step: 'Étape 3 : Identification des sources',
        description: 'Recherche des sources de financement adaptées : banques, BPI France, investisseurs, aides publiques.',
      },
      {
        step: 'Étape 4 : Préparation des dossiers',
        description: 'Constitution des dossiers de financement avec tous les éléments requis par les financeurs.',
      },
      {
        step: 'Étape 5 : Accompagnement négociation',
        description: 'Présentation aux financeurs, négociation des conditions et sécurisation des financements.',
      },
      {
        step: 'Étape 6 : Suivi post-financement',
        description: 'Suivi de la mise en place des financements et accompagnement dans l\'utilisation des fonds.',
      },
    ],
    faq: [
      {
        question: 'Comment financer ma croissance ?',
        answer: 'Plusieurs options : autofinancement, emprunt bancaire, crédit-bail, BPI France, investisseurs. Nous analysons la meilleure combinaison selon votre projet.',
      },
      {
        question: 'Comment valoriser mon entreprise ?',
        answer: 'Nous utilisons plusieurs méthodes (multiples sectoriels, DCF, actif net réévalué) pour déterminer une valorisation cohérente de votre entreprise.',
      },
      {
        question: 'Dois-je ouvrir mon capital ?',
        answer: 'Cela dépend de vos besoins financiers et vision. Nous vous aidons à peser le pour (ressources) et le contre (dilution, gouvernance).',
      },
      {
        question: 'Comment établir un prévisionnel fiable ?',
        answer: 'En s\'appuyant sur vos historiques, contrats signés, carnet de commandes et tendances du marché. Nous construisons des scénarios réalistes.',
      },
      {
        question: 'Puis-je racheter un concurrent ?',
        answer: 'Si votre structure financière le permet. Nous vous accompagnons : valorisation de la cible, due diligence, montage financier et négociation.',
      },
    ],
  },
  {
    id: 'finance',
    title: "Finance d'entreprise",
    icon: 'TrendingUp',
    shortDescription: 'Pilotage et contrôle de gestion avancé',
    description: "Mise en place d'outils de pilotage et de contrôle de gestion pour optimiser votre performance : tableaux de bord, SIG, budgets prévisionnels et analyse de rentabilité.",
    details: [
      'Tableaux de bord de gestion',
      'Soldes Intermédiaires de Gestion (SIG)',
      'Budgets prévisionnels',
      'Analyse de rentabilité',
      'Indicateurs de performance (KPI)',
    ],
    process: [
      {
        step: 'Étape 1 : Diagnostic',
        description: 'Analyse de vos besoins en pilotage, identification des indicateurs clés pertinents pour votre activité.',
      },
      {
        step: 'Étape 2 : Conception des outils',
        description: 'Création de tableaux de bord personnalisés et mise en place des processus de suivi.',
      },
      {
        step: 'Étape 3 : Collecte des données',
        description: 'Mise en place de la collecte régulière des données comptables et opérationnelles.',
      },
      {
        step: 'Étape 4 : Analyse et reporting',
        description: 'Établissement mensuel ou trimestriel de vos rapports de gestion avec analyse des écarts.',
      },
      {
        step: 'Étape 5 : Accompagnement',
        description: 'Interprétation des résultats, recommandations d\'actions et suivi des plans d\'amélioration.',
      },
      {
        step: 'Étape 6 : Optimisation continue',
        description: 'Ajustement des indicateurs et des processus pour une amélioration continue de la performance.',
      },
    ],
    faq: [
      {
        question: 'Qu\'est-ce qu\'un tableau de bord de gestion ?',
        answer: 'Un outil de pilotage regroupant vos indicateurs clés (CA, marge, trésorerie, etc.) pour suivre la performance de votre entreprise en temps réel.',
      },
      {
        question: 'À quelle fréquence recevoir mes indicateurs ?',
        answer: 'Nous recommandons un suivi mensuel minimum. Vous pouvez demander un point de situation à tout moment, transmis sous 24h en PDF avec tous vos indicateurs financiers.',
      },
      {
        question: 'Qu\'est-ce qu\'un SIG ?',
        answer: 'Les Soldes Intermédiaires de Gestion décomposent votre résultat en étapes pour identifier où vous créez ou perdez de la valeur.',
      },
      {
        question: 'Comment améliorer ma rentabilité ?',
        answer: 'Grâce à l\'analyse fine de vos marges, coûts et rentabilité par produit/service. Nous identifions les leviers d\'optimisation spécifiques à votre activité.',
      },
      {
        question: 'Puis-je obtenir des rapports pour des tiers ?',
        answer: 'Oui, nous créons des documents résumant l\'intégralité de vos indicateurs financiers ainsi que des rapports adaptés pour tiers (banques, SFAC, investisseurs, etc.).',
      },
    ],
  },
  {
    id: 'procedure-collective',
    title: 'Procédure collective',
    icon: 'Gavel',
    shortDescription: 'Accompagnement en cas de difficultés',
    description: "Assistance et conseil en cas de difficultés financières : prévention, procédures amiables (mandat ad hoc, conciliation) et accompagnement dans les procédures collectives (sauvegarde, redressement).",
    details: [
      'Détection précoce des difficultés',
      'Mandat ad hoc',
      'Procédure de conciliation',
      'Sauvegarde judiciaire',
      'Redressement judiciaire',
    ],
    process: [
      {
        step: 'Étape 1 : Diagnostic de la situation',
        description: 'Analyse approfondie de votre situation financière, identification des causes des difficultés et des solutions possibles.',
      },
      {
        step: 'Étape 2 : Recherche de solutions amiables',
        description: 'Mise en place de mesures de redressement amiable : négociation avec créanciers, rééchelonnement de dettes, mandat ad hoc.',
      },
      {
        step: 'Étape 3 : Constitution du dossier',
        description: 'Préparation de tous les documents nécessaires : états financiers, plan de trésorerie, liste des créanciers.',
      },
      {
        step: 'Étape 4 : Procédure adaptée',
        description: 'Engagement de la procédure la plus adaptée : conciliation, sauvegarde ou redressement selon votre situation.',
      },
      {
        step: 'Étape 5 : Plan de continuation',
        description: 'Élaboration d\'un plan de redressement réaliste et négociation avec les créanciers et le tribunal.',
      },
      {
        step: 'Étape 6 : Suivi et accompagnement',
        description: 'Accompagnement dans l\'exécution du plan, suivi de la trésorerie et conseil pour le retour à la normale.',
      },
    ],
    faq: [
      {
        question: 'Quand dois-je consulter pour mes difficultés ?',
        answer: 'Le plus tôt possible. Une détection précoce permet d\'envisager des solutions amiables moins traumatisantes qu\'une procédure collective.',
      },
      {
        question: 'Qu\'est-ce qu\'un mandat ad hoc ?',
        answer: 'Une procédure confidentielle où un mandataire aide à négocier avec vos créanciers pour trouver un accord amiable et éviter une procédure collective.',
      },
      {
        question: 'Quelle différence entre sauvegarde et redressement ?',
        answer: 'La sauvegarde est préventive (avant cessation de paiements), le redressement intervient après. La sauvegarde est souvent moins stigmatisante.',
      },
      {
        question: 'Puis-je continuer mon activité pendant la procédure ?',
        answer: 'Oui, en sauvegarde et redressement judiciaire, vous continuez votre activité sous surveillance de l\'administrateur et du mandataire judiciaire.',
      },
      {
        question: 'Combien de temps dure une procédure collective ?',
        answer: 'Variable selon la procédure : quelques mois pour une conciliation, 1 à 2 ans pour un plan de continuation en sauvegarde ou redressement.',
      },
    ],
  },
  {
    id: 'mission-ponctuelle',
    title: 'Mission ponctuelle',
    icon: 'Assignment',
    shortDescription: 'Prestations ponctuelles sur mesure',
    description: "Interventions ponctuelles pour répondre à vos besoins spécifiques : déclaration de revenus annuelle, calcul de droits à la retraite, établissement de prévisionnels et conseils divers.",
    details: [
      'Déclaration de revenus annuelle',
      'Calcul et optimisation retraite',
      'Établissement de prévisionnels',
      'Conseils et expertise ponctuels',
      'Missions sur mesure',
    ],
    process: [
      {
        step: 'Étape 1 : Expression du besoin',
        description: 'Analyse de votre demande spécifique et définition précise de la mission à réaliser.',
      },
      {
        step: 'Étape 2 : Devis et cadrage',
        description: 'Établissement d\'un devis détaillé avec périmètre, délais et honoraires pour validation.',
      },
      {
        step: 'Étape 3 : Collecte des informations',
        description: 'Récupération de tous les documents et informations nécessaires à la réalisation de la mission.',
      },
      {
        step: 'Étape 4 : Réalisation de la mission',
        description: 'Exécution de la prestation selon les modalités convenues : calculs, déclarations, conseil.',
      },
      {
        step: 'Étape 5 : Livrable et explications',
        description: 'Remise des documents finalisés (déclarations, prévisionnels, rapports) avec explications détaillées.',
      },
      {
        step: 'Étape 6 : Suivi post-mission',
        description: 'Disponibilité pour questions complémentaires et suivi si nécessaire.',
      },
    ],
    faq: [
      {
        question: 'Puis-je vous solliciter pour une mission unique ?',
        answer: 'Absolument. Nous intervenons ponctuellement pour des besoins spécifiques sans obligation de mission récurrente.',
      },
      {
        question: 'Comment se passe la déclaration de revenus annuelle ?',
        answer: 'Nous collectons vos justificatifs, optimisons vos déductions fiscales et établissons votre déclaration 2035 ou 2042 selon votre situation.',
      },
      {
        question: 'Pouvez-vous calculer mes droits à la retraite ?',
        answer: 'Oui, nous analysons votre carrière, calculons vos droits actuels et projetés, et vous conseillons sur les optimisations possibles (rachat de trimestres, etc.).',
      },
      {
        question: 'Qu\'est-ce qu\'un prévisionnel ?',
        answer: 'Un document financier projetant votre activité future (CA, charges, résultat, trésorerie) généralement sur 3 ans. Essentiel pour financement ou création.',
      },
      {
        question: 'Quel est le délai pour une mission ponctuelle ?',
        answer: 'Variable selon la complexité : de quelques jours à quelques semaines. Nous nous engageons sur un délai précis lors du devis.',
      },
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Cabinet à votre écoute',
    icon: 'HeadsetMic',
    description: 'Disponibilité et proximité sont nos priorités. Nous sommes à votre écoute pour répondre à vos questions et vous accompagner au quotidien avec une relation personnalisée.',
  },
  {
    title: 'Accompagnement global et personnalisé',
    icon: 'PersonPin',
    description: "Chaque entreprise est unique. Nous proposons des solutions sur-mesure adaptées à votre secteur d'activité, votre taille et vos objectifs, avec un suivi régulier et proactif.",
  },
  {
    title: 'Transmission sécurisée 24/7',
    icon: 'CloudUpload',
    description: "Envoyez vos documents à tout moment par email, photo ou PDF. Traitement instantané et sécurisé de vos pièces comptables. Numérisation et archivage de tous vos justificatifs.",
  },
  {
    title: 'Transparence et réactivité',
    icon: 'Speed',
    description: 'Communication claire, tarifs transparents et réponses rapides à vos sollicitations. Nous nous engageons à être un partenaire fiable et réactif pour votre entreprise.',
  },
  {
    title: 'Suivi de votre situation',
    icon: 'Description',
    description: 'Accès au site pour suivre les nouveautés de nos services. Sur demande, recevez votre situation mensuelle en PDF : grand livre, SIG, rapport de situation financière, et tous indicateurs clés.',
  },
  {
    title: 'Rapports pour tiers',
    icon: 'Summarize',
    description: 'Nous créons des documents résumant l\'intégralité de vos indicateurs financiers ainsi que des rapports adaptés pour tiers (banques, SFAC, investisseurs, partenaires commerciaux).',
  },
];
