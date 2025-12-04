'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { STATS } from '@/lib/data/secteurs';
import CountUp from '@/components/shared/CountUp';
import FadeInSection from '@/components/shared/FadeInSection';

export default function StatsSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {STATS.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <FadeInSection delay={index * 100} direction="up">
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'white',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  {stat.isImage ? (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 1,
                        minHeight: { xs: '56px', md: '80px' },
                      }}
                    >
                      <Image
                        src="/images/oec.png"
                        alt="Ordre des Experts-Comptables"
                        width={140}
                        height={140}
                        style={{ objectFit: 'contain' }}
                        loading="lazy"
                      />
                    </Box>
                  ) : (
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                        fontSize: { xs: '1.75rem', md: '2.5rem' },
                      }}
                    >
                      <CountUp
                        end={stat.value}
                        duration={2500}
                        prefix={stat.prefix || ''}
                        suffix={stat.suffix || ''}
                      />
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
