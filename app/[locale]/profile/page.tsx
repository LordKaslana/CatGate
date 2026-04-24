'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Shield, LogOut, User, Mail, KeyRound } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

interface UserData {
  email: string;
  role: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('auth');
  const tProfile = useTranslations('profile');

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then(data => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        router.push(`/${locale}/login`);
      });
  }, [router, locale]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push(`/${locale}/login`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">{tProfile('loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-blue-700 dark:border-red-700 bg-gradient-to-r from-blue-800 to-blue-900 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-red-600 dark:to-red-800">
                <Shield className="w-6 h-6 text-white dark:text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white dark:text-white">
                  CatGate
                </span>
                <div className="text-xs text-blue-200 dark:text-red-300">
                  Security Platform
                </div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {tProfile('title')}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {tProfile('welcome')}
              </p>
            </div>

            {/* Карточка профиля */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              {/* Информация о пользователе */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600 dark:text-red-400" />
                    {tProfile('accountInfo')}
                  </h2>
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                      <span className="font-medium w-16">{tProfile('email')}:</span>
                      {user?.email}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                      <span className="font-medium w-16">{tProfile('role')}:</span>
                      {user?.role}
                    </p>
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleLogout}
                    variant="primary"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg dark:from-red-600 dark:to-red-800 dark:hover:from-red-700 dark:hover:to-red-900"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    {tProfile('logout')}
                  </Button>
                  
                  <Link href={`/${locale}`}>
                    <Button variant="outline" className="w-full dark:border-gray-600 dark:text-gray-300 dark:hover:border-red-500 dark:hover:bg-red-950/30">
                      {tProfile('backToHome')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            {t('footer.copyright')}
          </div>
        </Container>
      </footer>
    </div>
  );
}