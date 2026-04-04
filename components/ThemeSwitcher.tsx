'use client';

import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ThemeSwitcherProps {
  mobile?: boolean;
  onSelect?: () => void;
}

export default function ThemeSwitcher({ mobile, onSelect }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('common');

  const handleToggle = () => {
    toggleTheme();
    onSelect?.();
  };

  if (mobile) {
    return (
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/10 rounded-lg text-white font-medium dark:bg-gray-800/50 dark:text-white"
      >
        <div className="flex items-center space-x-2">
          {theme === 'light' ? (
            <>
              <Moon className="w-5 h-5 text-white dark:text-white" />
              <span>{t('darkTheme')}</span>
            </>
          ) : (
            <>
              <Sun className="w-5 h-5 text-white dark:text-white" />
              <span>{t('lightTheme')}</span>
            </>
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors dark:hover:bg-gray-800/50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-white dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-white dark:text-white" />
      )}
    </button>
  );
}