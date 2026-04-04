import React from 'react';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const CallToAction: React.FC = () => {
  const t = useTranslations ('cta');
  return (
    <div className="bg-white py-20 dark:bg-gray-950">
      <Container>
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
                {t('title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('description')}
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 dark:from-red-600 dark:to-red-800 dark:hover:from-red-700 dark:hover:to-red-900"
              icon={CheckCircle}
            >
              {t('button')}
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};