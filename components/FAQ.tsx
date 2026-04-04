'use client';

import React from 'react';
import { Container } from './ui/Container';
import { Accordion } from './ui/Accordion';
import { useTranslations } from 'next-intl';

export const FAQ: React.FC = () => {
  const t = useTranslations ('faq');
  const faqItems = [
    {
      id: 1,
      question: t("items.q1"),
      answer: t("items.a1")
    },
    {
      id: 2,
      question: t("items.q2"),
      answer: t("items.a2")
    },
    {
      id: 3,
      question: t("items.q3"),
      answer: t("items.a3")
    },
    {
      id: 4,
      question: t("items.q4"),
      answer: t("items.a4")
    },
    {
      id: 5,
      question: t("items.q5"),
      answer: t("items.a5")
    },
    {
      id: 6,
      question: t("items.q6"),
      answer: t("items.a6")
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('title')}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                {t('titleGradient')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>

          <Accordion items={faqItems} />

          {/* Additional help */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('help')}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 dark:text-red-400 dark:hover:text-red-500"
            >
              {t('contactLink')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};