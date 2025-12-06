/**
 * Middleware CSRF - Génère token UUID pour chaque session
 *
 * POURQUOI CSRF: Empêche sites malveillants de faire des requêtes POST vers notre API
 * FLOW: Cookie généré → Client lit cookie → Client renvoie dans header X-CSRF-Token → Serveur valide
 *
 * POURQUOI httpOnly: false (décision sécurité importante):
 * Token CSRF doit être lisible par JS pour être renvoyé dans headers.
 * Sécurisé car attaquant XSS ne peut pas faire requête cross-origin (Same-Origin Policy)
 *
 * @module middleware
 */

import { NextResponse } from 'next/server';

/**
 * Génère token CSRF si absent
 * @param {NextRequest} request
 * @returns {NextResponse}
 */
export function middleware(request) {
  const response = NextResponse.next();
  const csrfToken = request.cookies.get('csrf-token')?.value;

  if (!csrfToken) {
    const newToken = crypto.randomUUID();
    response.cookies.set('csrf-token', newToken, {
      httpOnly: false,  // Doit être lisible par JS pour header X-CSRF-Token
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });
  }

  return response;
}

// Matcher: exclut assets statiques (pas de mutation = pas besoin CSRF)
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)).*)',
  ],
};
