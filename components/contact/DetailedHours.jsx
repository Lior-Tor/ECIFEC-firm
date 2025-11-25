'use client';
import { Box, Container, Grid, Typography, Paper, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const OFFICE_HOURS = [
  { day: 'Lundi', hours: '9h00 - 13h00 / 14h00 - 18h00', available: true },
  { day: 'Mardi', hours: '9h00 - 13h00 / 14h00 - 18h00', available: true },
  { day: 'Mercredi', hours: '9h00 - 13h00 / 14h00 - 18h00', available: true },
  { day: 'Jeudi', hours: '9h00 - 13h00 / 14h00 - 18h00', available: true },
  { day: 'Vendredi', hours: '9h00 - 13h00 / 14h00 - 17h00', available: true },
  { day: 'Samedi', hours: 'Fermé', available: false },
  { day: 'Dimanche', hours: 'Fermé', available: false },
];

export default function DetailedHours() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Nos horaires d'ouverture"
          subtitle="Disponibilité et modalités de rendez-vous"
        />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Hours Table */}
          <Grid item xs={12} md={6}>
            <FadeInSection delay={0} direction="left">
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '2px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccessTimeIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Horaires du cabinet
                  </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  {OFFICE_HOURS.map((schedule, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 2,
                        borderBottom: index < OFFICE_HOURS.length - 1 ? '1px solid' : 'none',
                        borderColor: 'divider',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: schedule.available ? 'primary.main' : 'text.secondary',
                        }}
                      >
                        {schedule.day}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: schedule.available ? 'text.primary' : 'text.secondary',
                          fontStyle: schedule.available ? 'normal' : 'italic',
                        }}
                      >
                        {schedule.hours}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Chip
                  label="Accueil sur rendez-vous uniquement"
                  color="secondary"
                  sx={{ mt: 3, fontWeight: 600 }}
                />
              </Paper>
            </FadeInSection>
          </Grid>

          {/* Appointment Info */}
          <Grid item xs={12} md={6}>
            <FadeInSection delay={200} direction="right">
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EventAvailableIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Prendre rendez-vous
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                  Pour assurer la qualité de nos échanges et vous consacrer toute l'attention nécessaire, nous recevons uniquement sur rendez-vous.
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                    Comment prendre rendez-vous ?
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                      <strong>Par téléphone :</strong> 01 34 04 35 05 (du lundi au vendredi)
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                      <strong>Par email :</strong> expert-comptable@ecifec95.com
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                      <strong>Via le formulaire</strong> de contact en haut de cette page
                    </Typography>
                  </Box>
                </Box>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    backgroundColor: 'secondary.lighter',
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PhoneEnabledIcon sx={{ fontSize: 20, color: 'secondary.main', mr: 1.5 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      Disponibilité téléphonique
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Nous sommes disponibles par téléphone pendant nos horaires d'ouverture. En cas d'absence, laissez un message et nous vous rappellerons dans les 24 heures.
                  </Typography>
                </Paper>
              </Paper>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
