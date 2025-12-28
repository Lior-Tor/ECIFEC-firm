/**
 * Configuration Next.js avec headers de sécurité et redirections HTTPS
 *
 * ARCHITECTURE:
 * - Security Headers: Protection contre OWASP Top 10 (XSS, Clickjacking, MIME sniffing)
 * - CSP (Content Security Policy): Contrôle des sources autorisées
 * - HTTPS Enforcement: Redirection automatique en production
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // React Strict Mode: détecte effets secondaires et composants obsolètes
  reactStrictMode: true,

  // Configuration des images optimisées (Next.js Image)
  // domains: [] = Seules les images hébergées localement sont autorisées
  images: {
    domains: [],
  },

  // Headers de sécurité HTTP (défense en profondeur contre OWASP Top 10)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Anti-clickjacking: empêche affichage dans iframe
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Force respect du Content-Type (empêche MIME sniffing attacks)
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Contrôle du referer pour protéger vie privée (pas de leak d'URL sensibles)
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Désactive API navigateur non utilisées (caméra, micro, géolocalisation)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Legacy XSS filter (navigateurs anciens, CSP est plus moderne)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          /**
           * CSP: Protection XSS via liste blanche de sources autorisées
           * unsafe-inline/unsafe-eval requis pour Next.js et MUI
           * Sources tierces: EmailJS, Google Maps, URSSAF simulateurs, Vercel Analytics
           */
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.emailjs.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://api.emailjs.com https://vitals.vercel-insights.com",
              "frame-src 'self' https://www.google.com https://mon-entreprise.urssaf.fr",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
        ],
      },
    ];
  },

  /**
   * Force HTTPS en production pour éviter man-in-the-middle
   * Redirection 301 permanente basée sur x-forwarded-proto header
   * Redirection www → non-www pour éviter duplicate content
   * Redirection pages obsolètes
   */
  async redirects() {
    // Redirections permanentes (production et développement)
    const permanentRedirects = [
      // Aucune redirection permanente pour le moment
    ];

    // NOTE: Les redirections HTTP → HTTPS et www → non-www sont gérées automatiquement
    // par Vercel dans les paramètres de domaine pour éviter les boucles de redirection.
    // Configuration: Vercel Dashboard → Settings → Domains → Redirect www to non-www

    return permanentRedirects;
  },
}

module.exports = nextConfig

