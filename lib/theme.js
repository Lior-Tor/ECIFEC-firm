/**
 * Thème Material-UI personnalisé pour ECIFEC
 *
 * DESIGN SYSTEM:
 * - Couleur primaire: #043033 (Vert foncé/teal professionnel)
 * - Couleur secondaire: #C7B376 (Or/beige élégant)
 * - Typographie: Roboto (standard Material Design)
 * - Responsive: breakpoints et tailles adaptatives
 *
 * UTILISATION:
 * - Wrappé dans ThemeProvider dans app/layout.js
 * - Tous les composants MUI utilisent automatiquement ce thème
 * - Accès au thème via useTheme() hook ou sx prop
 *
 * @module theme
 */

'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Palette de couleurs (identité visuelle ECIFEC)
  palette: {
    primary: {
      main: '#043033',         // Vert foncé principal
      light: '#0a5a5f',        // Version claire pour hover
      dark: '#021a1c',         // Version foncée pour active
      contrastText: '#ffffff', // Texte sur fond primaire
    },
    secondary: {
      main: '#C7B376',         // Or/beige principal
      light: '#d4c491',        // Version claire
      dark: '#a39360',         // Version foncée
      contrastText: '#000000', // Texte sur fond secondaire
    },
    background: {
      default: '#FFFFFF',      // Fond de page
      paper: '#EDF5F2',        // Fond des cartes/sections
    },
    text: {
      primary: '#212121',      // Texte principal (noir)
      secondary: '#757575',    // Texte secondaire (gris)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(4, 48, 51, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            transform: 'translateY(-4px)',
            transition: 'all 0.3s ease',
          },
        },
      },
    },
  },
});

export default theme;
