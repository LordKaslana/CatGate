import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Поддерживаемые языки
  locales,
  
  // Язык по умолчанию
  defaultLocale,
  
  // Всегда показывать язык в URL (/ru, /en)
  localePrefix: 'always',
  localeDetection: true
});

export const config = {
  // Матчер определяет, какие пути обрабатывать
  matcher: [
    // Исключаем API роуты, Next.js внутренние пути и статические файлы
    '/((?!api|_next|.*\\..*).*)'
  ]
};