'use client';

import React from 'react';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { UserPlus, Server, ShieldCheck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const HowItWorks: React.FC = () => {
  const t = useTranslations ('howItWorks');
  
  const steps = [
    {
      number: "01",
      icon: <UserPlus />,
      title: t('steps.account.title'),
      description: t('steps.account.description'),
      color: "from-blue-500 to-cyan-500 dark:from-red-500 dark:to-red-700"
    },
    {
      number: "02",
      icon: <Server />,
      title: t('steps.resources.title'),
      description: t('steps.resources.description'),
      color: "from-purple-500 to-pink-500 dark:from-red-600 dark:to-red-800"
    },
    {
      number: "03",
      icon: <Zap />,
      title: t('steps.access.title'),
      description: t('steps.access.description'),
      color: "from-orange-500 to-red-500 dark:from-red-700 dark:to-red-900"
    },
    {
      number: "04",
      icon: <ShieldCheck />,
      title: t('steps.protected.title'),
      description: t('steps.protected.description'),
      color: "from-green-500 to-emerald-500 dark:from-red-500 dark:to-red-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          {/* Бейдж */}
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 rounded-full mb-4 md:mb-6 dark:bg-red-900/30">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1.5 md:mr-2 dark:text-red-400" />
            <span className="text-xs md:text-sm font-semibold text-blue-700 dark:text-red-400">
              {t('badge')}
            </span>
          </div>
          
          {/* Заголовок */}
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 px-2 text-gray-900 dark:text-white">
            {t('titlePrefix')}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-red-600 dark:to-red-800">
              {t('titleCompany')}
            </span>
            {t('titleSuffix')}
          </h2>
        </div>

        <div className="relative px-4">
          {/* Вертикальная соединительная линия для мобильных */}
          <div className="block lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 -translate-x-1/2 z-0 dark:from-red-600 dark:via-red-700 dark:to-red-800" />
          
          {/* Горизонтальная линия для десктопа */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2 z-0 dark:from-red-600 dark:via-red-700 dark:to-red-800" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex lg:flex-col items-start">
                {/* Общий контейнер для номера и иконки */}
                <div className="flex lg:flex-col items-center mr-4 lg:mr-0 lg:mb-6">
                  {/* Номер шага */}
                  <div className={`flex items-center justify-center w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-xl lg:rounded-2xl bg-gradient-to-r ${step.color} text-white text-base md:text-xl lg:text-2xl font-bold shadow-md lg:shadow-lg dark:shadow-red-900/30`}>
                    {step.number}
                  </div>
                  
                  {/* Иконка - теперь внутри градиентного круга */}
                  <div className={`hidden lg:flex items-center justify-center w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 rounded-full bg-gradient-to-r ${step.color} text-white shadow-md lg:shadow-lg mt-4 lg:mt-6 dark:shadow-red-900/30`}>
                    <div className="w-6 h-6 lg:w-7 lg:h-7">
                      {React.cloneElement(step.icon, { className: "w-full h-full" })}
                    </div>
                  </div>
                </div>
                
                {/* Карточка с описанием */}
                <Card className="flex-1 lg:h-full hover:shadow-lg lg:hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:shadow-red-900/20">
                  <div className="p-4 lg:p-6">
                    {/* Иконка только для мобильных (внутри карточки) */}
                    <div className="lg:hidden mb-4">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white shadow-md dark:shadow-red-900/30`}>
                        <div className="w-5 h-5">
                          {React.cloneElement(step.icon, { className: "w-full h-full" })}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 dark:text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs lg:text-base text-gray-600 leading-relaxed dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};