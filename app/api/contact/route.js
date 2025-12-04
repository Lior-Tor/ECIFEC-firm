import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(request) {
  try {
    // CSRF Protection
    const csrfTokenFromCookie = request.cookies.get('csrf-token')?.value;
    const csrfTokenFromHeader = request.headers.get('X-CSRF-Token');
    
    if (!csrfTokenFromCookie || csrfTokenFromCookie !== csrfTokenFromHeader) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }
    
    // Rate limiting basic (IP-based)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Parse request body
    const body = await request.json();
    
    // Server-side validation
    if (!body.name || !body.email || !body.message || !body.rgpd) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get EmailJS credentials from server environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    // Debug log (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('EmailJS Config Check:', {
        serviceId: serviceId ? '✓ present' : '✗ missing',
        templateId: templateId ? '✓ present' : '✗ missing',
        publicKey: publicKey ? '✓ present' : '✗ missing',
        privateKey: privateKey ? '✓ present' : '✗ missing',
      });
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    
    // Prepare template parameters
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
    
    // Send email via EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey: publicKey,
        privateKey: privateKey,
      }
    );
    
    // Send auto-response if configured
    const autoresponseTemplateId = process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID;
    if (autoresponseTemplateId && autoresponseTemplateId !== 'your_autoresponse_template_id_here') {
      const autoresponseParams = {
        to_name: body.name,
        to_email: body.email,
        request_type: templateParams.request_type,
      };
      
      await emailjs.send(
        serviceId,
        autoresponseTemplateId,
        autoresponseParams,
        {
          publicKey: publicKey,
          privateKey: privateKey,
        }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully'
    });
    
  } catch (error) {
    // Detailed error logging for debugging
    console.error('Contact form error:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data || error.response || 'No response data',
    });

    return NextResponse.json(
      {
        error: 'Failed to send email',
        message: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
