'use client';
import { Box, Container, Typography, Grid, Paper, Alert } from '@mui/material';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';
import PageHead from '@/components/shared/PageHead';

export default function CalendrierPage() {
  // Fonction pour obtenir le nombre de jours dans un mois
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Fonction pour obtenir le premier jour de la semaine d'un mois (0 = Dimanche, 1 = Lundi, etc.)
  const getFirstDayOfMonth = (month, year) => {
    const day = new Date(year, month - 1, 1).getDay();
    // Convertir pour que Lundi = 0, Dimanche = 6
    return day === 0 ? 6 : day - 1;
  };

  // Événements pour 2026
  const events = {
    // JANVIER 2026
    '2026-01-02': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-01-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-01-13': [{ task: 'DSN', type: 'social' }],
    '2026-01-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // FÉVRIER 2026
    '2026-02-02': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-02-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-02-13': [{ task: 'DSN', type: 'social' }],
    '2026-02-19': [{ task: 'TVA CA3', type: 'fiscal' }],
    '2026-02-28': [{ task: 'OPCO', type: 'social' }],

    // MARS 2026
    '2026-03-02': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-03-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-03-13': [{ task: 'DSN', type: 'social' }],
    '2026-03-16': [{ task: '1er Acompte IS', type: 'fiscal' }],
    '2026-03-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // AVRIL 2026
    '2026-04-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-04-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-04-13': [{ task: 'DSN', type: 'social' }],
    '2026-04-20': [{ task: 'TVA CA3', type: 'fiscal' }],

    // MAI 2026
    '2026-05-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-05-04': [{ task: 'TVA CA12 + solde CVAE 2025', type: 'mixed' }],
    '2026-05-08': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-05-13': [{ task: 'DSN', type: 'social' }],
    '2026-05-14': [{ task: 'SOLDE TA 2025 + OETH 2025', type: 'fiscal' }],
    '2026-05-15': [{ task: 'solde IS 2025', type: 'fiscal' }],
    '2026-05-18': [{ task: 'BILAN 2025', type: 'fiscal' }],
    '2026-05-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // JUIN 2026
    '2026-06-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-06-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-06-12': [{ task: 'DSN', type: 'social' }],
    '2026-06-16': [{ task: '2e acompte IS & 1er Acompte CVAE & Acompte CFE', type: 'mixed' }],
    '2026-06-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // JUILLET 2026
    '2026-07-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-07-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-07-13': [{ task: 'DSN', type: 'social' }],
    '2026-07-15': [{ task: '1e acompte de TVA CA12', type: 'fiscal' }],
    '2026-07-20': [{ task: 'TVA CA3', type: 'fiscal' }],

    // AOÛT 2026
    '2026-08-03': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-08-10': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-08-13': [{ task: 'DSN', type: 'social' }],
    '2026-08-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // SEPTEMBRE 2026
    '2026-09-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-09-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-09-14': [{ task: 'DSN', type: 'social' }],
    '2026-09-15': [{ task: '3e acompte IS + 2e acompte de CVAE', type: 'mixed' }],
    '2026-09-16': [{ task: '3è Acompte IS 2026 + CVAE', type: 'mixed' }],
    '2026-09-21': [{ task: 'TVA CA3', type: 'fiscal' }],

    // OCTOBRE 2026
    '2026-10-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-10-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-10-13': [{ task: 'DSN', type: 'social' }],
    '2026-10-15': [{ task: 'TAXE FONCIÈRE', type: 'fiscal' }],
    '2026-10-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // NOVEMBRE 2026
    '2026-11-02': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-11-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-11-13': [{ task: 'DSN', type: 'social' }],
    '2026-11-19': [{ task: 'TVA CA3', type: 'fiscal' }],

    // DÉCEMBRE 2026
    '2026-12-01': [{ task: 'FICHE DE PAIE', type: 'social' }],
    '2026-12-09': [{ task: 'ÉLÉMENTS COMPTABLES', type: 'social' }],
    '2026-12-14': [{ task: 'DSN', type: 'social' }],
    '2026-12-15': [{ task: '2è Acompte TVA CA12 + 4ème Acompte IS + Solde CFE', type: 'mixed' }],
    '2026-12-21': [{ task: 'TVA CA3', type: 'fiscal' }],
  };

  // Couleurs pour les types d'événements
  const getEventStyle = (type) => {
    switch (type) {
      case 'fiscal':
        return { backgroundColor: '#ffebee', color: '#c62828', borderLeft: '3px solid #c62828' };
      case 'social':
        return { backgroundColor: '#e3f2fd', color: '#1565c0', borderLeft: '3px solid #1565c0' };
      case 'mixed':
        return { backgroundColor: '#f3e5f5', color: '#7b1fa2', borderLeft: '3px solid #7b1fa2' };
      default:
        return { backgroundColor: '#f5f5f5', color: '#666', borderLeft: '3px solid #666' };
    }
  };

  // Générer les jours d'un mois
  const generateMonthDays = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = [];

    // Jours du mois précédent
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: null
      });
    }

    // Jours du mois actuel
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayOfWeek = new Date(year, month - 1, day).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      days.push({
        day,
        isCurrentMonth: true,
        isWeekend,
        date: dateKey,
        events: events[dateKey] || []
      });
    }

    // Jours du mois suivant pour compléter la grille
    const remainingDays = 42 - days.length; // 6 semaines * 7 jours
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: null
      });
    }

    return days;
  };

  const months = [
    { name: 'JANVIER', number: 1 },
    { name: 'FÉVRIER', number: 2 },
    { name: 'MARS', number: 3 },
    { name: 'AVRIL', number: 4 },
    { name: 'MAI', number: 5 },
    { name: 'JUIN', number: 6 },
    { name: 'JUILLET', number: 7 },
    { name: 'AOÛT', number: 8 },
    { name: 'SEPTEMBRE', number: 9 },
    { name: 'OCTOBRE', number: 10 },
    { name: 'NOVEMBRE', number: 11 },
    { name: 'DÉCEMBRE', number: 12 },
  ];

  const dayHeaders = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <>
      <PageHead
        title="Calendrier Fiscal et Social 2026 - Cabinet ECIFEC"
        description="Calendrier 2026 des échéances fiscales et sociales : TVA, IS, DSN, charges sociales, déclarations. Ne manquez aucune date importante pour votre entreprise."
      />
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
          color: 'white',
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <SectionTitle
            subtitle="Calendrier 2026"
            title="Dates Importantes"
            description="Calendrier Complet - Obligations Fiscales et Sociales"
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Calendrier Grid */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {months.map((monthData, index) => {
              const monthDays = generateMonthDays(monthData.number, 2026);

              return (
                <Grid item xs={12} sm={6} md={4} lg={4} key={monthData.name}>
                  <FadeInSection delay={index * 50} direction="up">
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      {/* Month Header */}
                      <Box
                        sx={{
                          background: 'linear-gradient(45deg, #043033, #0a5a5f)',
                          color: 'white',
                          py: 1.5,
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                          {monthData.name} 2026
                        </Typography>
                      </Box>

                      {/* Calendar Table */}
                      <Box sx={{ p: 1 }}>
                        {/* Day Headers */}
                        <Grid container>
                          {dayHeaders.map((dayHeader, idx) => (
                            <Grid item xs={12 / 7} key={idx}>
                              <Box
                                sx={{
                                  textAlign: 'center',
                                  py: 0.5,
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  color: '#5f6368',
                                  backgroundColor: '#f1f3f4',
                                  borderBottom: '1px solid #dadce0',
                                }}
                              >
                                {dayHeader}
                              </Box>
                            </Grid>
                          ))}
                        </Grid>

                        {/* Calendar Days */}
                        <Grid container>
                          {monthDays.slice(0, 42).map((dayData, idx) => {
                            const hasEvents = dayData.events && dayData.events.length > 0;

                            return (
                              <Grid item xs={12 / 7} key={idx}>
                                <Box
                                  sx={{
                                    minHeight: '60px',
                                    border: '1px solid #e8eaed',
                                    p: 0.5,
                                    backgroundColor: !dayData.isCurrentMonth
                                      ? '#f8f9fa'
                                      : dayData.isWeekend
                                      ? '#fef7e0'
                                      : 'white',
                                    opacity: !dayData.isCurrentMonth ? 0.5 : 1,
                                    position: 'relative',
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: '0.75rem',
                                      fontWeight: 700,
                                      color: !dayData.isCurrentMonth ? '#9aa0a6' : '#333',
                                    }}
                                  >
                                    {dayData.day}
                                  </Typography>

                                  {hasEvents && (
                                    <Box sx={{ mt: 0.5 }}>
                                      {dayData.events.map((event, eventIdx) => (
                                        <Box
                                          key={eventIdx}
                                          sx={{
                                            ...getEventStyle(event.type),
                                            fontSize: '0.55rem',
                                            padding: '1px 2px',
                                            borderRadius: '2px',
                                            mb: 0.25,
                                            lineHeight: 1.2,
                                            fontWeight: 600,
                                          }}
                                        >
                                          {event.task}
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                </Box>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </Paper>
                  </FadeInSection>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Légende */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <FadeInSection>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                border: '2px solid #C7B376',
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#043033',
                  fontWeight: 700,
                  textAlign: 'center',
                  mb: 4,
                }}
              >
                📋 LÉGENDES ET INFORMATIONS IMPORTANTES
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{
                      width: 4,
                      minHeight: 60,
                      backgroundColor: '#c62828',
                      mr: 2,
                      borderRadius: 1
                    }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#043033', mb: 1.5, fontSize: '1rem' }}>
                        OBLIGATIONS FISCALES
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        • TVA CA3 - Déclaration et paiement de la TVA mensuelle ou trimestrielle
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • TVA CA12 - Déclaration TVA annuelle et Solde CVAE
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • IS - Déclaration et paiement de l'Impôt sur les Sociétés
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • Acomptes IS, CVAE, CFE - Acomptes pour 2026
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • BILAN - Dépôt de la liasse fiscale
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{
                      width: 4,
                      minHeight: 60,
                      backgroundColor: '#1565c0',
                      mr: 2,
                      borderRadius: 1
                    }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#043033', mb: 1.5, fontSize: '1rem' }}>
                        OBLIGATIONS SOCIALES
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        • FICHE DE PAIE - Envoi des instructions sociales (jusqu'au 6 du mois maximum)
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • DSN - Déclaration Sociale Nominative (du 13 au 15 max)
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • TAXE D'APPRENTISSAGE - Déclaration et paiement du solde 2025
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • OETH - Obligation d'Emploi des Travailleurs Handicapés (entreprises 20+ salariés)
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • OPCO - Contributions conventionnelles 2026
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{
                      width: 4,
                      minHeight: 60,
                      backgroundColor: '#7b1fa2',
                      mr: 2,
                      borderRadius: 1
                    }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#043033', mb: 1.5, fontSize: '1rem' }}>
                        OBLIGATIONS MIXTES
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontStyle: 'italic', mb: 1.5 }}>
                        Obligations combinant déclarations fiscales et sociales
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        • TVA CA12 & CVAE - Déclarations annuelles combinées
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1.2 }}>
                        • Acomptes IS & CVAE & CFE - Paiements d'acomptes multiples
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ mt: 4, p: 2, backgroundColor: '#fef7e0', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                  <strong style={{ color: '#C7B376' }}>📅 Note :</strong> Les cases jaunes indiquent les week-ends.
                  Les dates tombant un week-end ou jour férié sont automatiquement reportées au jour ouvrable suivant.
                </Typography>
              </Box>
            </Paper>
          </FadeInSection>
        </Container>
      </Box>

      {/* Notes importantes */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <FadeInSection>
            <Typography
              variant="h4"
              sx={{
                color: '#C7B376',
                fontWeight: 700,
                textAlign: 'center',
                mb: 4,
              }}
            >
              ⚠️ NOTES IMPORTANTES
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Alert
                  severity="warning"
                  sx={{
                    backgroundColor: 'rgba(255, 243, 205, 0.15)',
                    border: '2px solid #C7B376',
                    color: 'white',
                    '& .MuiAlert-icon': {
                      color: '#C7B376',
                    },
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    📌 SUIVI OPTIMAL
                  </Typography>
                  <Typography variant="body2">
                    Pour un meilleur suivi de votre dossier, transmettez tous vos éléments comptables
                    (ACHATS, VENTES, BANQUES) au plus tard le <strong>12 du mois suivant</strong>.
                  </Typography>
                </Alert>
              </Grid>

              <Grid item xs={12} md={4}>
                <Alert
                  severity="info"
                  sx={{
                    backgroundColor: 'rgba(255, 243, 205, 0.15)',
                    border: '2px solid #C7B376',
                    color: 'white',
                    '& .MuiAlert-icon': {
                      color: '#C7B376',
                    },
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    💡 RAPPEL ACOMPTES
                  </Typography>
                  <Typography variant="body2">
                    Les acomptes d'IS, CVAE et CFE ne sont pas exigibles si le montant total
                    n'excède pas <strong>3 000 €</strong> par an.
                  </Typography>
                </Alert>
              </Grid>

              <Grid item xs={12} md={4}>
                <Alert
                  severity="success"
                  sx={{
                    backgroundColor: 'rgba(255, 243, 205, 0.15)',
                    border: '2px solid #C7B376',
                    color: 'white',
                    '& .MuiAlert-icon': {
                      color: '#C7B376',
                    },
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    📅 PLANIFICATION
                  </Typography>
                  <Typography variant="body2">
                    Les dates sur week-ends ou jours fériés sont automatiquement reportées au{' '}
                    <strong>jour ouvrable suivant</strong>.
                  </Typography>
                </Alert>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Typography variant="h5" sx={{ color: '#C7B376', fontWeight: 700, mb: 1 }}>
                📞 CABINET ECIFEC - Votre partenaire comptable de confiance
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                3 Bd Albert Camus, 95200 Sarcelles | 01 34 04 35 05 | expert-comptable@ecifec95.com
              </Typography>
            </Box>
          </FadeInSection>
        </Container>
      </Box>
    </>
  );
}
