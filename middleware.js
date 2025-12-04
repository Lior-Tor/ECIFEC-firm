import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Generate CSRF token if not exists
  const csrfToken = request.cookies.get('csrf-token')?.value;
  
  if (!csrfToken) {
    const newToken = crypto.randomUUID();
    response.cookies.set('csrf-token', newToken, {
      httpOnly: false,  // CSRF tokens must be readable by JavaScript
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)).*)',
  ],
};
