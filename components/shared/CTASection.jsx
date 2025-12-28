'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import { CABINET_INFO } from '@/lib/data/navigation';
import FadeInSection from './FadeInSection';

export default function CTASection({
  title = 'Prêt à simplifier votre comptabilité ?',
  subtitle = 'Contactez-nous dès aujourd\'hui pour un accompagnement sur-mesure',
  showPhone = true,
}) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image with lazy loading */}
      <Image
        src="/images/CTA-banner.webp"
        alt="Contact et accompagnement comptable"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        quality={85}
      />
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.03)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <FadeInSection delay={0} direction="up">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                opacity: 0.95,
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              {subtitle}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 50,
                }}
              >
                Demander un devis
              </Button>
            </Link>
            {showPhone && (
              <Button
                href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 50,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                  },
                }}
              >
                {CABINET_INFO.contact.phone}
              </Button>
            )}
            </Box>
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
}
