'use client';

import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Shield, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('header');
  const tCommon = useTranslations('common');

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  const headerStyles = {
    base: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
    visible: isVisible ? "translate-y-0" : "-translate-y-full",
    background: isScrolled 
      ? "bg-blue-900/95 backdrop-blur-md border-b border-blue-700/30 dark:bg-gray-950/95 dark:border-red-800/30" 
      : "bg-transparent border-transparent"
  };

  const logoStyles = {
    background: isScrolled 
      ? "bg-blue-600/20 backdrop-blur-sm dark:bg-red-600/20" 
      : "bg-white/20 backdrop-blur-sm dark:bg-gray-800/40",
    textColor: "text-white dark:text-white",
    subtextColor: isScrolled ? "text-blue-200 dark:text-red-300" : "text-white/80 dark:text-gray-300"
  };

  const navLinkStyles = "text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300";
  const buttonOutlineStyles = "border-white/50 text-white hover:bg-white/10 dark:border-red-400/50 dark:text-white dark:hover:bg-red-950/50";
  const mobileMenuBackground = "bg-blue-900/95 backdrop-blur-md dark:bg-gray-950/95 dark:border-t dark:border-red-800/30";

  return (
    <header className={`${headerStyles.base} ${headerStyles.visible} ${headerStyles.background}`}>
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип - как в forgot-password */}
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 dark:bg-red-600 dark:from-red-600 dark:to-red-700">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">
                CatGate
              </span>
              <div className="text-xs text-blue-200 dark:text-red-300">
                {tCommon('securityPlatform')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={`/${locale}#features`} className="font-medium transition-all duration-300 hover:scale-105 text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300">
              {t('features')}
            </a>
            <a href={`/${locale}#how-it-works`} className="font-medium transition-all duration-300 hover:scale-105 text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300">
              {t('solutions')}
            </a>
            <a href={`/${locale}#pricing`} className="font-medium transition-all duration-300 hover:scale-105 text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300">
              {t('pricing')}
            </a>
            <a href={`/${locale}#contact`} className="font-medium transition-all duration-300 hover:scale-105 text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300">
              {t('contact')}
            </a>
          </nav>

          {/* Кнопки с переходами и переключатели */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />

            <Button 
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 dark:border-red-400/50 dark:text-white dark:hover:bg-red-950/50 transition-all duration-300"
              onClick={() => router.push(`/${locale}/login`)}
            >
              {t('login')}
            </Button>
            <Button 
              variant="primary" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 dark:from-red-600 dark:to-red-800 dark:hover:from-red-700 dark:hover:to-red-900"
              onClick={() => router.push(`/${locale}/register`)}
            >
              {t('register')}
            </Button>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700/30 dark:border-red-800/30 bg-blue-900/95 backdrop-blur-md dark:bg-gray-950/95">
            <div className="space-y-4">
              <a href={`/${locale}#features`} className="block text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300 font-medium py-2 transition-colors duration-300">
                {t('features')}
              </a>
              <a href={`/${locale}#how-it-works`} className="block text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300 font-medium py-2 transition-colors duration-300">
                {t('solutions')}
              </a>
              <a href={`/${locale}#pricing`} className="block text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300 font-medium py-2 transition-colors duration-300">
                {t('pricing')}
              </a>
              <a href={`/${locale}#contact`} className="block text-white hover:text-blue-200 dark:text-gray-200 dark:hover:text-red-300 font-medium py-2 transition-colors duration-300">
                {t('contact')}
              </a>
              
              {/* Мобильный переключатель языка */}
              <div className="pt-2 pb-2 border-t border-blue-700/30 dark:border-red-800/30">
                <LanguageSwitcher 
                  mobile 
                  onSelect={() => setIsMenuOpen(false)} 
                />
              </div>

              {/* Мобильный переключатель темы */}
              <div className="pb-2">
                <ThemeSwitcher 
                  mobile 
                  onSelect={() => setIsMenuOpen(false)} 
                />
              </div>

              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-white/50 text-white hover:bg-white/10 dark:border-red-400/50 dark:text-white dark:hover:bg-red-950/50"
                  onClick={() => {
                    router.push(`/${locale}/login`);
                    setIsMenuOpen(false);
                  }}
                >
                  {t('login')}
                </Button>
                <Button 
                  variant="primary" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white dark:from-red-600 dark:to-red-800"
                  onClick={() => {
                    router.push(`/${locale}/register`);
                    setIsMenuOpen(false);
                  }}
                >
                  {t('register')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};