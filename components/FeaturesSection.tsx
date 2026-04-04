'use client';

import React from 'react';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { Shield, Zap, Lock, Globe, Users, BarChart, Cpu, Cloud } from 'lucide-react';
import { useTranslations } from 'next-intl' ;

export const FeaturesSection: React.FC = () => {
  const t = useTranslations ('features') ;
  const tCommon = useTranslations('common');

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('items.zeroTrust.title'),
      description: t('items.zeroTrust.description'),
      gradient: "from-blue-500 to-cyan-500 dark:from-red-500 dark:to-red-700"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('items.globalMesh.title'),
      description: t('items.globalMesh.description'),
      gradient: "from-purple-500 to-pink-500 dark:from-red-600 dark:to-red-800"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: t('items.encryption.title'),
      description: t('items.encryption.description'),
      gradient: "from-green-500 to-emerald-500 dark:from-red-500 dark:to-red-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('items.instantDeployment.title'),
      description: t('items.instantDeployment.description'),
      gradient: "from-orange-500 to-red-500 dark:from-red-600 dark:to-red-800"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('items.aiThreat.title'),
      description: t('items.aiThreat.description'),
      gradient: "from-indigo-500 to-blue-500 dark:from-red-500 dark:to-red-700"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: t('items.analytics.title'),
      description: t('items.analytics.description'),
      gradient: "from-cyan-500 to-blue-500 dark:from-red-600 dark:to-red-800"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
              {t('title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:shadow-red-900/20"
            >
              <div className="p-1 mb-6 inline-flex rounded-2xl bg-gradient-to-r opacity-90 group-hover:opacity-100">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient}`}>
                  <div className="text-white dark:text-white">{feature.icon}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors dark:text-white dark:group-hover:text-red-400">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity dark:text-red-400">
                {tCommon('readMore')}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};