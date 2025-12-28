'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon - Multiple formats for better compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* PWA Manifest for better Google Search display */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme colors for browser UI */}
        <meta name="theme-color" content="#043033" />
        <meta name="msapplication-TileColor" content="#043033" />

        {/* Structured Data for organization info */}
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
