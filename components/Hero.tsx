'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Shield, Zap, Lock, Globe, Cpu } from 'lucide-react';
import { TrustCarousel } from './TrustCarousel';

export const Hero: React.FC = () => {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  
  const features = [
    { icon: <Shield className="w-5 h-5" />, key: 'zeroTrust' },
    { icon: <Globe className="w-5 h-5" />, key: 'globalNetwork' },
    { icon: <Lock className="w-5 h-5" />, key: 'encryption' },
    { icon: <Cpu className="w-5 h-5" />, key: 'aiThreat' },
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-20 overflow-hidden">
      {/* Фон с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Сетка */}
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Размытые круги */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-red-500/10" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl dark:bg-red-600/10" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl dark:bg-red-700/10" />
      </div>

      {/* Абстрактный человечек/фигура */}
      <div className="absolute right-10 bottom-10 md:right-20 md:bottom-20 opacity-20 dark:opacity-10">
        <div className="relative">
          <div className="w-32 h-48 border border-blue-400/30 rounded-full dark:border-gray-400/20" />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 border border-blue-400/30 rounded-full dark:border-gray-400/20" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <div className="w-20 h-28 border border-green-400/30 rounded-lg rotate-45 dark:border-red-400/20">
              <div className="absolute inset-2 border border-green-400/20 rounded dark:border-red-400/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Контент */}
      <Container className="relative z-10">
        <div className="text-center max-w-6xl mx-auto pt-20">
          {/* Бейдж */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 dark:bg-gray-800/30 dark:border-gray-700/50">
            <div className="mr-3 p-1.5 bg-blue-500 rounded-lg dark:bg-red-600">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">
              {t('badge')}
            </span>
          </div>
          
          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-white">
              {t('title')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-red-600 dark:via-red-700 dark:to-red-800">
              {t('titleGradient')}
            </span>
          </h1>
          
          {/* Описание */}
          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-12 dark:text-gray-300">
            {t('description')}
          </p>
          
          {/* Особенности */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 dark:bg-gray-800/30 dark:border-gray-700/50"
              >
                <div className="mr-3 p-2 bg-blue-500/20 rounded-full dark:bg-red-500/20">
                  <div className="text-cyan-300 dark:text-red-300">{feature.icon}</div>
                </div>
                <span className="text-sm font-medium text-white">
                  {t(`features.${feature.key}`)}
                </span>
              </div>
            ))}
          </div>
          
          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl dark:from-red-600 dark:to-red-800"
            >
              <Shield className="w-5 h-5 mr-3" />
              {tCommon('freeTrial')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-10 border-white/30 text-white hover:border-white/50 hover:bg-white/10 dark:border-gray-600 dark:hover:border-red-500 dark:hover:bg-red-950/30"
            >
              {tCommon('watchDemo')}
            </Button>
          </div>

          {/* Показатели */}
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 dark:text-white">99.9%</div>
                <div className="text-sm text-blue-200/80 dark:text-gray-400">{t('stats.uptime')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 dark:text-white">50+</div>
                <div className="text-sm text-blue-200/80 dark:text-gray-400">{t('stats.countries')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 dark:text-white">1K+</div>
                <div className="text-sm text-blue-200/80 dark:text-gray-400">{t('stats.companies')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 dark:text-white">24/7</div>
                <div className="text-sm text-blue-200/80 dark:text-gray-400">{t('stats.support')}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <TrustCarousel />
      
      {/* Стрелка для скролла */}
      <button
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-10 h-16 rounded-full border border-white/30 flex items-center justify-center dark:border-gray-600">
          <div className="w-1 h-3 bg-white/50 rounded-full dark:bg-gray-400" />
        </div>
      </button>
    </section>
  );
};