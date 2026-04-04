import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, Shield, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        {/* Круглая иконка с фоном */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 dark:bg-red-900/30 rounded-full mb-8">
          <Search className="w-12 h-12 text-blue-600 dark:text-red-400" />
        </div>
        
        {/* Заголовок 404 */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          {t('title')}
        </h1>
        
        {/* Бейдж с щитом */}
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-red-900/30 text-blue-700 dark:text-red-400 px-4 py-2 rounded-full mb-8">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-semibold">{t('badge')}</span>
        </div>
        
        {/* Подзаголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t('subtitle')}
        </h2>
        
        {/* Описание */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          {t('description')}
        </p>
        
        {/* Кнопка возврата на главную */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}`}>
            <Button size="lg" variant="primary" className="dark:from-red-600 dark:to-red-800 dark:hover:from-red-700 dark:hover:to-red-900">
              <Home className="w-5 h-5 mr-2 inline" />
              {t('button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}