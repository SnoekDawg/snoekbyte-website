import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  // Check if locale is already in pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameLocale) return pathnameLocale;

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map((lang) => {
        const [code, priority = '1'] = lang.trim().split(';q=');
        return { code: code.split('-')[0], priority: parseFloat(priority) };
      })
      .sort((a, b) => b.priority - a.priority);

    for (const { code } of languages) {
      // Map language codes to our supported locales
      const mappedCode = code === 'cs' || code === 'cz' ? 'cs' : code === 'sv' || code === 'se' ? 'sv' : code;
      if (locales.includes(mappedCode)) {
        return mappedCode;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/locales') ||
    pathname.includes('.') // Skip files with extensions
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname || ''}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next|api|images|locales|favicon.ico).*)',
  ],
};
