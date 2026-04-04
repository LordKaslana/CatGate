'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function LinkWithLocale({ href, children, ...props }: any) {
  const locale = useLocale();
  
  // Если ссылка начинается с # (якорь), оставляем как есть
  if (href.startsWith('#')) {
    return <a href={href} {...props}>{children}</a>;
  }
  
  return <Link href={`/${locale}${href}`} {...props}>{children}</Link>;
}