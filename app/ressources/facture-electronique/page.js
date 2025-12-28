/**
 * Page Facture Électronique 2026 - Réforme obligatoire
 *
 * Explique la réforme de facturation électronique B2B obligatoire en France
 * avec frise chronologique, schémas explicatifs, et services ECIFEC
 */

import {
  Container,
  Box,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Alert,
  Chip,
  Stack,
  Grid,
} from '@mui/material';
import {
  CalendarToday,
  CheckCircle,
  Warning,
  TrendingUp,
  Security,
  Speed,
  ExpandMore,
  ContactMail,
  Business,
  Description,
  CloudUpload,
  Cancel,
  CheckCircleOutline,
  Info,
  PlayCircleOutline,
} from '@mui/icons-material';
import Link from 'next/link';
import ImageZoom from '@/components/shared/ImageZoom';
import { factureElectroniqueMetadata } from '@/lib/metadata';

export const metadata = factureElectroniqueMetadata;

export default function FactureElectroniquePage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Description sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Facture Électronique Obligatoire 2026
            </Typography>
            <Typography
              variant="h5"
              sx={{
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              La réforme qui transforme la facturation entre entreprises en France
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* L'essentiel à retenir */}
      <Alert severity="info" icon={<Info />} sx={{ mb: 6, fontSize: '1rem' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          L'essentiel à retenir
        </Typography>
        <List dense>
          <ListItem sx={{ pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="À partir de septembre 2026, vous ne pourrez plus envoyer de factures papier ou PDF par email à vos clients professionnels"
              sx={{ '& .MuiListItemText-primary': { fontSize: '1rem', fontWeight: 500 } }}
            />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Vous devrez utiliser un logiciel agréé par l'État pour créer et envoyer vos factures"
              sx={{ '& .MuiListItemText-primary': { fontSize: '1rem', fontWeight: 500 } }}
            />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="ECIFEC vous accompagne pour choisir la bonne solution et vous former"
              sx={{ '& .MuiListItemText-primary': { fontSize: '1rem', fontWeight: 500 } }}
            />
          </ListItem>
        </List>
      </Alert>

      {/* Glossaire simplifié */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, bgcolor: 'grey.50' }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
          Comprendre les termes clés
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                Plateforme de Dématérialisation Partenaire (PDP)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Un logiciel privé agréé par l'État qui vous permet d'envoyer et recevoir vos factures électroniques.
                C'est obligatoire - il n'existe plus de solution publique gratuite pour échanger les factures.
                111 plateformes sont actuellement enregistrées.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                Annuaire National
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Le portail public qui centralise uniquement l'annuaire des entreprises et leurs plateformes.
                Il ne sert PAS à échanger les factures, seulement à collecter les données fiscales (e-reporting).
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                E-reporting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transmission automatique de vos données de facturation à l'administration fiscale.
                Votre PDP (Plateforme de Dématérialisation Partenaire) s'en charge automatiquement.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                Facture B2B
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Une facture "entre entreprises" (Business to Business).
                Les factures pour les particuliers (B2C) ne sont pas concernées par cette réforme.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Frise Chronologique */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <CalendarToday color="primary" />
          Calendrier de mise en œuvre
        </Typography>

        <Box sx={{ position: 'relative', pl: { xs: 2, md: 4 } }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 16 },
              top: 0,
              bottom: 0,
              width: 3,
              bgcolor: 'primary.main',
            }}
          />

          {/* Juin 2025 */}
          <Box sx={{ position: 'relative', mb: 4 }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 0, md: 8 },
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                border: '3px solid white',
                boxShadow: 2,
              }}
            />
            <Box sx={{ ml: { xs: 4, md: 6 } }}>
              <Chip label="Juin 2025" color="primary" size="small" sx={{ mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Initialisation de l'annuaire
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mise en service du Portail Public de Facturation (PPF) servant d'annuaire centralisé pour identifier les entreprises et leurs plateformes agréées.
              </Typography>
            </Box>
          </Box>

          {/* 1er Septembre 2026 */}
          <Box sx={{ position: 'relative', mb: 4 }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 0, md: 8 },
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: 'error.main',
                border: '3px solid white',
                boxShadow: 2,
              }}
            />
            <Box sx={{ ml: { xs: 4, md: 6 } }}>
              <Chip label="1er Septembre 2026" color="error" size="small" sx={{ mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Obligation de réception pour TOUS
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Toutes les entreprises assujetties à la TVA en France</strong> doivent être capables de recevoir des factures électroniques (format structuré).
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Obligation d'émission pour :</strong> Grandes entreprises (GE) et Entreprises de Taille Intermédiaire (ETI).
              </Typography>
            </Box>
          </Box>

          {/* 1er Septembre 2027 */}
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 0, md: 8 },
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: 'warning.main',
                border: '3px solid white',
                boxShadow: 2,
              }}
            />
            <Box sx={{ ml: { xs: 4, md: 6 } }}>
              <Chip label="1er Septembre 2027" color="warning" size="small" sx={{ mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Obligation d'émission pour PME et TPE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Les Petites et Moyennes Entreprises (PME), Très Petites Entreprises (TPE) et micro-entreprises doivent émettre leurs factures au format électronique.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Ce qui change concrètement */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, bgcolor: 'info.light' }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Que va-t-il se passer pour mon entreprise ?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'error.main', fontWeight: 700 }}>
                <Cancel /> Ce qui ne sera plus possible
              </Typography>
              <List>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Cancel color="error" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Envoyer des factures papier par courrier" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Cancel color="error" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Envoyer des factures PDF par email" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Cancel color="error" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Utiliser Word ou Excel pour créer vos factures" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Cancel color="error" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Archiver vos factures uniquement sur papier" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'success.main', fontWeight: 700 }}>
                <CheckCircleOutline /> Ce qu'il faudra faire
              </Typography>
              <List>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutline color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Utiliser un logiciel agréé par l'État" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutline color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Vos factures seront transmises automatiquement" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutline color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Vos clients les recevront dans leur logiciel" />
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutline color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Tout est archivé numériquement et sécurisé" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Exemple concret */}
      <Box sx={{ mb: 6, p: 4, bgcolor: 'secondary.light', borderRadius: 2, border: '2px solid', borderColor: 'secondary.main' }}>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Business sx={{ fontSize: 40, color: 'primary.main' }} />
          Exemple concret : Marie, gérante d'un salon de coiffure
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
            Situation actuelle (avant la réforme) :
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Marie travaille avec plusieurs fournisseurs professionnels (L'Oréal, grossiste en matériel).
            Aujourd'hui, quand son fournisseur lui envoie une facture, elle la reçoit par email en PDF.
            De son côté, ses clients sont principalement des particuliers (factures B2C, non concernées par la réforme).
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'success.main', fontWeight: 700, mt: 3 }}>
            À partir de septembre 2026 :
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Marie devra s'équiper d'une PDP (Plateforme de Dématérialisation Partenaire). Quand son fournisseur L'Oréal lui enverra une facture,
            celle-ci arrivera automatiquement dans son logiciel de comptabilité via sa PDP.
            Plus besoin de saisir manuellement les factures PDF ! Si Marie coiffe exceptionnellement une troupe de théâtre
            (client professionnel), elle devra aussi émettre une facture électronique via sa PDP.
          </Typography>

          <Alert severity="success" sx={{ mt: 2 }}>
            <Typography variant="body2">
              <strong>ECIFEC accompagne Marie</strong> pour choisir la PDP adaptée aux salons de coiffure,
              négocier les tarifs, former son équipe, et s'assurer que tout fonctionne bien avant l'échéance de septembre 2026.
            </Typography>
          </Alert>
        </Box>
      </Box>

      {/* Schéma détaillé: Circuit de transmission */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, bgcolor: 'white' }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 1, textAlign: 'center' }}>
          Circuit de transmission des{' '}
          <Box component="span" sx={{ color: '#C7B376' }}>
            factures et des données
          </Box>
        </Typography>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <ImageZoom
            src="/images/schema-facture_electronique.webp"
            alt="Circuit de transmission des factures et des données - Schéma explicatif de la facturation électronique B2B"
            width={1200}
            height={800}
            priority
          />
        </Box>
      </Paper>

      {/* Rôle du PPF et des PDP */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
          Annuaire National et PDP : quel rôle ?
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Important : Depuis octobre 2024, le Portail Public (PPF) ne sert plus à échanger des factures B2B entre entreprises privées.
            Vous devez obligatoirement passer par une PDP (Plateforme de Dématérialisation Partenaire).
          </Typography>
        </Alert>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {/* Annuaire National (PPF) */}
          <Paper elevation={1} sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom color="primary">
              Annuaire National (PPF)
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Rôle limité à l'infrastructure centrale :
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" fontSize="small" /></ListItemIcon>
                <ListItemText primary="Annuaire centralisé des entreprises et leurs PDP" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" fontSize="small" /></ListItemIcon>
                <ListItemText primary="Collecte des données d'e-reporting fiscal" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" fontSize="small" /></ListItemIcon>
                <ListItemText primary="Chorus Pro pour facturation vers le secteur public uniquement" />
              </ListItem>
            </List>
            <Typography variant="caption" color="error" sx={{ mt: 2, display: 'block', fontWeight: 600 }}>
              ❌ N'échange PAS les factures B2B entre entreprises privées
            </Typography>
          </Paper>

          {/* PDP */}
          <Paper elevation={1} sx={{ p: 3, bgcolor: 'primary.light', color: 'white' }}>
            <Typography variant="h6" gutterBottom>
              Plateformes de Dématérialisation Partenaire (PDP) - OBLIGATOIRE
            </Typography>
            <Typography variant="body2" paragraph sx={{ color: 'white', opacity: 0.95 }}>
              Solution obligatoire pour échanger vos factures B2B :
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                <ListItemText primary="Émission et réception des factures B2B" sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                <ListItemText primary="Intégration avec vos outils (ERP, comptabilité)" sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                <ListItemText primary="Automatisation et archivage sécurisé" sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                <ListItemText primary="111 plateformes provisoirement enregistrées" sx={{ color: 'white' }} />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Paper>

      {/* Avantages de la réforme */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
          Pourquoi cette réforme ?
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Speed sx={{ fontSize: 56, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Gain de temps
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Automatisation du traitement des factures et réduction des tâches administratives
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <TrendingUp sx={{ fontSize: 56, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Réduction des coûts
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Économie sur l'impression, l'envoi postal, et le stockage papier
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Security sx={{ fontSize: 56, color: 'info.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Sécurité renforcée
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Traçabilité complète, réduction de la fraude à la TVA
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Sanctions */}
      <Alert severity="error" sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Sanctions en cas de non-conformité
        </Typography>
        <List dense>
          <ListItem sx={{ pl: 0 }}>
            <ListItemIcon><Warning color="error" /></ListItemIcon>
            <ListItemText
              primary="15 € par facture non conforme"
              secondary="Plafonné à 15 000 € par an"
            />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemIcon><Warning color="error" /></ListItemIcon>
            <ListItemText
              primary="250 € par facture pour manquement à l'e-reporting"
              secondary="Obligation de transmission des données fiscales"
            />
          </ListItem>
        </List>
      </Alert>

      {/* Services ECIFEC */}
      <Paper elevation={3} sx={{ p: 4, mb: 6, bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'white', mb: 3 }}>
          ECIFEC vous accompagne dans votre transition
        </Typography>

        <Typography variant="body1" paragraph>
          Notre cabinet d'expertise comptable vous guide à chaque étape de votre mise en conformité avec la réforme de facturation électronique.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mt: 3 }}>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Description />
              Audit et diagnostic
            </Typography>
            <List dense>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Analyse de votre flux de facturation actuel"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Identification des besoins spécifiques"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Évaluation du calendrier de mise en œuvre"
                  sx={{ color: 'white' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CloudUpload />
              Choix de la plateforme
            </Typography>
            <List dense>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Comparaison des 111 PDP enregistrées"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Recommandation adaptée à votre secteur"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Aide à l'intégration avec votre ERP/logiciel"
                  sx={{ color: 'white' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Security />
              Mise en conformité
            </Typography>
            <List dense>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Vérification du respect des formats obligatoires"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Configuration de l'e-reporting automatique"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Tests et validation avant échéance"
                  sx={{ color: 'white' }}
                />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ContactMail />
              Formation et support
            </Typography>
            <List dense>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Formation de vos équipes comptables"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Accompagnement post-déploiement"
                  sx={{ color: 'white' }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon><CheckCircle sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText
                  primary="Veille réglementaire continue"
                  sx={{ color: 'white' }}
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' },
                px: 4,
                py: 1.5,
              }}
            >
              Demander un accompagnement
            </Button>
          </Link>
        </Box>
      </Paper>

      {/* Vidéo Explicative */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 4, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <PlayCircleOutline color="primary" sx={{ fontSize: 40 }} />
          La Réforme en Vidéo
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="video"
            controls
            src="/videos/facture_electronique.mp4"
            sx={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </Box>
        </Box>
      </Paper>

      {/* FAQ */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
          Questions fréquentes
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Suis-je concerné par cette réforme ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Oui, si vous êtes assujetti à la TVA en France et que vous émettez ou recevez des factures B2B (entre entreprises). Toutes les entreprises françaises devront être capables de recevoir des factures électroniques dès septembre 2026. L'obligation d'émission dépend de votre taille (GE/ETI en 2026, PME/TPE en 2027).
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Quelle PDP choisir ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              Le choix dépend de plusieurs critères : votre secteur d'activité, le volume de factures, votre logiciel de comptabilité/ERP actuel, et vos besoins en fonctionnalités. 111 PDP (Plateformes de Dématérialisation Partenaire) sont provisoirement enregistrées.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ECIFEC vous accompagne dans ce choix en analysant vos besoins spécifiques et en vous recommandant la solution la plus adaptée avec intégration à vos outils existants.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Quand dois-je commencer à me préparer ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Dès maintenant.</strong> La mise en place d'une solution de facturation électronique nécessite du temps pour :
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" fontSize="small" /></ListItemIcon>
                <ListItemText
                  primary="Choisir et configurer votre PDP"
                  secondary="2-3 mois selon complexité"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" fontSize="small" /></ListItemIcon>
                <ListItemText
                  primary="Former vos équipes aux nouveaux processus"
                  secondary="1-2 mois"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" fontSize="small" /></ListItemIcon>
                <ListItemText
                  primary="Tester et valider avant l'échéance légale"
                  secondary="1 mois minimum"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Qu'est-ce que l'e-reporting exactement ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              L'e-reporting est la transmission automatique de données fiscales (montants HT/TTC, TVA, nature de transaction) à l'administration fiscale via votre PDP. Cela permet à la DGFiP de disposer d'informations en temps réel sur vos transactions.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Important :</strong> L'e-reporting est obligatoire même pour les factures papier ou PDF que vous continuez d'émettre en dehors du circuit B2B (clients particuliers). Le non-respect entraîne une amende de 250 € par facture.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Y a-t-il une solution gratuite pour la facturation électronique ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Non, il n'existe plus de solution publique gratuite pour échanger des factures B2B entre entreprises privées.</strong> Depuis octobre 2024, le gouvernement a abandonné cette option. Vous devez obligatoirement utiliser une PDP (Plateforme de Dématérialisation Partenaire) privée.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Chorus Pro (qui fait partie du Portail Public) reste disponible gratuitement, mais uniquement pour facturer le secteur public (administrations, collectivités). Il ne peut pas être utilisé pour vos factures B2B privées.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Les PDP sont payantes mais offrent des services essentiels : intégration avec votre comptabilité, automatisation, archivage sécurisé, support technique. ECIFEC vous aide à choisir la PDP la plus adaptée à votre budget et vos besoins.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Que se passe-t-il si je ne suis pas prêt à temps ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Vous risquez des sanctions financières (15 € par facture non conforme, plafonné à 15 000 €/an, et 250 € par facture pour manquement à l'e-reporting). De plus, vos clients ne pourront plus accepter vos factures papier ou PDF, ce qui peut bloquer vos paiements et impacter votre trésorerie. Anticipez dès maintenant avec ECIFEC pour éviter ces risques.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* CTA Final */}
      <Paper elevation={2} sx={{ p: 4, textAlign: 'center', bgcolor: 'secondary.light' }}>
        <Typography variant="h4" gutterBottom>
          Ne prenez pas de retard sur la réforme 2026
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          ECIFEC vous accompagne dans votre mise en conformité avec une approche personnalisée et des conseils experts.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              Prendre rendez-vous
            </Button>
          </Link>
          <Link href="/ressources" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
            >
              Autres ressources
            </Button>
          </Link>
        </Stack>
      </Paper>
      </Container>
    </>
  );
}
