/**
 * API Route: Contact Form Submission
 *
 * Endpoint sécurisé pour gérer les soumissions du formulaire de contact.
 * Implémente plusieurs couches de sécurité pour protéger contre les abus.
 *
 * ARCHITECTURE DE SÉCURITÉ (défense en profondeur):
 * 1. Rate Limiting (5 req/heure/IP) - Prévient le spam et les attaques par force brute
 * 2. CSRF Protection - Empêche les requêtes cross-site malveillantes
 * 3. Server-side Validation - Valide les champs requis
 * 4. XSS Sanitization - Nettoyage côté client (DOMPurify avant envoi)
 * 5. Server-only Credentials - EmailJS credentials jamais exposées au client
 *
 * FLUX DE TRAITEMENT:
 * Request → Rate Limit Check → CSRF Validation → Input Validation → EmailJS Send → Response
 *
 * @module api/contact
 */

import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';
import { checkRateLimit } from '@/lib/rateLimit';

/**
 * Traite les soumissions du formulaire de contact
 * FLOW: Rate Limit → CSRF → Validation → EmailJS Send → Response
 *
 * @async
 * @param {Request} request
 * @returns {Promise<NextResponse>} Status 200/400/403/429/500
 */
export async function POST(request) {
  try {
    // Extraction IP (x-forwarded-for supporte proxies/load balancers)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Rate limiting: 5 req/heure/IP (vérifié avant CSRF pour performance)
    const rateLimitResult = checkRateLimit(ip);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Trop de tentatives. Veuillez patienter avant de réessayer.',
          retryAfter: rateLimitResult.retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          }
        }
      );
    }

    // CSRF validation (token généré par middleware.js)
    const csrfTokenFromCookie = request.cookies.get('csrf-token')?.value;
    const csrfTokenFromHeader = request.headers.get('X-CSRF-Token');

    if (!csrfTokenFromCookie || csrfTokenFromCookie !== csrfTokenFromHeader) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Server-side validation (client Zod peut être contourné via DevTools)
    if (!body.name || !body.email || !body.message || !body.rgpd) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Credentials EmailJS (côté serveur uniquement pour sécurité)
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Template params (correspondent aux placeholders EmailJS)
    const templateParams = {
      from_name: body.name,
      from_email: body.email,
      phone: body.phone || 'Non renseigné',
      request_type: body.requestType === 'devis' ? 'Demande de devis' :
                   body.requestType === 'rendez-vous' ? 'Prise de rendez-vous' :
                   'Question générale',
      sector: body.sector || 'Non spécifié',
      message: body.message,
      ip_address: ip,
    };

    // Envoi email principal
    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
      privateKey,
    });

    // Envoi réponse automatique (optionnel, améliore UX)
    const autoresponseTemplateId = process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID;
    if (autoresponseTemplateId && autoresponseTemplateId !== 'your_autoresponse_template_id_here') {
      await emailjs.send(serviceId, autoresponseTemplateId, {
        to_name: body.name,
        to_email: body.email,
        request_type: templateParams.request_type,
      }, { publicKey, privateKey });
    }

    // Succès avec headers rate limiting (client connaît quotas restants)
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      {
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
        }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error.message || error.text || error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        message: error.message || error.text || 'An error occurred'
      },
      { status: 500 }
    );
  }
}

// GET refusé: formulaires doivent utiliser POST (données sensibles pas dans URL)
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
