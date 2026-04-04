'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Shield, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('auth');
  const tLogin = useTranslations('auth.login');
  const tSocial = useTranslations('auth.social');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Login attempt:', { email, password });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      {/* Header - изменен фон градиента для темной темы */}
      <header className="py-6 border-b border-blue-700 dark:border-red-700 bg-gradient-to-r from-blue-800 to-blue-900 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              {/* Иконка с градиентом - в темной теме красная */}
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-red-600 dark:to-red-800">
                <Shield className="w-6 h-6 text-white dark:text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white dark:text-white">
                  CatGate
                </span>
                {/* Текст под логотипом - в темной теме красный */}
                <div className="text-xs text-blue-200 dark:text-red-300">
                  Security Platform
                </div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Link 
                href={`/${locale}/register`}
                className="text-sm font-medium text-blue-200 dark:text-red-300 hover:text-white dark:hover:text-red-200"
              >
                {tLogin('noAccount')}
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              {/* Заголовок - в темной теме белый */}
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {tLogin('title')}
              </h1>
              {/* Подзаголовок - светлее в темной теме */}
              <p className="text-gray-600 dark:text-gray-400">
                {tLogin('subtitle')}
              </p>
            </div>

            {/* Карточка формы - темный фон в темной теме */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {tLogin('emailLabel')}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={tLogin('emailPlaceholder')}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tLogin('passwordLabel')}
                    </label>
                    <Link 
                      href={`/${locale}/forgot-password`}
                      className="text-sm text-blue-600 hover:text-blue-700 dark:text-red-400 dark:hover:text-red-500"
                    >
                      {tLogin('forgotPassword')}
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-11 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={tLogin('passwordPlaceholder')}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-blue-600 dark:text-red-400 border-gray-300 dark:border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-red-500 bg-white dark:bg-gray-800"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {tLogin('rememberMe')}
                  </label>
                </div>

                {/* Submit Button - изменен градиент для темной темы */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-red-600 dark:to-red-800 text-white hover:from-blue-700 hover:to-cyan-700 dark:hover:from-red-700 dark:hover:to-red-900 shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? tLogin('submittingButton') : tLogin('submitButton')}
                </Button>
              </form>

              {/* Divider */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {tLogin('loginWith')}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {/* Google */}
                    <button 
                      className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group relative w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800"
                      title={`${tLogin('loginWith')} ${tSocial('google')}`}
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src="/logos/google.svg"
                          alt={tSocial('google')}
                          fill
                          className="object-contain"
                          sizes="24px"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
                          {tSocial('google')}
                        </span>
                      </div>
                    </button>

                    {/* GitHub */}
                    <button 
                      className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group relative w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800"
                      title={`${tLogin('loginWith')} ${tSocial('github')}`}
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src="/logos/github.svg"
                          alt={tSocial('github')}
                          fill
                          className="object-contain"
                          sizes="24px"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
                          {tSocial('github')}
                        </span>
                      </div>
                    </button>

                    {/* Yandex */}
                    <button 
                      className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group relative w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800"
                      title={`${tLogin('loginWith')} ${tSocial('yandex')}`}
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src="/logos/yandex.svg"
                          alt={tSocial('yandex')}
                          fill
                          className="object-contain"
                          sizes="24px"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
                          {tSocial('yandex')}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {tLogin('noAccount')}{' '}
                <Link 
                  href={`/${locale}/register`}
                  className="font-semibold text-blue-600 hover:text-blue-700 dark:text-red-400 dark:hover:text-red-500"
                >
                  {tLogin('registerLink')}
                </Link>
              </p>
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