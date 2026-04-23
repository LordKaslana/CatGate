import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET!;

// Создаём middleware для языков
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true
});

// Страницы, требующие авторизации
const protectedRoutes = ['/profile'];

// Публичные страницы (редирект с них, если уже залогинен)
const authRoutes = ['/login', '/register'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Проверяем, не API ли это (API роуты обрабатываются отдельно)
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  
  // === ЛОГИКА АВТОРИЗАЦИИ ===
  const token = request.cookies.get('token')?.value;
  
  let isValid = false;
  if (token) {
    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      isValid = true;
    } catch {
      isValid = false;
    }
  }
  
  // Если авторизован и пытается зайти на логин/регистрацию — редирект на профиль
  if (isValid && authRoutes.some(route => pathname.startsWith(route))) {
    const profileUrl = new URL('/profile', request.url);
    // Сохраняем язык из текущего URL
    const locale = pathname.split('/')[1];
    if (locales.includes(locale as any)) {
      profileUrl.pathname = `/${locale}/profile`;
    }
    return NextResponse.redirect(profileUrl);
  }
  
  // Если не авторизован и пытается зайти на защищённую страницу — редирект на логин
  if (!isValid && protectedRoutes.some(route => pathname.startsWith(route))) {
    const loginUrl = new URL('/login', request.url);
    const locale = pathname.split('/')[1];
    if (locales.includes(locale as any)) {
      loginUrl.pathname = `/${locale}/login`;
    }
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // === ЛОГИКА ЯЗЫКОВ (ОСТАЁТСЯ БЕЗ ИЗМЕНЕНИЙ) ===
  // Пропускаем статические файлы и API (уже обработано выше)
  // Просто вызываем next-intl middleware для всех остальных путей
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Обрабатываем все пути, кроме статических файлов
    '/((?!_next|.*\\..*).*)'
  ]
};