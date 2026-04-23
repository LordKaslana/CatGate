'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Shield, LogOut, User } from 'lucide-react';
import Link from 'next/link';

interface UserData {
  login: string;
  role: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const locale = useLocale();

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-gray-600 dark:text-gray-400">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          {/* Карточка профиля */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Шапка карточки */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-red-600 dark:to-red-800 px-6 py-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Личный кабинет</h1>
                  <p className="text-blue-100 dark:text-red-100 mt-1">
                    Добро пожаловать в CatGate
                  </p>
                </div>
              </div>
            </div>

            {/* Контент */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Информация о пользователе */}
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Информация об аккаунте
                  </h2>
                  <div className="space-y-2 ml-7">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Логин:</span> {user?.login}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Роль:</span> {user?.role}
                    </p>
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className="flex gap-4">
                  <Button onClick={handleLogout} variant="primary" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800">
                    <LogOut className="w-4 h-4 mr-2" />
                    Выйти
                  </Button>
                  <Link href={`/${locale}`}>
                    <Button variant="outline">На главную</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}