'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const companies = [
  { name: 'Fortinet', logo: '/logos/fortinet.svg' },
  { name: 'Cisco', logo: '/logos/cisco.svg' },
  { name: 'Palo Alto', logo: '/logos/palo-alto.svg' },
  { name: 'Check Point', logo: '/logos/checkpoint.svg' },
  { name: 'Juniper', logo: '/logos/juniper.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  { name: 'Google Cloud', logo: '/logos/google-cloud.svg' },
];

export const TrustCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const t = useTranslations('trustCarousel');

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="relative w-full py-6 md:py-12">
      <div className="text-center mb-6 md:mb-10 container mx-auto px-4">
        <p className="text-sm text-blue-200/80 uppercase tracking-wider font-medium dark:text-red-300/80">
          {t('title')}
        </p>
      </div>

      <div className="relative w-screen">
        <div 
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex gap-8 md:gap-16 animate-infinite-scroll md:animate-infinite-scroll-mobile py-4"
            style={{ 
              width: `${duplicatedCompanies.length * 120}px`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex flex-col items-center flex-shrink-0 px-2 md:px-4"
              >
                <div className={`
                  w-24 h-24 md:w-40 md:h-40 
                  p-4 md:p-6 rounded-2xl 
                  bg-gradient-to-br from-gray-900/40 to-gray-800/20
                  border border-white/10 backdrop-blur-sm
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-105 hover:border-blue-400/30 hover:shadow-lg
                  hover:opacity-100
                  dark:from-gray-800/60 dark:to-gray-900/40
                  dark:border-gray-700/30
                  dark:hover:border-red-400/30 dark:hover:shadow-red-900/20
                `}>
                  <div className="relative w-full h-full">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain p-1 md:p-2 filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity dark:brightness-100 dark:invert-0"
                      sizes="(max-width: 768px) 96px, 160px"
                    />
                  </div>
                </div>
                
                <div className="mt-4 md:mt-6 text-sm md:text-lg font-semibold text-gray-300 text-center dark:text-gray-400">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};