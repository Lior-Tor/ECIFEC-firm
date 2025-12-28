import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Paper,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import { SECTORS } from '@/lib/data/secteurs';
import SectorIcon from '@/components/sectors/SectorIcon';
import KeyRatios from '@/components/sectors/KeyRatios';
import CommonPitfalls from '@/components/sectors/CommonPitfalls';
import Optimizations from '@/components/sectors/Optimizations';
import { generateSectorMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);

  if (!sector) {
    return {
      title: 'Secteur non trouvé - Cabinet ECIFEC',
      description: 'Le secteur demandé n\'existe pas.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generateSectorMetadata(sector);
}

export default async function SectorPage({ params }) {
  const { slug } = await params;

  // Trouver le secteur correspondant au slug
  const sector = SECTORS.find((s) => s.slug === slug);

  // Si le secteur n'existe pas, afficher une 404
  if (!sector) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #065a5e 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              'radial-gradient(circle at top right, rgba(199, 179, 118, 0.2) 0%, transparent 60%)',
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <FadeInSection delay={0} direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SectorIcon
                    iconName={sector.icon}
                    sx={{
                      fontSize: { xs: 50, md: 70 },
                      mr: 2,
                      color: 'secondary.main',
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '3rem' },
                    }}
                  >
                    {sector.title}
                  </Typography>
                </Box>
              </FadeInSection>
              <FadeInSection delay={100} direction="right">
                <Typography
                  variant="h5"
                  sx={{
                    opacity: 0.95,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {sector.description}
                </Typography>
              </FadeInSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Spécialités */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <SectionTitle
          title="Nos expertises"
          subtitle={`Découvrez nos services spécialisés pour le secteur ${sector.title}`}
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {sector.specialties.map((specialty, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeInSection delay={index * 100} direction="up">
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                      <CheckCircleIcon
                        sx={{
                          color: 'secondary.main',
                          fontSize: 28,
                          mt: 0.5,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          lineHeight: 1.4,
                        }}
                      >
                        {specialty}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Key Ratios */}
      <KeyRatios ratios={sector.keyRatios} sectorTitle={sector.title} disclaimer={sector.ratiosDisclaimer} />

      {/* Common Pitfalls */}
      <CommonPitfalls pitfalls={sector.commonPitfalls} sectorTitle={sector.title} />

      {/* Optimizations */}
      <Optimizations optimizations={sector.optimizations} sectorTitle={sector.title} disclaimer={sector.optimizationsDisclaimer} />

      {/* FAQ Section */}
      {sector.faq && sector.faq.length > 0 && (
        <Box sx={{ backgroundColor: '#EDF5F2', py: { xs: 6, md: 10 } }}>
          <Container maxWidth="xl">
            <SectionTitle
              title="Questions fréquentes"
              subtitle={`Réponses aux questions courantes sur le secteur ${sector.title}`}
            />

            <Box sx={{ mt: 4 }}>
              {sector.faq.map((item, index) => (
                <FadeInSection key={index} delay={index * 100} direction="up">
                  <Accordion
                    elevation={0}
                    sx={{
                      mb: 2,
                      '&:before': { display: 'none' },
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(4, 48, 51, 0.04)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: 'white',
                      borderTop: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                </FadeInSection>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* Un autre secteur */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <SectionTitle
          title="Un autre secteur ?"
          subtitle="Nous accompagnons également d'autres secteurs d'activité"
        />

        <Box sx={{ mt: 4 }}>
          <FadeInSection delay={0} direction="up">
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(4, 48, 51, 0.02) 0%, rgba(199, 179, 118, 0.05) 100%)',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                Au-delà de nos secteurs d'expertise principaux, nous avons développé des compétences solides
                dans d'autres domaines d'activité. Que vous travailliez dans l'<strong>Immobilier & Promotion</strong>,
                un secteur exigeant une maîtrise pointue des règles fiscales spécifiques (TVA immobilière, régimes
                d'amortissement, défiscalisation), ou dans l'<strong>Industrie & Production</strong>, où la comptabilité
                industrielle, la gestion des immobilisations, les amortissements et l'optimisation des coûts de revient
                nécessitent une expertise dédiée.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                Si votre activité se situe dans l'<strong>Agriculture & Agroalimentaire</strong>, nous comprenons
                les enjeux particuliers de ce secteur : comptabilité agricole, TVA agricole, MSA, aides PAC et
                règles d'évaluation des stocks biologiques. Pour les entreprises du secteur <strong>Culture & Médias</strong>,
                nous maîtrisons les dispositifs de soutien à la création, les droits d'auteur, la gestion des
                intermittents et les spécificités fiscales des industries créatives.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 4,
                }}
              >
                Notre expérience diversifiée nous permet de nous adapter rapidement aux particularités de votre
                métier et de vous apporter un accompagnement personnalisé, quelle que soit votre activité.
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/secteurs/autres" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      borderRadius: 50,
                    }}
                  >
                    En savoir plus
                  </Button>
                </Link>
              </Box>
            </Paper>
          </FadeInSection>
        </Box>
      </Container>

      {/* CTA */}
      <CTASection />
    </>
  );
}

// Generate static params pour les 6 secteurs
export async function generateStaticParams() {
  return SECTORS.map((sector) => ({
    slug: sector.slug,
  }));
}
