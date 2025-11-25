'use client';
import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import EuroIcon from '@mui/icons-material/Euro';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import PageHead from '@/components/shared/PageHead';
import { FAQ_ITEMS, FAQ_CATEGORIES, FAQ_PROFILES } from '@/lib/data/faq';

const iconMap = {
  Help: HelpIcon,
  Euro: EuroIcon,
  Receipt: ReceiptIcon,
  AccountBalance: AccountBalanceIcon,
  Business: BusinessIcon,
  Computer: ComputerIcon,
};

const USEFUL_RESOURCES = [
  {
    title: 'Service Public - Entreprendre',
    description: 'Portail officiel des démarches administratives pour créer et gérer une entreprise',
    url: 'https://entreprendre.service-public.fr',
  },
  {
    title: 'Impôts.gouv.fr - Professionnels',
    description: 'Espace professionnel pour les déclarations fiscales et téléprocédures',
    url: 'https://www.impots.gouv.fr/portail/professionnel',
  },
  {
    title: 'URSSAF - Employeurs',
    description: 'Informations et services pour la gestion des cotisations sociales',
    url: 'https://www.urssaf.fr',
  },
  {
    title: 'Ordre des Experts-Comptables',
    description: 'Informations sur la profession et annuaire des experts-comptables',
    url: 'https://www.experts-comptables.fr',
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedProfile, setSelectedProfile] = useState('tous');

  // Filter FAQ items based on search, category, and profile
  const filteredFAQs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === 'tous' || item.category === selectedCategory;

      // Profile filter
      const matchesProfile =
        selectedProfile === 'tous' ||
        item.profiles.includes('tous') ||
        item.profiles.includes(selectedProfile);

      return matchesSearch && matchesCategory && matchesProfile;
    });
  }, [searchQuery, selectedCategory, selectedProfile]);

  return (
    <>
      <PageHead
        title="FAQ - Questions fréquentes | Cabinet ECIFEC"
        description="Toutes les réponses à vos questions sur la création d'entreprise, la comptabilité, la fiscalité, les charges sociales et nos services. Expert-comptable à Sarcelles."
      />
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="FAQ"
            title="Questions fréquentes"
            description="Vous avez des questions ? Nous avons les réponses. Consultez notre FAQ pour en savoir plus sur nos services, nos tarifs et notre fonctionnement."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Search Bar */}
      <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <FadeInSection delay={0} direction="up">
            <TextField
              fullWidth
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  borderRadius: 3,
                  '&:hover fieldset': {
                    borderColor: 'secondary.main',
                  },
                },
              }}
            />
          </FadeInSection>
        </Container>
      </Box>

      {/* Categories */}
      <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <SectionTitle title="Filtrer par catégorie" />
          <FadeInSection delay={100} direction="up">
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mt: 3,
              }}
            >
              <Chip
                label="Tous"
                onClick={() => setSelectedCategory('tous')}
                color={selectedCategory === 'tous' ? 'secondary' : 'default'}
                sx={{
                  fontSize: '1rem',
                  px: 2,
                  py: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'secondary.light',
                  },
                }}
              />
              {FAQ_CATEGORIES.map((category) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <Chip
                    key={category.id}
                    label={category.label}
                    icon={IconComponent && <IconComponent />}
                    onClick={() => setSelectedCategory(category.id)}
                    color={selectedCategory === category.id ? 'secondary' : 'default'}
                    sx={{
                      fontSize: '1rem',
                      px: 2,
                      py: 3,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'secondary.light',
                      },
                    }}
                  />
                );
              })}
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* Profile Filters */}
      <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle title="Questions par profil" />
          <FadeInSection delay={100} direction="up">
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mt: 3,
              }}
            >
              {FAQ_PROFILES.map((profile) => (
                <Chip
                  key={profile.id}
                  label={profile.label}
                  onClick={() => setSelectedProfile(profile.id)}
                  variant={selectedProfile === profile.id ? 'filled' : 'outlined'}
                  color={selectedProfile === profile.id ? 'primary' : 'default'}
                  sx={{
                    fontSize: '0.95rem',
                    px: 2,
                    py: 2.5,
                    cursor: 'pointer',
                    borderWidth: 2,
                    '&:hover': {
                      backgroundColor:
                        selectedProfile === profile.id ? 'primary.dark' : 'primary.lighter',
                    },
                  }}
                />
              ))}
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          {filteredFAQs.length === 0 ? (
            <FadeInSection delay={0} direction="up">
              <Box
                sx={{
                  textAlign: 'center',
                  p: 6,
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                  Aucune question trouvée
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Essayez de modifier vos filtres ou votre recherche
                </Typography>
              </Box>
            </FadeInSection>
          ) : (
            filteredFAQs.map((item, index) => (
              <FadeInSection key={index} delay={index * 60} direction="up">
                <Accordion
                  defaultExpanded={index === 0}
                  sx={{
                    mb: 2,
                    '&:before': { display: 'none' },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: 'white',
                      '&:hover': {
                        backgroundColor: 'background.paper',
                      },
                      py: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.1rem' }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 3, pb: 4, px: 4 }}>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </FadeInSection>
            ))
          )}
        </Container>
      </Box>

      {/* Useful Resources */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Ressources utiles"
            subtitle="Liens vers des sites officiels et ressources complémentaires"
          />

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {USEFUL_RESOURCES.map((resource, index) => (
              <Grid item xs={12} md={6} key={index}>
                <FadeInSection delay={index * 100} direction="up">
                  <Paper
                    component="a"
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'block',
                      textDecoration: 'none',
                      backgroundColor: 'white',
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
                          width: 45,
                          height: 45,
                          borderRadius: 2,
                          backgroundColor: 'secondary.lighter',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ArticleIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 1,
                          }}
                        >
                          {resource.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                          }}
                        >
                          {resource.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </FadeInSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Help Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <FadeInSection delay={0} direction="up">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                backgroundColor: 'background.paper',
                borderRadius: 3,
                border: '2px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 3, color: 'primary.main', textAlign: 'center' }}
              >
                Vous ne trouvez pas la réponse à votre question ?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, textAlign: 'center' }}
              >
                N'hésitez pas à nous contacter directement. Notre équipe se fera un plaisir de
                répondre à toutes vos interrogations et de vous accompagner dans votre démarche.
              </Typography>

              <List sx={{ maxWidth: '500px', mx: 'auto' }}>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="01 34 04 35 05"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="expert-comptable@ecifec95.com"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </FadeInSection>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection
        title="Besoin de plus d'informations ?"
        subtitle="Contactez-nous pour poser vos questions ou prendre rendez-vous."
      />
    </>
  );
}
