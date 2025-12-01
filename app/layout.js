'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import StructuredData from '@/components/shared/StructuredData';
import theme from '@/lib/theme';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Cabinet ECIFEC - Expert-Comptable</title>
        <meta
          name="description"
          content="Cabinet d'expertise comptable ECIFEC à Sarcelles. Accompagnement personnalisé pour les entreprises du BTP, professions libérales et restauration."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social media and Google */}
        <meta property="og:site_name" content="Cabinet ECIFEC" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cabinet ECIFEC - Expert-Comptable à Sarcelles" />
        <meta property="og:description" content="Cabinet d'expertise comptable ECIFEC à Sarcelles. Plus de 35 ans d'expérience. Accompagnement personnalisé pour les entreprises." />
        <meta property="og:url" content="https://ecifec.com" />
        <meta property="og:locale" content="fr_FR" />

        {/* Favicon - Multiple formats for better compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* SEO Meta Tags for Google */}
        <meta name="theme-color" content="#043033" />
        <meta name="msapplication-TileColor" content="#043033" />

        {/* Structured Data for SEO */}
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ScrollProgress />
            <Header />
            <main style={{ minHeight: 'calc(100vh - 400px)' }}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
