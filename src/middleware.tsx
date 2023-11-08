import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/locales';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
