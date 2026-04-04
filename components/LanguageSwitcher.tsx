'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface LanguageSwitcherProps {
  mobile?: boolean;
  onSelect?: () => void;
}

export default function LanguageSwitcher({ mobile, onSelect }: LanguageSwitcherProps) {
  let locale;
  try {
    locale = useLocale();
  } catch (e) {
    console.warn('LanguageSwitcher used outside of Intl context');
    return null;
  }

  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    localStorage.setItem('NEXT_LOCALE', newLocale);
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
    onSelect?.();
  };

  const languageNames: Record<string, string> = {
    ru: 'Русский',
    en: 'English',
    it: 'Italiano',
    es: 'Español',
    de: 'Deutsch',
    cz: 'Čeština',
    no: 'Norsk',
    fr: 'Français',
    pl: 'Polski',
    br: 'Português',
    he: 'עברית'
  };

  if (mobile) {
    return (
      <div className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white/10 rounded-lg text-white font-medium dark:bg-gray-800/50 dark:text-white"
        >
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-white dark:text-white" />
            <span className="text-white dark:text-white">{languageNames[locale] || locale.toUpperCase()}</span>
          </div>
          <ChevronDown className={`w-5 h-5 text-white dark:text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 max-h-60 overflow-y-auto z-50">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                  locale === loc 
                    ? 'text-blue-600 dark:text-red-400 font-medium bg-blue-50 dark:bg-red-900/20' 
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              >
                {languageNames[loc] || loc.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Десктопная версия
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors dark:hover:bg-gray-800/50"
      >
        <Globe className="w-4 h-4 text-white dark:text-white" />
        <span className="text-sm font-medium text-white dark:text-white">{locale.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 text-white dark:text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 min-w-[120px] z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                locale === loc 
                  ? 'text-blue-600 dark:text-red-400 font-medium' 
                  : 'text-gray-700 dark:text-gray-400'
              }`}
            >
              {languageNames[loc] || loc.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}