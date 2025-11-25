'use client';
import { Box, Container, Grid, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const CONFIDENTIALITY_POINTS = [
  {
    icon: LockIcon,
    title: 'Secret professionnel absolu',
    description: 'En tant qu\'experts-comptables, nous sommes soumis au secret professionnel. Toutes vos informations comptables, fiscales et financières sont strictement confidentielles et protégées par la loi.',
  },
  {
    icon: SecurityIcon,
    title: 'Protection des données personnelles',
    description: 'Nous respectons scrupuleusement le RGPD. Vos données personnelles sont collectées uniquement pour les besoins de notre mission et ne sont jamais partagées avec des tiers sans votre consentement explicite.',
  },
  {
    icon: ShieldIcon,
    title: 'Engagement déontologique',
    description: 'Nous respectons le code de déontologie de l\'Ordre des Experts-Comptables, garantissant intégrité, objectivité, compétence professionnelle et confidentialité dans toutes nos missions.',
  },
];

const DATA_COMMITMENTS = [
  'Aucune transmission de vos données à des tiers sans autorisation',
  'Archivage sécurisé de vos documents pendant 10 ans minimum',
  'Destruction sécurisée des documents en fin de conservation',
  'Personnel formé et sensibilisé à la confidentialité',
  'Accès aux dossiers strictement limité aux collaborateurs concernés',
  'Respect des normes professionnelles de l\'Ordre des Experts-Comptables',
];

export default function ConfidentialityCommitment() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Notre engagement de confidentialité"
          subtitle="Vos données sont entre de bonnes mains"
        />

        <FadeInSection delay={200} direction="up">
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.1rem',
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            La confidentialité est au cœur de notre métier. Nous mettons tout en œuvre pour protéger vos informations et respecter la réglementation en vigueur.
          </Typography>
        </FadeInSection>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {CONFIDENTIALITY_POINTS.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <FadeInSection delay={index * 100 + 300} direction="up">
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'background.paper',
                      borderRadius: 3,
                      border: '2px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          backgroundColor: 'secondary.lighter',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 28, color: 'secondary.main' }} />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 1.5,
                          }}
                        >
                          {point.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                          }}
                        >
                          {point.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>

        <FadeInSection delay={700} direction="up">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              backgroundColor: 'primary.main',
              borderRadius: 3,
              color: 'white',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: 'center',
                color: 'white',
              }}
            >
              Nos engagements concrets
            </Typography>

            <Grid container spacing={2}>
              {DATA_COMMITMENTS.map((commitment, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <ShieldIcon sx={{ fontSize: 20, color: 'secondary.main', mt: 0.3, flexShrink: 0 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        lineHeight: 1.7,
                        opacity: 0.95,
                      }}
                    >
                      {commitment}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" sx={{ color: 'white', opacity: 0.9, lineHeight: 1.7 }}>
                Pour toute question concernant le traitement de vos données personnelles ou pour exercer vos droits (accès, rectification, suppression), contactez-nous à{' '}
                <strong>expert-comptable@ecifec95.com</strong>
              </Typography>
            </Box>
          </Paper>
        </FadeInSection>
      </Container>
    </Box>
  );
}
